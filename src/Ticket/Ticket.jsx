import React from "react";
import './Ticket.scss'
import s7 from '../S7 Logo.png' 

const Ticket=()=>{
   return(
   <div className="ticket">
       <div className="header-box">
           <span className="price">13400</span>
           <img src={s7} alt="" />
       </div>
       <div className="table-desk"></div>
   </div>
   )
       
   
}
export default Ticket