import CanvasJSReact from "./canvasjs.react";
import React, { useEffect } from 'react'

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;


// const Graph = ({
//   twoDecimal,
//   threeDecimal,
//   fourDecimal,
//   fiveDecimal,
//   sixDecimal,
//   sevenDecimal,
//   eightDecimal,
//   nineDecimal,
//   tenDecimal,
// }) => {

//   let two = Number(twoDecimal);
//   let three = Number(threeDecimal);
//   let four = Number(fourDecimal);
//   let five = Number(fiveDecimal);
//   let six = Number(sixDecimal);
//   let seven = Number(sevenDecimal);
//   let eight = Number(eightDecimal);
//   let nine  = Number(nineDecimal);
//   let ten = Number(tenDecimal)
  
//   const options = {
//     title: {
//       text: "Carbon Emissions from Electricity by Method of Generation",
//     },
//     data: [
//       {
//         type: "column",
//         dataPoints: [
//           { label: "Natural Gas", y: two },
//           { label: "Biomass", y: three },
//           { label: "Coal", y: four },
//           { label: "Geothermal", y: five },
//           { label: "Hydro", y: six },
//           { label: "Nuclear", y: seven },
//           { label: "Petroleum", y: eight },
//           { label: "Solarvoltaic", y: nine },
//           { label: "Wind", y: ten },
//         ],
//       },
//     ],
//   };
//   useEffect(() => {
//     if(two === 'NaN') {
//         Graph()
//     }
// })
//   return (
//     <div>
//       <CanvasJSChart
//         options={options}
//         />
//     </div>
//   );

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
			animationEnabled: true,
			title:{
				text: "Carbon Emissions from Electricity by Method of Generation"
			},
			axisX: {
				title: "Method of Generation",
				reversed: true,
			},
			axisY: {
				title: "KG of carbon dioxide equivalent per €100",
				includeZero: true,
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  two, label: "Natural Gas" },
					{ y:  three, label: "Biomass" },
					{ y:  four, label: "Coal" },
					{ y:  five, label: "Geothermal" },
					{ y:  six, label: "Hydro" },
					{ y:  seven, label: "Nuclear" },
					{ y:  eight, label: "Petroleum" },
                    { y:  nine, label: "Solarvoltaic" },
                    { y:  ten, label: "Wind" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}





export default Graph;
