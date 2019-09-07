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

        },

        addInductRate: function (inductRate) {

            growler.inductRates.push({ rate: inductRate, time: new Date().getTime() })

            this.calculateEstimatedTime()

        },

        minutesRemaining: function () {

            var aveRate = this.inductRates.reduce((total, n) => total + n.rate, 0)


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
        calculateProjectedInducted: function () {

            var aveRate = this.inductRates.reduce((total, n) => total + n.rate, 0)

            var timeElapsed = 0

        },

        totalInductedChanged: function(event){

            clearInterval(timeout)

            if (event){

                console.log(event);

            }

            timeout = setTimeout(() => {this.calculateEstimatedTime()},1000)

        }

    }
})


var timeout = null