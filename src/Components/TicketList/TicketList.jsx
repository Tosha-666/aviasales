import React from "react";
import { connect } from "react-redux";
import {Ticket} from '../Ticket'
import {Spinner} from '../Spinner'
import * as actions from '../../actions'

const TicketList=({tickets, al, zero, one, two, three,load,tab})=>{
const getfilteredItems=(tickets)=>{
  const fiteredTickets=[]

  if(al){fiteredTickets.push(...tickets)}else
    {fiteredTickets.push(...tickets.filter
      ((ticket)=>ticket.segments.every
        (segment=>segment.stops.length===(one&&1)
                ||segment.stops.length===(two&&2)
                ||segment.stops.length===(three&&3)
                ||segment.stops.length===(zero&&0))))}
    console.log(fiteredTickets);
  return fiteredTickets

}
const filterTab=(filteredTickets)=>{
  switch (tab) {
    case 'cheaper':
      return filteredTickets.sort((a, b)=>a.price-b.price)
    case 'fastest':
      return filteredTickets.sort((a, b)=>((a.segments[0].duration+a.segments[1].duration)-(b.segments[0].duration+b.segments[1].duration)))
    case 'optimal':
    return filteredTickets.sort((a, b)=>(((a.segments[0].duration+a.segments[1].duration)<(b.segments[0].duration+b.segments[1].duration))-((b.segments[0].duration+b.segments[1].duration)<(a.segments[0].duration+a.segments[1].duration))||((a.price<b.price)-(b.price<a.price))))
    default:
      return filteredTickets

  }

}


    return <div>
    {load?<Spinner/>:
      filterTab(getfilteredItems(tickets)).slice(0,10).map((ticket)=>
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
        zero:state.without,
        tab:state.filterTab
    }
  }
export default connect(mapStateToProps, actions)(TicketList)