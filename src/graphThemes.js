const graphThemes = {
  legend: {
    gutter: 15,
    orientation: "horizontal",
    titleOrientation: "top",
    style: {
      data: {
        type: "square",
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
      },
    }
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#ccc",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      grid: {
        fill: "none",
        stroke: "none",
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#ccc",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      tickLabels: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 8.3,
        letterSpacing: "normal",
        padding: 4,
        fill: "#666",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
  },
  bar: {
    style: {
      data: {
        strokeWidth: 0,
      },
    },
  },
  chart: {
    width: 800,
    height: 350,
    padding: 50,
  },
};

export default graphThemes;