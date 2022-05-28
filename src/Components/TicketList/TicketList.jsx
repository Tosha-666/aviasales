import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'
import { connect, useDispatch, useSelector } from 'react-redux'

import { Ticket } from '../Ticket'
import { Spinner } from '../Spinner'
import './TicketList.scss'
import * as actions from '../../actions'

const TicketList = (
  {
    // tickets,
    // al,
    // zero,
    // one,
    // two,
    // three,
    // load,
    // tab,
    // count,
    // showMore,
    // err,
    // errorIndicator,
  }
) => {
  TicketList.defaultProps = {
    tickets: [],

    showMore: () => {},
  }

  TicketList.propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.object),
    al: PropTypes.bool,
    zero: PropTypes.bool,
    one: PropTypes.bool,
    two: PropTypes.bool,
    three: PropTypes.bool,
    load: PropTypes.string,
    tab: PropTypes.string,
    count: PropTypes.number,
    showMore: PropTypes.func,
  }

  const dispatch = useDispatch()

  const tickets = useSelector((state) => state.tickets)
  const al = useSelector((state) => state.all)
  const zero = useSelector((state) => state.without)
  const one = useSelector((state) => state.withOne)
  const two = useSelector((state) => state.withTwo)
  const three = useSelector((state) => state.withThree)
  const load = useSelector((state) => state.loadingStatus)
  const tab = useSelector((state) => state.filterTab)
  const count = useSelector((state) => state.counter)
  const err = useSelector((state) => state.error)
  const errorIndicator = useSelector((state) => state.tickets)

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
        {load === 'loading' && <Spinner />}

        {err && (
          <Alert message={errorIndicator.err} type="error" closable showIcon />
        )}
        {getfilteredItems(tickets).length === 0 && tickets.length > 0 ? (
          <Alert
            message={'There are no tickets for the selected filter'}
            type="warning"
            closable
            showIcon
          />
        ) : null}
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
          <button
            className="more"
            onClick={() => dispatch({ type: 'SHOW_MORE' })}
          >
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ
          </button>
        )}
      </React.Fragment>
    </div>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     tickets: Object.assign([], state.tickets),
//     load: state.loadingStatus,
//     // load: state.loading,
//     al: state.all,
//     one: state.withOne,
//     two: state.withTwo,
//     three: state.withThree,
//     zero: state.without,
//     tab: state.filterTab,
//     count: state.counter,
//     err: state.error,
//     errorIndicator: state.errorIndicator,
//   }
// }
export default TicketList
// connect(mapStateToProps, actions)(TicketList)
