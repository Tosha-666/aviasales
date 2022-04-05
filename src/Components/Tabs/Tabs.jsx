import React from 'react'
import PropTypes from 'prop-types'
import './Tabs.scss'
import { connect } from 'react-redux'

import * as actions from '../../actions'

function Tabs({ filterTab, changeFilterTab }) {
  Tabs.defaultProps = {
    filterTab: 'cheaper',
    changeFilterTab: () => {},
  }
  Tabs.propTypes = {
    filterTab: PropTypes.string,
    changeFilterTab: PropTypes.func,
  }
  return (
    <div className="tab-container">
      <span
        className={`tab ${filterTab === 'cheaper' && 'active'}`}
        onClick={() => changeFilterTab('cheaper')}
        onKeyDown={() => changeFilterTab('cheaper')}
        role="button"
        tabIndex={0}
      >
        САМЫЙ ДЕШЕВЫЙ
      </span>
      <span
        className={`tab ${filterTab === 'fastest' && 'active'}`}
        onClick={() => changeFilterTab('fastest')}
        onKeyDown={() => changeFilterTab('fastest')}
        role="button"
        tabIndex={0}
      >
        САМЫЙ БЫСТРЫЙ
      </span>
      <span
        className={`tab ${filterTab === 'optimal' && 'active'}`}
        onClick={() => changeFilterTab('optimal')}
        onKeyDown={() => changeFilterTab('optimal')}
        role="button"
        tabIndex={0}
      >
        ОПТИМАЛЬНЫЙ
      </span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  filterTab: state.filterTab,
})

export default connect(mapStateToProps, actions)(Tabs)
