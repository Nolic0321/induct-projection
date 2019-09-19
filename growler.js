var growler = new Vue({

    el: "#growler",
    data: {
        totalPackages: 0,
        inductRates: [],
        totalInducted: 0,
        inductRate: 0,
        estimatedTimeComplete: new Date().toLocaleTimeString(),
        projectedInducted: 0,
        actualLeft: 0,
        inductDifference: 0,
        inductionStarted: false,    //Used to show/hide html elements
        startTime: null
    },
    methods: {
        beginInduction: function () {
            this.inductionStarted = true
            this.startTime = new Date()
            this.queueNextRequest()
        },
        calculateEstimatedTime: function () {
            this.updateActualLeft()
            var today = new Date();
            if (this.inductRates.length > 2) {
                var minutesRemaining = this.minutesRemaining()
                today.setMinutes(today.getMinutes() + minutesRemaining)
            }
            growler.estimatedTimeComplete = today.toLocaleTimeString();
        },
        addInductRate: function (inductRate) {
            var currentTime = new Date().getTime()
            var timeElapsed = this.inductRates.length == 0 ? 0 : currentTime - this.inductRates[this.inductRates.length - 1].time
            growler.inductRates.push({ rate: inductRate, time: currentTime, elapsedTime: timeElapsed})
            this.calculateEstimatedTime()
            this.updateProjectedInduct()
        },
        updateProjectedInduct: function () {
            this.projectedInducted = Math.round(this.getAverageRate() / 60 / 60 / 1000 * (new Date().getTime() - this.startTime))
            this.calculateEstimatedTime()
        },
        getAverageRate: function () {
            var aveRate = this.inductRates.reduce((total, n) => total + n.rate, 0)
            aveRate = aveRate / this.inductRates.length
            return aveRate
        },
        queueNextRequest: function () {
            console.log("Queueing Request")
            setTimeout(() => {
                var a = this
                a.requestInductData()
            },
                3000)
        },
        requestInductData: function () {
            //https://logistics.amazon.com/station/induct/data
            //currResponseData.value
            axios
                .get("https://logistics.amazon.com/station/induct/data", { crossdomain: true })
                .then(response => {
                    this.addInductRate(response.curreResponseData.value)
                    this.queueNextRequest()
                })
        },
        minutesRemaining: function () {
            return Number.isNaN(this.getAverageRate()) ? 0 : this.actualLeft / this.getAverageRate() * 60
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
        getNiceTime: function (time) {
            var dateTime = new Date(time);
            //return dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
            return dateTime.toLocaleTimeString()
        },
        updateTotalInducted: function () {
            if (event) {
                console.log(event);
            }
            setTimeout(() => { this.calculateEstimatedTime() }, 1000)
        }
    }
})

