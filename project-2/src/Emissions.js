import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Graph from "./Graph";


// const energy = ["_gas", "_biomass_waste", "_coal", "_geothermal", "_hydro", "_nuclear", "_petroleum_other_oil_derivatives", "_solar_photovoltaic", "_wind"]



const Emissions = () => {
  const { id, name } = useParams();
  const [gas, setGas] = useState();
  const [biomass, setBiomass] = useState();
  const [coal, setCoal] = useState();
  const [geothermal, setGeothermal] = useState();
  const [hydro, setHydro] = useState();
  const [nuclear, setNuclear] = useState();
  const [pet, setPet] = useState();
  const [solar, setSolar] = useState();
  const [wind, setWind] = useState();




  //GAS
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_gas",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
  
      .then((data) => data.co2e)
      .then((data) =>
        setGas(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let twoDecimal = parseFloat(gas).toFixed(2);
  //BIOMASS
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_biomass_waste",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setBiomass(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let threeDecimal = parseFloat(biomass).toFixed(2);

  //COAL
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_coal",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setCoal(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let fourDecimal = parseFloat(coal).toFixed(2);

  //Geothermal
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_geothermal",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setGeothermal(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let fiveDecimal = parseFloat(geothermal).toFixed(2);

  //HYDRO
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_hydro",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setHydro(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let sixDecimal = parseFloat(hydro).toFixed(2);

  //NUCLEAR
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_nuclear",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setNuclear(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let sevenDecimal = parseFloat(nuclear).toFixed(2);

  //Petroleum
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id:
            "electricity-energy_source_petroleum_other_oil_derivatives",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setPet(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let eightDecimal = parseFloat(pet).toFixed(2);

  //Solar
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_solar_photovoltaic",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setSolar(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let nineDecimal = parseFloat(solar).toFixed(2);
    //Wind
  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emission_factor: {
          activity_id: "electricity-energy_source_wind",
          region: id,
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data.co2e)
      .then((data) =>
        // console.log(data)
        setWind(data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  let tenDecimal = parseFloat(wind).toFixed(2);

  return (
    <div>
    <div className="graph">
        <Graph twoDecimal = {twoDecimal} threeDecimal= {threeDecimal} fourDecimal={fourDecimal} fiveDecimal={fiveDecimal} sixDecimal={sixDecimal} sevenDecimal={sevenDecimal} eightDecimal={eightDecimal} nineDecimal={nineDecimal} tenDecimal={tenDecimal}
        />
    </div>
    <div className ='emissions'>
      {/* Natual Gas */}
      <div>
        <h1>{name}</h1>
        {gas !== undefined ? (
          <div>
            <div>
              <p className="eList">Natural Gas: <br></br>{twoDecimal} kg co2e per €100 </p>
            </div>
          </div>
        ) : (
          <p className="eList">
            There is no emissions data on electricity generated by gas in {name}
          </p>
        )}
      </div>
      {/* Biomass */}
      <div>
        <div>
          {biomass !== undefined ? (
            <div>
              <div>
                <p className="eList">Biomass: <br></br>{threeDecimal} kg co2 equivalent per €100</p>
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by biomass in {name}
            </p>
          )}
        </div>
      </div>
      {/* Coal */}
      <div>
        <div>
          {coal !== undefined ? (
            <div>
              <div>
                <p className="eList"> Coal:<br></br> {fourDecimal} kg co2e per €100</p>{" "}
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by biomass in {name}
            </p>
          )}
        </div>
      </div>
      {/* Geothermal */}
      <div>
        <div>
          {geothermal !== undefined ? (
            <div>
              <div>
                <p className="eList"> Geothermal: <br></br>{fiveDecimal} kg co2e per €100</p>{" "}
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by biomass in {name}
            </p>
          )}
        </div>
      </div>
      {/* Hydro */}
      <div>
        <div>
          {hydro !== undefined ? (
            <div>
              <div>
                <p className="eList"> Hydro:<br></br> {sixDecimal} kg co2e per €100</p>{" "}
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by biomass in {name}
            </p>
          )}
        </div>
      </div>
      {/* NUCLEAR */}
      <div>
        <div>
          {nuclear !== undefined ? (
            <div>
              <div>
                <p className="eList"> Nuclear: <br></br>{sevenDecimal} kg co2e per €100</p>{" "}
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by biomass in {name}
            </p>
          )}
        </div>
      </div>
      {/* Petroleum */}
      <div>
        <div>
          {pet !== undefined ? (
            <div>
              <div>
                <p className="eList">
                  {" "}
                  Petroleum and other oil derivatives: <br></br>{eightDecimal} kg co2e
                  per €100
                </p>{" "}
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by Petroleum and other oil derivaties in {name}
            </p>
          )}
        </div>
      </div>
      {/* Solar */}
      <div>
        <div>
          {solar !== undefined ? (
            <div>
              <div>
                <p className="eList">
                  {" "}
                  Solarvoltaic: <br></br>{nineDecimal} kg co2e
                  per €100
                </p>{" "}
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by Solarvoltaic in {name}
            </p>
          )}
        </div>
      </div>
      {/* Wind */}
      <div>
        <div>
          {wind !== undefined ? (
            <div>
              <div>
                <p className="eList">
                  {" "}
                  Wind: <br></br>{tenDecimal} kg co2e
                  per €100
                </p>{" "}
              </div>
            </div>
          ) : (
            <p className="eList">
              There is no emissions data on electricity generated by Wind in {name}
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Emissions;

//set id and country to an async function that are then declared in useEffect with arrow functions and then called within HTML
