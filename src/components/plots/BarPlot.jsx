import React from 'react';
import Plot from 'react-plotly.js';

const BarPlot = () => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={ {
        paper_bgcolor:"#161a1d", 
        plot_bgcolor:"#161a1d",
        width: 640, 
        height: 480, 
        title: 'A Fancy Plot',
        font: {
          color: 'white',
        }
      } }
    />
  );
};

export default BarPlot;