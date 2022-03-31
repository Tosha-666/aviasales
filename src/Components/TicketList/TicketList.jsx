import React from "react";
import { connect } from "react-redux";
import {Ticket} from '../Ticket'
import {Spinner} from '../Spinner'
import * as actions from '../../actions'

const TicketList=({tickets, al, zero, one, two, three,load})=>{
const getfilteredItems=(tickets)=>{
  const fiteredTickets=[]
  const filterRel=[]
  if (one){filterRel.push(1)}else {filterRel.splice(filterRel.indexOf(1),1) }
  if (two){filterRel.push(2)}else {filterRel.splice(filterRel.indexOf(2),1) }
  if (three){filterRel.push(3)}else {filterRel.splice(filterRel.indexOf(3),1) }

  if(al){fiteredTickets.push(...tickets)}else
    {fiteredTickets.push(...tickets.filter((ticket)=>ticket.segments.every(segment=>segment.stops.length===filterRel[1]||segment.stops.length===filterRel[2]||segment.stops.length===filterRel[3])))}
  
  // if (one)
  // if (two){fiteredTickets.push(...tickets.filter((ticket)=>ticket.segments.every(segment=>segment.stops.length===2)))}
  // if (three){fiteredTickets.push(...tickets.filter((ticket)=>ticket.segments.every(segment=>segment.stops.length===3)))}
  console.log(fiteredTickets);
  console.log(filterRel);
  return fiteredTickets

    // if(without){return null}
    // if(one){return tickets.filter((ticket)=>ticket.segments.every(segment=>segment.stops.length===1))}
    // if(withTwo){return tickets.filter((ticket)=>ticket.segments.forEach(segment=>segment.stops.length===2))}
    // if(withThree){return tickets.filter((ticket)=>ticket.segments.forEach(segment=>segment.stops.length===3))}

}


    return <div>
    {load?<Spinner/>:
      getfilteredItems(tickets).slice(0,10).map((ticket)=>
      <Ticket
      price={ticket.price}
      carrier={ticket.carrier}
      toOrigin={ticket.segments[0].origin}
      toDestination={ticket.segments[0].destination}
      toDate={ticket.segments[0].date}
      toDuration={ticket.segments[0].duration}
      toStops={ticket.segments[0].stops}
      backOrigin={ticket.segments[1].origin}
      backDestination={ticket.segments[1].destination}
      backDate={ticket.segments[1].date}
      backDuration={ticket.segments[1].duration}
      backStops={ticket.segments[1].stops}
      />)
    }</div>
    
}
const mapStateToProps=(state)=>{
     console.log(state);
    return{
        tickets:state.tickets,
        load:state.loading,
        al:state.all,
        one:state.withOne,
        two:state.withTwo,
        zero:state.without
     
    }
  }
export default connect(mapStateToProps, actions)(TicketList)