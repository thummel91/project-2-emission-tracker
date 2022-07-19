import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Emissions = ({ country, setCountry }) => {
  const { id } = useParams();
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
          region: { id },
        },
        parameters: {
          money: 100,
          money_unit: "eur",
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let newCountry = data.co2e;
        setCountry(newCountry);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>The emissions from generating electricty from gas in {id}</h1>
      <div className="gas">{country} kg co2e per 100 euros </div>
    </div>
  );
};

export default Emissions;
