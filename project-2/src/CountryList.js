import { Link } from "react-router-dom";
import  { useEffect, useState } from 'react';

const url2 = "https://beta3.api.climatiq.io/emission-factors/regions";

const CountryList = ({country, setCountry}) => {


  fetch(url2, {
    method: "GET",
    headers: {
      Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data.results})
    .then((data) => {
      setCountry(data);
      console.log(country)
    }); 
  console.log(country)
//   let countryList = country.map(e => 
//     {
//     return (
//       <div className="countryList" key={e.id}>
//         <p>
//           <Link to={"/emissions/" + e.id}> Country: {e.name}</Link>
//         </p>
//       </div>
// )});
// return <div>{countryList}</div>;
};

export default CountryList;


//set the data to state - put the map within the return
//selected country state lives within app.js
//
