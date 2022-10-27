import { Link } from "react-router-dom";
import list from "./list.json"
import React, { useEffect, useState } from "react";
import axios from "axios";

   
// const url2 = "https://beta3.api.climatiq.io/emission-factors/regions";


const CountryList = () => {

// const clearCountry = () => {
//     setCountry(undefined)
// }
const [country, setCountry] = useState([]);

useEffect(() => {
  getCountries()
}, []);
const getCountries = () => {
  axios.get(`https://gentle-wave-72526.herokuapp.com/emissions`).then((res) => {
    console.log(res.data)
      setCountry(res.data);
    });
}

console.log(country)


//   let countryList =
//   country !== undefined && country.map(e => 
//     {
//     return (
//       <div className="countryList" key={e.id}>
//         <p>
//           <Link onClick = {clearCountry} className="countryLinks" to={"/emissions/" + e?.id}> Region: {e?.name}</Link>
//         </p>
//       </div>

let countryList =
country.map(e => 
  {
  return (
    <div className="countryList" key={e.title}>
      <p>
        <Link className="countryLinks" to={"/emissions/" + e._id + '/' + e.title}> {e.title}</Link>
      </p>
    </div>
)});
return <div>{countryList}</div>;
};

export const DataContext = React.createContext();

export default CountryList;


//create an array set the array to the data and then onClick set the data to the arrray
