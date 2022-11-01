import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CountryList from "./CountryList";
import Home from "./Home";
import Emissions from "./Emissions";
import "./App.css";
import About from "./About";
import Generation from "./Generation";

const App = () => {
  const [country, setCountry] = useState();


  return (
    <div className="overall">
        <h1 className="title">Carbon and Electricity</h1>
      <nav className="nav">
        <Link className="nav2" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="nav2" to="/about">
          <h1>About</h1>
        </Link>
        <Link className="nav2" to="/countries">
          <h1>Countries</h1>
        </Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/about" element={<About/>}/>
          <Route
            path="/emissions/:id/:name"
            element={<Emissions setCountry={setCountry} country={country} />}
          />
          <Route
            path="/generation/:id/:name"
            element={<Generation setCountry={setCountry} country={country} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;

//pull the country list from the api ->
//map through that so that when a button is clicked, every country will display with a link

//each one of those links should bring up information about the country - bringing the carbon emissions associated with the following:
//coal
//gas
//geothermal
//hydro
//nuclear
//petroleum
//solar photovoltaic
//Wind
//will have to use state to grab the name of the region and plug it into the fetch request (should there be a component for each type of electricity generation?)

//questions for Jay:
//mapping through countries list - use Link to generate a link for each?
//how to manipulate fetch POST request with state

//stretch goal - render a graph on each countries page
//there will also be a search bar that will transport the user to the correct page
//give the user the option to choose two different countries and show their data side by side
//highlight comparison between countries through color, or other differentiation

//styling


//Thursday: 
//readme
//deployment
//write to API
