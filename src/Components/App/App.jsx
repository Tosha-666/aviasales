import React, {useEffect} from "react";
import "./App.scss";
import { Ticket } from "../Ticket";
import { Tabs } from "../Tabs";
import { FilterBar } from "../FiltersBar";
import Aviasalesapi from '../../api'

function App() {
  const apiService = new Aviasalesapi()

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const arr = await apiService.getResourse()
    console.log(arr);
  }
  return (
    <main className="container">
      <span className="main-picture" ></span>
      <div className="main-bar"> 
      <FilterBar />
      <div className="content-bar">
      <Tabs />
      <Ticket />
      </div></div>
      
      
     
    </main>
  );
}

export default App;
