var growler = new Vue({
    el: "#growler",
    data: {
        totalPackages: 0,
        inductRates: [],
        totalInducted: 0,
        inductRate: 0,
	   completionTime: null,
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
        ignoreRatesBefore: null,
        inductURL:'',
	  completionRate:0
    },
    methods: {
        beginInduction: function () {
            this.inductionStarted = true
            this.startTime = new Date()
            this.ignoreRatesBefore = new Date()
		 this.completionTime = new Date(this.startTime)
            this.completionTime.setHours(10,0,0)
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
	   updateCompletionRate: function(){
		 console.log("updating completion rate")
		 console.log(this.completionTime)
		 var completionTimeDate = new Date(this.completionTime)
		 console.log(Math.round((completionTimeDate - new Date())))
		 console.log(Math.round((completionTimeDate - new Date())/60/60/1000))
	  	 this.completionRate = this.actualLeft / Math.round((completionTimeDate - new Date())/60/60/1000)
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
		 this.updateCompletionRate()
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
        beginRequesting: function (interval) {
            setTimeout(() => {
                growler.requestInductRate(growler.inductURL)
            }, interval * 1000)
        },
        getNiceTime: function (time) {
            var dateTime = new Date(time);
            //return dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
            return dateTime.toLocaleTimeString()
        },
        requestInductRate: function(url){
            axios.get(url)
            .then(function(response){
                console.log(response);
                //TODO: Implement this after figuring out response structure
                //growler.addInductRate(response.inductRate)
            })
        }
    }
})

var timeout = null