/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n// SIDEBAR TOGGLE\r\n\r\nvar sidebarOpen = false;\r\nvar sidebar = document.getElementById(\"sidebar\");\r\n\r\nfunction openSidebar() {\r\n    if (!sidebarOpen) {\r\n        sidebar.classList.add(\"sidebar-responsive\");\r\n        sidebarOpen = true;\r\n    }   \r\n}\r\n\r\nfunction closeSidebar() {\r\n    if(sidebarOpen){\r\n        sidebar.classList.remove(\"sidebar-responsive\");\r\n        sidebarOpen = false;\r\n    }\r\n    \r\n}\r\n\r\n// ----------CHARTS-------------\r\n\r\n// BAR Graph\r\n\r\nvar barChartOptions = {\r\n    series: [{\r\n    data: [10, 8, 6, 4, 2],\r\n    name: \"Products\"\r\n  }],\r\n    chart: {\r\n    type: 'bar',\r\n    height: 350,\r\n    toolbar:{\r\n        show: false,\r\n    },\r\n  },\r\n  colors:[\r\n    \"#2962ff\",\r\n    \"#d50000\",\r\n    \"#2e7d32\",\r\n    \"#ff6d00\",\r\n    \"#583cb3\",\r\n  ],\r\n  plotOptions: {\r\n    bar: {\r\n      borderRadius: 4,\r\n      horizontal: true,\r\n      horizontal: false,\r\n      columnWidth: \"40%\",\r\n    }\r\n  },\r\n  dataLabels: {\r\n    enabled: false\r\n  },\r\n  xaxis: {\r\n    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera', \r\n    ],\r\n  },\r\n  yaxis:{\r\n    title:{\r\n        text: \"Count\",\r\n        style:{\r\n            color: \"#f5f7ff\",\r\n        },\r\n    },\r\n  }\r\n  };\r\n\r\n  var chart = new ApexCharts(document.querySelector(\"#bar-chart\"), barChartOptions);\r\n  chart.render();\n\n//# sourceURL=webpack://micro-website/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;