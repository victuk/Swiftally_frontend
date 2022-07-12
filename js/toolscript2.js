

  var options = {
    series: [{
    name: 'First Candidate',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'Second candidate',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'Third Candidate',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'Fourth Candidate',
    data: [21, 7, 25, 13, 22, 8]
  }],
  


 
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  title: {
    text: 'Voting analysis of Electoral candidates',
    align: 'left'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10
    },
  },
  xaxis: {
    categories: ['Dodeye', 'Butum', 'Wofai', 'Mike',
      'Cheta', 'obino'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();

  