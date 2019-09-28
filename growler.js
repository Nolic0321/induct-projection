var growler = new Vue({
    el: "#growler",
    data: {
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
        chartData: [],
        startTime: null,
        ignoreRatesBelow: 0,
        ignoreRatesBefore: null
    },
    methods: {
        beginInduction: function () {
            this.inductionStarted = true
            this.startTime = new Date()
            this.ignoreRatesBefore = this.startTime
        },
        calculateEstimatedTime: function () {
            this.updateInducteLeftValues()
            var today = new Date();
            if (this.inductRates.length > 2) {
                var minutesRemaining = this.minutesRemaining()
                today.setMinutes(today.getMinutes() + minutesRemaining)
            }
            growler.estimatedTimeComplete = today.toLocaleTimeString();
            this.chartData.push([new Date(), this.getAverageRate()])
        },
        getAverageRate: function () {
            var countedRates = 0
            var reducedRates = this.inductRates.reduce(
                function (total, n) {
                    if (n.rate >= growler.ignoreRatesBelow) {
                        countedRates++
                        return total + n.rate
                    }
                    return total
                }, 0)
            return countedRates == 0 ? 0 : Math.round(reducedRates / countedRates)
        },
        addInductRate: function (inductRate) {
            growler.inductRates.push({
                rate: inductRate,
                time: new Date().getTime(),
                elapsed: this.inductRates == 0 ? 0 : new Date().getTime() - growler.inductRates[growler.inductRates.length - 1]
            })
            this.calculateEstimatedTime()
        },
        minutesRemaining: function () {
            var aveRate = this.getAverageRate()

            return Number.isNaN(aveRate) ? 0 : this.actualLeft / aveRate * 60
        },
        updateTotalPackages: function (newTotal) {
            this.totalPackages = newTotal
            this.updateInducteLeftValues()
            //Update current values to reflect new total changes
        },
        updateInducteLeftValues: function () {
            this.projectedInducted = Math.round(this.getAverageRate() / 60 / 60 / 1000 * ((new Date() - this.startTime)))
            this.actualLeft = this.totalPackages - this.totalInducted
            this.inductDifference = this.projectedInducted - this.totalInducted
        },
        totalInductedChanged: function (event) {
            clearInterval(timeout)
            if (event) {
                console.log(event);
            }
            timeout = setTimeout(() => {
                this.calculateEstimatedTime()
            }, 1000)
        },
        getNiceTime: function (time) {
            var dateTime = new Date(time);
            //return dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
            return dateTime.toLocaleTimeString()
        },
    }
})

var timeout = null