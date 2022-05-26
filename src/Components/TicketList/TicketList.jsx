import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'
import { connect } from 'react-redux'

import { Ticket } from '../Ticket'
import { Spinner } from '../Spinner'
import './TicketList.scss'
import * as actions from '../../actions'

const TicketList = ({
  tickets,
  al,
  zero,
  one,
  two,
  three,
  load,
  tab,
  count,
  showMore,
  err,
  errorIndicator,
}) => {
  TicketList.defaultProps = {
    tickets: [],
    al: false,
    zero: false,
    one: false,
    two: false,
    three: false,
    load: false,
    tab: 'cheaper',
    count: 5,
    showMore: () => {},
  }

  TicketList.propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.object),
    al: PropTypes.bool,
    zero: PropTypes.bool,
    one: PropTypes.bool,
    two: PropTypes.bool,
    three: PropTypes.bool,
    load: PropTypes.bool,
    tab: PropTypes.string,
    count: PropTypes.number,
    showMore: PropTypes.func,
  }

  const getfilteredItems = (tickets) => {
    const fiteredTickets = []

    if (al) {
      fiteredTickets.push(...tickets)
    } else {
      fiteredTickets.push(
        ...tickets.filter((ticket) =>
          ticket.segments.every(
            (segment) =>
              segment.stops.length === (one && 1) ||
              segment.stops.length === (two && 2) ||
              segment.stops.length === (three && 3) ||
              segment.stops.length === (zero && 0)
          )
        )
      )
    }
    return fiteredTickets
  }
  const filterTab = (filteredTickets) => {
    switch (tab) {
      case 'cheaper':
        return filteredTickets.sort((a, b) => a.price - b.price)
      case 'fastest':
        return filteredTickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        )
      case 'optimal':
        return filteredTickets.sort(
          (a, b) =>
            (a.segments[0].duration + a.segments[1].duration <
              b.segments[0].duration + b.segments[1].duration) -
              (b.segments[0].duration + b.segments[1].duration <
                a.segments[0].duration + a.segments[1].duration) ||
            (a.price < b.price) - (b.price < a.price)
        )
      default:
        return filteredTickets
    }
  }

  return (
    <div>
      <React.Fragment>
        {load && <Spinner />}
        {/* {err && (
          <Alert message={errorIndicator} type="error" closable showIcon />
        )} */}
        {filterTab(getfilteredItems(tickets))
          .slice(0, count)
          .map((ticket) => (
            <Ticket
              key={`${ticket.price}${ticket.carrier}${ticket.segments[0].date}${ticket.segments[1].date}`}
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
            />
          ))}
        {filterTab(getfilteredItems(tickets)).length > 5 && (
          <button className="more" onClick={showMore}>
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ
          </button>
        )}
      </React.Fragment>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    tickets: Object.assign([], state.tickets),
    load: state.loading,
    al: state.all,
    one: state.withOne,
    two: state.withTwo,
    zero: state.without,
    tab: state.filterTab,
    count: state.counter,
    err: state.error,
    errorIndicator: state.errorIndicator,
  }
}
export default connect(mapStateToProps, actions)(TicketList)
