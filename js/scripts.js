
// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }   
}

function closeSidebar() {
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
    
}

// ----------CHARTS-------------

// BAR Graph

var barChartOptions = {
    series: [{
    data: [10, 8, 6, 4, 2],
    name: "Products"
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show: false,
    },
  },
  colors:[
    "#2962ff",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#583cb3",
  ],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera', 
    ],
  },
  yaxis:{
    title:{
        text: "Count",
        style:{
            color: "#f5f7ff",
        },
    },
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  chart.render();