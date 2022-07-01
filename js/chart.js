'use strict'

let chartEl = getElementById("myChart").getContext('2d');
let ctx = chartEl.getContext("2d");

let voteChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: images,
        databases: [{
            label: 'Number of Votes',
            data: totalVotes,
            backgroundColor: ['orange', 'green', 'blue'],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Total of Votes Per Product',
        }

    }
})