// Sample data for the subdivided bar graph
var data = {
    labels: ['20', '', '25', '', '30', '', '35', '', '40', '', '45', '', '50'],
    datasets: [
        {
            label: 'Employer',
            backgroundColor: 'rgba(9,0,163,255)',
            data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65]
        },
        {
            label: 'Employee',
            backgroundColor: 'rgba(74,54,255,255)',
            data: [7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67]
        },
        {
            label: 'Total Interest',
            backgroundColor: 'rgba(133,175,255,255)',
            data: [28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148]
        }
        
    ]
};

// Chart configuration
var config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: { 
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
                ticks: {
                    stepSize: 100,
                    beginAtZero: true,
                    callback: function (value) {
                        return '$' + value;
                    }
                },
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#9e9e9e' 
                }
            }
        }
    }
};

// Create the chart
var contributionChart = new Chart(document.getElementById('contributionChart'), config);







// Sample Data
var data = {
    'Average': {'GoalAchievement': 78},
    'Top': {'GoalAchievement': 95},
    'You': {'GoalAchievement': 59}
};

// Function to create a doughnut chart
function createDoughnutChart(canvasId, label, value) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [value, 100 - value],
                backgroundColor: ['#22d6a9', '#d3f7ee']
            }]
        },
        options: {
            title: {
                display: false,
                text: label
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var percentage = dataset.data[tooltipItem.index];
                        return percentage + '%';
                    }
                }
            },
            maintainAspectRatio: true, 
            legend: {
                display: false
            },
            cutoutPercentage: 10, 
            plugins: {
                legend: {
                    labels: {
                        color: '#9e9e9e' 
                    }
                }
            }
        }
    });
}

// Create Doughnut Charts
createDoughnutChart('averageChart', 'Average Goal Achievement', data['Average']['GoalAchievement']);
createDoughnutChart('topChart', 'Top Performers Goal Achievement', data['Top']['GoalAchievement']);
createDoughnutChart('yourChart', 'Your Goal Achievement', data['You']['GoalAchievement']);





var percentage = 60; // Set the desired percentage

    var ctx = document.getElementById('percentageChart').getContext('2d');
    var percentageChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Percentage'],
        datasets: [{
          data: [percentage],
          backgroundColor: '#4CAF50',
          borderWidth: 0
        }]
      },
      options: {
        scales: {
          x: {
            min: 0,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });