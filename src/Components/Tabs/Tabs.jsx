import React from 'react'
import PropTypes from 'prop-types'
import './Tabs.scss'
import { useDispatch, useSelector } from 'react-redux'

function Tabs() {
  Tabs.defaultProps = {
    filterTab: 'cheaper',
    changeFilterTab: () => {},
  }
  Tabs.propTypes = {
    filterTab: PropTypes.string,
    changeFilterTab: PropTypes.func,
  }

  const dispatch = useDispatch()

  const filterTab = useSelector((state) => state.filterTab)

  return (
    <div className="tab-container">
      <span
        className={`tab ${filterTab === 'cheaper' && 'active'}`}
        onClick={() => dispatch({ type: 'changeFilter', payload: 'cheaper' })}
        onKeyDown={() => dispatch({ type: 'changeFilter', payload: 'cheaper' })}
        role="button"
        tabIndex={0}
      >
        САМЫЙ ДЕШЕВЫЙ
      </span>
      <span
        className={`tab ${filterTab === 'fastest' && 'active'}`}
        onClick={() => dispatch({ type: 'changeFilter', payload: 'fastest' })}
        onKeyDown={() => dispatch({ type: 'changeFilter', payload: 'fastest' })}
        role="button"
        tabIndex={0}
      >
        САМЫЙ БЫСТРЫЙ
      </span>
      <span
        className={`tab ${filterTab === 'optimal' && 'active'}`}
        onClick={() => dispatch({ type: 'changeFilter', payload: 'optimal' })}
        onKeyDown={() => dispatch({ type: 'changeFilter', payload: 'optimal' })}
        role="button"
        tabIndex={0}
      >
        ОПТИМАЛЬНЫЙ
      </span>
    </div>
  )
}

export default Tabs
