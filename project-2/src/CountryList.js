import { Link } from "react-router-dom";
import list from "./list.json"
import React from "react";


// const url2 = "https://beta3.api.climatiq.io/emission-factors/regions";


const CountryList = () => {

// const clearCountry = () => {
//     setCountry(undefined)
// }


// useEffect(() => { 
//   fetch(url2, {
//     method: "GET",
//     headers: {
//       Authorization: "Bearer 2WBP8XKDTTMMMSQBCX27SPSDD078",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       return data.results})
//     .then((data) => {
//       return setCountry(data);
//     })
// }); 



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
list.map(e => 
  {
  return (
    <div className="countryList" key={e.id}>
      <p>
        <Link className="countryLinks" to={"/emissions/" + e.id + '/' + e.name}> {e.name}</Link>
      </p>
    </div>
)});
return <div>{countryList}</div>;
};

export const DataContext = React.createContext();

export default CountryList;


//create an array set the array to the data and then onClick set the data to the arrray
