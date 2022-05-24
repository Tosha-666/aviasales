import React, { useEffect } from 'react'
import './App.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Tabs } from '../Tabs'
import { FilterBar } from '../FiltersBar'
import { TicketList } from '../TicketList'
import * as actions from '../../actions'

const App = ({ ticketsLoaded }) => {
  App.defaultProps = {
    ticketsLoaded: () => {},
  }
  App.propTypes = {
    ticketsLoaded: PropTypes.func,
  }

  useEffect(() => {
    ticketsLoaded()
  }, [ticketsLoaded])

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

export default connect(null, actions)(App)
