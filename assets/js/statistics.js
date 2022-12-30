var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
            label: 'Visitors',
            fill:false,
            lineTension:0,
            backgroundColor: '#3DB83A',
            borderColor: '#3DB83A',
            data: [0, 10, 10, 6, 5, 8, 16, 10, 6, 5, 8, 16]
        },
        {
            label: 'Views',
            fill:false,
            lineTension:0,
            backgroundColor: '#FFA010',
            borderColor: '#FFA010',
            data: [0, 5, 8, 16, 1, 10, 23, 8, 16, 1, 10, 23]
        },
        {
            label: 'Chat Requests',
            fill:false,
            lineTension:0,
            backgroundColor: 'rgb(34, 192, 255)',
            borderColor: 'rgb(34, 192, 255)',
            data: [0, 6, 11, 10, 7, 4, 15, 11, 10, 7, 4, 15]
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        tooltips:{
          mode: 'x',
          intersect: false,
        },
        legend:{
            align: 'end',
            labels: {
                padding: 20,
                fontColor: ['#211347']
            }
        }
    }
});