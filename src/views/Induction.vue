<style scoped>
[v-cloak] {
	display: none;
}
</style>

<template>
	<div>
		<div v-cloak v-show="inductionStarted">
			<h1>Estimated Time Completed: {{ estimatedTimeComplete }}</h1>
		</div>
		<hr />
		<div>
			Total Packages:
			<input type="text" v-on:change="calculateEstimatedTime()" v-model.number.lazy="totalPackages" />
		</div>
		<div>
			<button v-show="!inductionStarted" v-on:click="beginInduction()">
				Begin Induction
			</button>
		</div>
		<div v-show="inductionStarted" v-cloak>
			<div>
				Induct Rate:
				<input type="text" v-model.number.lazy="inductRate" onclick="this.select()" />
				<button v-on:click="addInductRate(inductRate)">Add Rate</button>
				<br />Total Inducted
				<input type="text" v-model.number.lazy="totalInducted" />
				<button v-on:click="calculateEstimatedTime()">Update</button>
				<br />
				<button v-on:click="resetPage()">Reset</button>
			</div>
			<hr />
			<div>
				<h1>Target Induct Rate: {{ targetRate }}</h1>
			</div>
			<div><label for="checkbox">Include break?</label> <input type="checkbox" id="checkbox" v-model="includeBreak" v-on:change="calculateEstimatedTime" /></div>
			<div>Target Completion Time<datetime id="targetcompletiontime" v-model="inductCompletionTime" type="datetime" v-on:change="calculateEstimatedTime"></datetime></div>
			<div>Average Overall Rate: {{ getAverageRate() }}</div>
			<hr />
			<div>
				Ignore Rates Before:
				<datetime id="ignoreratesbefore" v-model="ignoreRatesBefore" type="datetime"></datetime>
			</div>
			<div>
				<h3>Average Rates</h3>
			</div>
			<line-chart ref="linechart" :data="chartData" :curve="false" :discrete="true" :min="0" label="Average Rate"></line-chart>
		</div>
		<hr />
	</div>
</template>

<script>
import Vue from "vue";
import ChartKick from "vue-chartkick";
import Chart from "chart.js";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import low from "lowdb";
import LocalStoreage from "lowdb/adapters/LocalStorage";

Date.prototype.toMinutes = function() {
	return this.valueOf() / 1000 / 60;
};

Date.prototype.toHours = function() {
	return this.valueOf() / 1000 / 60 / 60;
};

const adapter = new LocalStoreage("inductrates");
const db = low(adapter);

const freshRateState = { rates: [], averageRate: [], totalPackages: 0, inductionStarted: false, startTime: null };
db.defaults(freshRateState).write();

Vue.use(ChartKick.use(Chart));
Vue.use(Datetime);
export default {
	name: "induction-projection",
	components: {
		datetime: Datetime
	},
	data: function() {
		return {
			totalPackages: 0,
			totalInducted: 0,
			inductRate: 0,
			today: new Date(),
			estimatedTimeComplete: new Date().toLocaleTimeString(),
			actualLeft: 0,
			inductionStarted: false,
			chartData: [
				{ name: "Rates", data: {} },
				{ name: "Average Rate", data: {} }
			],
			startTime: null,
			ignoreRatesBelow: 0,
			ignoreRatesBefore: null,
			inductCompletionTime: null,
			includeBreak: true,
			targetRate: 0
		};
	},
	mounted() {
		this.inductionStarted = db.get("inductionStarted").value();
		this.startTime = db.get("startTime").value();
		this.inductCompletionTime = db.get("inductionCompletionTime").value();
		this.totalPackages = db.get("totalPackages").value();
		this.ignoreRatesBefore = this.startTime;
		if (db.get("rates").size() > 0) this.calculateEstimatedTime();
	},
	methods: {
		beginInduction: function() {
			this.startTime = new Date();
			this.inductCompletionTime = new Date();
			this.inductCompletionTime.setHours(10, 0, 0);
			this.ignoreRatesBefore = new Date();
			db.setState(freshRateState);
			this.inductionStarted = true;
			db.set("totalPackages", this.totalPackages)
				.set("inductionStarted", this.inductionStarted)
				.set("startTime", this.startTime)
				.set("inductionCompletionTime", this.inductCompletionTime)
				.write();
		},
		resetPage: function() {
			db.setState(freshRateState).write();
			location.reload();
		},
		calculateEstimatedTime: function() {
			this.actualLeft = this.totalPackages - this.totalInducted;
			var today = new Date();
			var inductRates = this.getLSInductRates();
			if (inductRates.length > 2) {
				var minutesRemainingByPackageCount = this.minutesRemainingByPackageCount();
				today.setMinutes(today.getMinutes() + minutesRemainingByPackageCount);
			}
			this.estimatedTimeComplete = today.toLocaleTimeString();
			this.calculateTargetInductRate();
			this.refreshChart();
		},
		calculateTargetInductRate: function() {
			var date = new Date();
			var completionDate = new Date(this.inductCompletionTime);
			var remainingPackages = this.totalPackages - this.totalInducted;
			var remainingMinutes = completionDate.toMinutes() - date.toMinutes();
			this.targetRate = Math.round((remainingPackages / (remainingMinutes - (this.includeBreak ? 15 : 0))) * 60);
		},
		refreshChart: function() {
			if (db.get("rates").size() != 0) {
				db.get("rates")
					.value()
					.forEach((rate, key) => {
						this.chartData[0]["data"][new Date(rate.time).toLocaleString()] = rate.rate;
					});
				db.get("averageRate")
					.value()
					.forEach((rate, key) => {
						this.chartData[1]["data"][new Date(rate.time).toLocaleString()] = rate.rate;
					});
			}
			this.$refs.linechart.updateChart();
		},
		getAverageRate: function() {
			var inductRates = this.getLSInductRates();
			var countedRates = 0;
			var ignoreRatesBeforeTime = new Date(this.ignoreRatesBefore);
			var reducedRates = inductRates.reduce(function(total, n) {
				if (n.time >= ignoreRatesBeforeTime) {
					countedRates++;
					return total + n.rate;
				}
				return total;
			}, 0);
			return countedRates == 0 ? 0 : Math.round(reducedRates / countedRates);
		},
		addInductRate: function(inductRate) {
			var currentTime = new Date().getTime();
			db.get("rates")
				.push({
					rate: inductRate,
					time: currentTime
				})
				.write();
			db.get("averageRate")
				.push({
					rate: this.getAverageRate(),
					time: currentTime
				})
				.write();
			this.calculateEstimatedTime();
		},
		minutesRemainingByPackageCount: function() {
			var aveRate = this.getAverageRate();
			return (this.actualLeft / aveRate) * 60 + this.includeBreak ? 15 : 0;
		},
		totalInductedChanged: function(event) {
			var timeout;
			clearInterval(timeout);
			timeout = setTimeout(() => {
				this.calculateEstimatedTime();
			}, 1000);
		},
		getNiceTime: function(time) {
			var dateTime = new Date(time);
			//return dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
			return dateTime.toLocaleTimeString();
		},
		getLSInductRates: function() {
			return db.get("rates").value();
		},
		getLSAverageRates: function() {
			return db.get("averageRates").value();
		}
	}
};
</script>
