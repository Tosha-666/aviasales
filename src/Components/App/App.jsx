import React, { useEffect } from 'react'
import './App.scss'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import API from '../../api'
import { Tabs } from '../Tabs'
import { FilterBar } from '../FiltersBar'
import { TicketList } from '../TicketList'

const App = () => {
  App.defaultProps = {
    ticketsLoaded: () => {},
  }
  App.propTypes = {
    ticketsLoaded: PropTypes.func,
  }

  const dispatch = useDispatch()
  const ticketsLoaded = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING', payload: 'loading' })
      API.get('search').then((res) => {
        const searchId = res.data.searchId
        let iterrateNumber = 10
        let tickets = []
        const getTickets = (requireId) => {
          API.get(`tickets?searchId=${requireId}`)
            .then((res) => {
              if (res.status === 200) {
                if (res.data.stop === false) {
                  tickets.push(...res.data.tickets)
                  dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: tickets })
                  getTickets(searchId)
                }
                if (res.data.stop === true) {
                  tickets.push(...res.data.tickets)
                  dispatch({ type: 'LOADING', payload: 'succeed' })
                  dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: tickets })
                }
              }
            })
            .catch((err) => {
              if (err.message === 'Network Error') {
                dispatch({
                  type: 'FETCH_TICKETS_FAILURE',
                  payload: err.message,
                })
                dispatch({ type: 'LOADING', payload: 'failed' }) //
              } else if (err.response.status === 500) {
                if (iterrateNumber > 0) {
                  iterrateNumber -= 1
                  getTickets(searchId)
                } else {
                  dispatch({
                    type: 'FETCH_TICKETS_FAILURE',
                    payload: 'Failed to load tickets',
                  })
                  dispatch({ type: 'LOADING', payload: 'failed' }) //
                }
              } else if (err.response.status === 404) {
                dispatch({
                  type: 'FETCH_TICKETS_FAILURE',
                  payload: err.message,
                })
                dispatch({ type: 'LOADING', payload: 'failed' }) //
              }
            })
        }
        getTickets(searchId)
      })
    }
  }

  useEffect(() => {
    dispatch(ticketsLoaded())
  }, [dispatch])

  return (
    <main className="container">
      <span className="main-picture"></span>
      <div className="main-bar">
        <FilterBar />
        <div className="content-bar">
          <Tabs />
          <TicketList />
        </div>
      </div>
    </main>
  )
}

export default App
