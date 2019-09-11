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

        inductionStarted: false

    },

    methods: {
        beginInduction: function () {

            //this.addInductRate(0)

	    this.projectedLeft = this.totalPackages
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

        },

        addInductRate: function (inductRate) {
	    var currentTime = new Date().getTime()
            growler.inductRates.push({ rate: inductRate, time: currentTime , elapsedTime: this.inductRates.length == 0 ? 0 : currentTime - this.inductRates[this.inductRates.length-1].time })

            this.calculateEstimatedTime()

	    this.updateProjectedInduct()
        },

	updateProjectedInduct: function(){
		console.log("Updated Projected Induct")
		console.log("Converting milliseconds " + this.inductRates[this.inductRates.length-1].elapsedTime)
		var minutesElapsed = new Date(this.inductRates[this.inductRates.length-1].elapsedTime).getMinutes()
		console.log("Minutes Elapsed: " + minutesElapsed)
		var projectedInductedLast = this.getAverageRate() / 60 / 60 / 1000 * this.inductRates[this.inductRates.length-1].elapsedTime
		console.log("Projected Inducted: " + projectedInductedLast)
		this.projectedInducted = Math.round(this.projectedInducted + projectedInductedLast)
		this.projectedLeft = this.totalPackages - this.projectedInducted
		this.calculateEstimatedTime()
	},
	getAverageRate: function(){
	    var aveRate = this.inductRates.reduce((total, n) => total + n.rate, 0)


            aveRate = aveRate / this.inductRates.length

	    return aveRate
	},
        minutesRemaining: function () {

            return Number.isNaN(this.getAverageRate())? 0 : this.actualLeft / this.getAverageRate() * 60

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
        calculateProjectedInducted: function () {

            var aveRate = this.inductRates.reduce((total, n) => total + n.rate, 0)

            var timeElapsed = 0

        },


	getNiceTime: function(time){
		var dateTime = new Date(time);
		//return dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
		return dateTime.toLocaleTimeString()
	},
        updateTotalInducted: function(){

            if (event){

                console.log(event);

            }

            setTimeout(() => {this.calculateEstimatedTime()},1000)

        }

    }
})

