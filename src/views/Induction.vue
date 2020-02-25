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
			<input type="text" v-on:change="updateTotalPackages(totalPackages)" v-model.number.lazy="totalPackages" />
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
				Average Overall Rate: {{ getAverageRate() }}
				<br />
				Projected Inducted: {{ projectedInducted }}
				<br />
				Actual Inducted: {{ totalInducted }}
				<br />
				Difference: {{ inductDifference }}
				<div v-show="inductDifference > 0">Increase Induct Rate</div>
			</div>
			<hr />
			<div>
				Ignore Rates Before:
				<datetime v-model="ignoreRatesBefore" type="datetime"></datetime>
			</div>
			<div>
				<h3>Average Rates</h3>
			</div>
			<line-chart ref="linechart" :data="chartData" :min="0" label="Average Rate"></line-chart>
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
			projectedInducted: 0,
			projectedLeft: 0,
			actualLeft: 0,
			inductDifference: 0,
			inductionStarted: false,
			chartData: [
				{ name: "Rates", data: {} },
				{ name: "Average Rate", data: {} }
			],
			startTime: null,
			ignoreRatesBelow: 0,
			ignoreRatesBefore: null
		};
	},
	mounted() {
		this.inductionStarted = db.get("inductionStarted").value();
		this.startTime = db.get("startTime").value();
		this.totalPackages = db.get("totalPackages").value();
		this.ignoreRatesBefore = this.startTime;
		if (db.get("rates").size() > 0) this.calculateEstimatedTime();
	},
	methods: {
		beginInduction: function() {
			this.inductionStarted = true;
			this.startTime = new Date();
			this.ignoreRatesBefore = new Date();
			db.setState(freshRateState);
			db.set("totalPackages", this.totalPackages)
				.set("inductionStarted", this.inductionStarted)
				.set("startTime", this.startTime)
				.write();
		},
		resetPage: function() {
			db.setState(freshRateState).write();
			location.reload();
		},
		calculateEstimatedTime: function() {
			this.updateInducteLeftValues();
			var today = new Date();
			var inductRates = this.getLSInductRates();
			if (inductRates.length > 2) {
				var minutesRemaining = this.minutesRemaining();
				today.setMinutes(today.getMinutes() + minutesRemaining);
			}
			this.estimatedTimeComplete = today.toLocaleTimeString();
			// //this.chartData.push([new Date(), this.getAverageRate()]);
			// var entry = new Date().toLocaleTimeString();
			// this.chartData[1]["data"][entry] = this.getAverageRate();
			// this.chartData[0]["data"][new Date().toLocaleTimeString()] = inductRates[inductRates.length - 1].rate;
			this.refreshChart();
			this.$refs.linechart.updateChart();
		},
		refreshChart: function() {
			if (db.get("rates").size() != 0) {
				db.get("rates")
					.value()
					.forEach((key, rate) => {
						this.chartData[0]["data"][new Date(rate.time).toLocaleTimeString()] = rate.rate;
					});
				db.get("averageRate")
					.value()
					.forEach((key, rate) => {
						this.chartData[1]["data"][new Date(rate.time).toLocaleTimeString()] = rate.rate;
					});
			}
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
		minutesRemaining: function() {
			var aveRate = this.getAverageRate();

			return Number.isNaN(aveRate) ? 0 : (this.actualLeft / aveRate) * 60;
		},
		updateTotalPackages: function(newTotal) {
			this.totalPackages = newTotal;
			this.updateInducteLeftValues();
			//Update current values to reflect new total changes
		},
		updateInducteLeftValues: function() {
			this.projectedInducted = Math.round((this.getAverageRate() / 60 / 60 / 1000) * (new Date() - this.startTime));
			this.actualLeft = this.totalPackages - this.totalInducted;
			this.inductDifference = this.projectedInducted - this.totalInducted;
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
