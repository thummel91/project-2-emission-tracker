import CanvasJSReact from "./canvasjs.react";
import React, { useEffect } from 'react'

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Graph = ({
  twoDecimal,
  threeDecimal,
  fourDecimal,
  fiveDecimal,
  sixDecimal,
  sevenDecimal,
  eightDecimal,
  nineDecimal,
  tenDecimal,
}) => {

  let two = Number(twoDecimal);
  let three = Number(threeDecimal);
  let four = Number(fourDecimal);
  let five = Number(fiveDecimal);
  let six = Number(sixDecimal);
  let seven = Number(sevenDecimal);
  let eight = Number(eightDecimal);
  let nine  = Number(nineDecimal);
  let ten = Number(tenDecimal)
  
  const options = {
    title: {
      text: "Basic Column Chart in React",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Natural Gas", y: two },
          { label: "Biomass", y: three },
          { label: "Coal", y: four },
          { label: "Geothermal", y: five },
          { label: "Hydro", y: six },
          { label: "Nuclear", y: seven },
          { label: "Petroleum", y: eight },
          { label: "Solarvoltaic", y: nine },
          { label: "Wind", y: ten },
        ],
      },
    ],
  };
  useEffect(() => {
    if(two === 'NaN') {
        Graph()
    }
})
  return (
    <div>
      <CanvasJSChart
        options={options}
        />
    </div>
  );
};



export default Graph;
