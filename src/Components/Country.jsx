import React, { useEffect, useState } from 'react'
import Countries from './Countries';
const url ="https://restcountries.com/v3.1/all";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './Serch';

function Country() {
  const [contries , setcountris]=useState([]);
  const [isloading , setloading]=useState(true);
  const [error , seterror]=useState(null);
  const [filter, setfiltering]=useState(contries);
  const fatchData = async(url)=>{
    setloading(true);
    try{
      const response =await fetch(url);
      const data = await response.json();
      setcountris(data);
      setfiltering(data);
      setloading(false);
      seterror(null)
    }catch{
      setloading(false);
      seterror(error)
    }
  }
  useEffect(()=>{
    fatchData(url)
  },[]);
  const onclickremover = (name) => {
    const filters = filter.filter(
      (count) => count.name.common !== name
    );
 
    setfiltering(filters);
    toast("Country is Remove...!");
    
  };
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = contries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setfiltering(newCountries);
  };
  
  return<>
  <h1>Country App</h1>
  <Search onSearch={handleSearch}/>
  <h3>Total:250</h3>
  {isloading && <h2>Loading....</h2>}
  {contries && <Countries contries={filter} heandlremov={onclickremover}/>}
  <ToastContainer />
  </>
   
 
}

export default Country