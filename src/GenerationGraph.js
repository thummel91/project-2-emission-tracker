import CanvasJSReact from "./canvasjs.react";
import React, { useEffect } from "react";

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GenerationGraph = ({
  twoDecimal,
  threeDecimal,
  fourDecimal,
  twelveDecimal,
  sixDecimal,
  sevenDecimal,
  elevenDecimal,
  nineDecimal,
  tenDecimal,
}) => {
    let two = Number(twoDecimal);
    let three = Number(threeDecimal);
    let four = Number(fourDecimal);
    let five = Number(twelveDecimal);
    let six = Number(sixDecimal);
    let seven = Number(sevenDecimal);
    let eight = Number(elevenDecimal);
    let nine  = Number(nineDecimal);
    let ten = Number(tenDecimal)

		const options = {
			animationEnabled: true,
			title:{
				text: "Energy Generation by Method"
			},
			axisX: {
				title: "Method of Generation",
				reversed: true,
			},
			axisY: {
				title: "Terawatt Hours",
				includeZero: true,
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  ten, label: "Wind" },
					{ y:  nine, label: "Solar" },
					{ y:  three, label: "Biomass" },
					{ y:  six, label: "Hydro" },
					{ y:  eight, label: "Other Renewables" },
					{ y:  seven, label: "Nuclear" },
					{ y:  five, label: "Other Fossil Fuels" },
					{ y:  two, label: "Natural Gas" },
					{ y:  four, label: "Coal" },
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

export default GenerationGraph;
