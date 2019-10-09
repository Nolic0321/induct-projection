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
        chartData: {
            datasets: [{
                    label: 'Average Rates',
                    data: []
                },
                {
                    label: 'Rates',
                    data: []
                }
            ]
        },
        startTime: null,
        ignoreRatesBelow: 0,
        ignoreRatesBefore: null,
        inductURL: '',
        chartOptions: {
            title: 'Rates'
        }
    },
    methods: {
        beginInduction: function () {
            this.inductionStarted = true
            this.startTime = new Date()
            this.ignoreRatesBefore = new Date()
        },
        calculateEstimatedTime: function () {
            this.updateInducteLeftValues()
            var today = new Date();
            if (this.inductRates.length > 2) {
                var minutesRemaining = this.minutesRemaining()
                today.setMinutes(today.getMinutes() + minutesRemaining)
            }
            growler.estimatedTimeComplete = today.toLocaleTimeString();
            this.updateChartData()
        },
        getAverageRate: function () {
            var countedRates = 0
            var ignoreRatesBeforeTime = new Date(this.ignoreRatesBefore)
            var reducedRates = this.inductRates.reduce(
                function (total, n) {
                    if (n.time >= ignoreRatesBeforeTime) {
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
            growler.updateChartData()
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
        updateChartData: function () {
            growler.chartData.datasets[0].data.push({
                x: new Date(),
                y: growler.getAverageRate()
            })
            growler.chartData.datasets[1].data.push({
                x: new Date(),
                y: growler.inductRates[growler.inductRates.length - 1]
            })
        },
        getNiceTime: function (time) {
            var dateTime = new Date(time);
            //return dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
            return dateTime.toLocaleTimeString()
        },
        requestInductRate: function (url) {
            axios.get(
                    url, {
                        method: 'GET',
                        mode: 'no-cors',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        }
                    })
                .then(function (response) {
                    console.log(response)
                })
        }
    }
})

var timeout = null