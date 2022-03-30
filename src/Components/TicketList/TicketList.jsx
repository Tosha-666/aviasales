import React from "react";
import { connect } from "react-redux";
import {Ticket} from '../Ticket'
import {Spinner} from '../Spinner'
import * as actions from '../../actions'

const TicketList=({tickets, al, without, one, withTwo, withThree,load})=>{
const getfilteredItems=(tickets)=>{
    if(al) {
      console.log(al);
      return tickets}
    if(without){return null}
    // if(one){return tickets.filter((ticket)=>ticket.segments.foreEach(segment=>segment.stops.length===1))}
    // if(withTwo){return tickets.filter((ticket)=>ticket.segments.foreEach(segment=>segment.stops.length===2))}
    // if(withThree){return tickets.filter((ticket)=>ticket.segments.foreEach(segment=>segment.stops.length===3))}

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
        one:state.withOne
     
    }
  }
export default connect(mapStateToProps, actions)(TicketList)