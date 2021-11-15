import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';

function App() {
  const [countries, setCountries] = useState([])
  const countryArr = countries.map(x=> x.country)

  useEffect(() => {
    getCountries("https://countriesnow.space/api/v0.1/countries")
  }, [])

  const getCountries = async (api) =>{
    const countryList = await axios.get(api)
    setCountries(countryList.data.data)
    //console.log(countryList.data.data)
  }
  return (
    <div className="App">
      <div className="App-Component">
        <h1>Country List Auto-complete search</h1>
          <div className="App-Component">
          <AutoCompleteText countryArr={countryArr}/>
          </div>
      </div>
      
    </div>
  );
}

export default App;
