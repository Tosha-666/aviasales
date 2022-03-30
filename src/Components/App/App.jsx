import React, {useEffect} from "react";
import "./App.scss";
import { Tabs } from "../Tabs";
import { FilterBar } from "../FiltersBar";
import { TicketList } from "../TicketList";
// import Aviasalesapi from '../../api'
import { connect } from "react-redux";
import * as actions from '../../actions'

function App({ticketsLoaded}) {
  // const apiService = new Aviasalesapi()
  // const [searchId, setSearchId]=useState('')
//----------------------------
  useEffect(()=>{
    ticketsLoaded()
     },[ticketsLoaded])
//----------------------------
  // useEffect(()=>{
  //   getTickets()
  // },[searchId])
  
  // const getId=async()=>{
  //   const searchID = await apiService.getResourse()
  //   console.log(searchID);
  //   setSearchId(searchID) 
  // }

  // const getTickets=async()=>{
  //   console.log(searchId.searchId);
  //   const ticketsArr=await apiService.getTickets(searchId.searchId)
  //   console.log(ticketsArr); 
  // }
  return (
    <main className="container">
      <span className="main-picture" ></span>
      <div className="main-bar"> 
      <FilterBar />
      <div className="content-bar">
      <Tabs />
      <TicketList />
      </div>
      </div>
      
      
     
    </main>
  );
}

export default connect(null, actions)(App);
