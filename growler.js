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
        chartData: []
    },
    methods: {
        beginInduction: function () {
            this.addInductRate(0)
            this.inductionStarted = true
        },
        calculateEstimatedTime: function () {
            this.updateActualLeft()
            var today = new Date();
            if (this.inductRates.length > 2) {
                var minutesRemaining = this.minutesRemaining()
                today.setMinutes(today.getMinutes() + minutesRemaining)
            }
            growler.estimatedTimeComplete = today.toLocaleTimeString();
            this.chartData.push([new Date(), this.getAverageRate()])
        },
        getAverageRate: function () {
            return this.inductRates.reduce((total, n) => total + n.rate, 0)/this.inductRates.length;
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

            aveRate = aveRate / this.inductRates.length
            return Number.isNaN(aveRate) ? 0 : this.actualLeft / aveRate * 60
        },
        updateTotalPackages: function (newTotal) {
            this.totalPackages = newTotal
            this.updateActualLeft()
            //Update current values to reflect new total changes
        },
        updateActualLeft: function () {
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