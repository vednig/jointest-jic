
var ctx = document.getElementById('public')
//console.log("run")
//console.log(document.getElementById("cover").classList.value)
var publicChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Marks Scored',
            data: [],
     
            borderColor:
            'rgb(189, 78, 204)',
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    //suggestedMin: 50,
                    //suggestedMax: 100,
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx1 = document.getElementById('personalchart').getContext('2d');
//-----Dark Mode Here----
/*setTimeout(() => {
    document.getElementById("cover").classList.value="card bg-dark text-light";
    document.body.style.backgroundImage='linear-gradient(violet,purple)';
}, 100000);
*/
var personalChart = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            label: 'Marks Scored',
            data: [],
     
            borderColor:
            'rgb(189, 78, 204)',
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
//-----Dark Mode Here----
/*setTimeout(() => {
    document.getElementById("cover").classList.value="card bg-dark text-light";
    document.body.style.backgroundImage='linear-gradient(violet,purple)';
}, 100000);*/


