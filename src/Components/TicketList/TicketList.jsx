import React from "react";
import { connect } from "react-redux";
import {Ticket} from '../Ticket'
import * as actions from '../../actions'

const TicketList=({tickets})=>{
    return <div>{tickets.slice(0,10).map((ticket)=>
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
    />)}</div>
    
}
const mapStateToProps=(state)=>{
     console.log(state);
    return{
       
        tickets:state.tickets
    }
  }
export default connect(mapStateToProps, actions)(TicketList)