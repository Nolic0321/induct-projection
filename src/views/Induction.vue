<style scoped>
[v-cloak] {
  display: none;
}
</style>

<template>
  <div>
    <div v-cloak v-show="inductionStarted">
      <h1>Estimated Time Completed: {{estimatedTimeComplete}}</h1>
    </div>
    <hr />
    <div>
      Total Packages:
      <input
        type="text"
        v-on:change="updateTotalPackages(totalPackages)"
        v-model.number.lazy="totalPackages"
      />
    </div>
    <div>
      <button v-show="!inductionStarted" v-on:click="beginInduction()">Begin Induction</button>
    </div>
    <div v-show="inductionStarted" v-cloak>
      <div>
        Induct Rate:
        <input type="text" v-model.number.lazy="inductRate" onclick="this.select()" />
        <button v-on:click="addInductRate(inductRate)">Add Rate</button>
        <br />Total Inducted
        <input type="text" v-model.number.lazy="totalInducted" />
        <button v-on:click="calculateEstimatedTime()">Update</button>
      </div>
      <hr />
      <div>
        Average Overall Rate: {{getAverageRate()}}
        <br />
        Projected Inducted: {{projectedInducted}}
        <br />
        Actual Inducted: {{totalInducted}}
        <br />
        Difference: {{inductDifference}}
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
import { DateTime } from "vue-datetime";

Vue.use(ChartKick.use(Chart));
export default {
  name: "induction-projection",
  components: {
    datetime: DateTime
  },
  data: function() {
    return {
      totalPackages: 0,
      inductRates: [],
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
  methods: {
    beginInduction: function() {
      this.inductionStarted = true;
      this.startTime = new Date();
      this.ignoreRatesBefore = new Date();
    },
    calculateEstimatedTime: function() {
      this.updateInducteLeftValues();
      var today = new Date();
      if (this.inductRates.length > 2) {
        var minutesRemaining = this.minutesRemaining();
        today.setMinutes(today.getMinutes() + minutesRemaining);
      }
      this.estimatedTimeComplete = today.toLocaleTimeString();
      //this.chartData.push([new Date(), this.getAverageRate()]);
      var entry = new Date().toLocaleTimeString();
      this.chartData[1]["data"][entry] = this.getAverageRate();
      this.chartData[0]["data"][
        new Date().toLocaleTimeString()
      ] = this.inductRates[this.inductRates.length - 1].rate;
      this.$refs.linechart.updateChart();
    },
    getAverageRate: function() {
      var countedRates = 0;
      var ignoreRatesBeforeTime = new Date(this.ignoreRatesBefore);
      var reducedRates = this.inductRates.reduce(function(total, n) {
        if (n.time >= ignoreRatesBeforeTime) {
          countedRates++;
          return total + n.rate;
        }
        return total;
      }, 0);
      return countedRates == 0 ? 0 : Math.round(reducedRates / countedRates);
    },
    addInductRate: function(inductRate) {
      this.inductRates.push({
        rate: inductRate,
        time: new Date().getTime(),
        elapsed:
          this.inductRates == 0
            ? 0
            : new Date().getTime() -
              this.inductRates[this.inductRates.length - 1]
      });
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
      this.projectedInducted = Math.round(
        (this.getAverageRate() / 60 / 60 / 1000) * (new Date() - this.startTime)
      );
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
    }
  }
};
</script>
