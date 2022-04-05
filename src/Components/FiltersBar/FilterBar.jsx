import React from 'react'
import PropTypes from 'prop-types'
import './FilterBar.scss'
import { connect } from 'react-redux'

import * as actions from '../../actions'

const FilterBar = ({
  all,
  without,
  withOne,
  withTwo,
  withThree,
  filterAll,
  filterWithout,
  filterWithOne,
  filterWithTwo,
  filterWithThree,
}) => {
  FilterBar.defaultProps = {
    all: true,
    without: true,
    withOne: true,
    withTwo: true,
    withThree: true,
    filterAll: () => {},
    filterWithout: () => {},
    filterWithOne: () => {},
    filterWithTwo: () => {},
    filterWithThree: () => {},
  }

  FilterBar.propTypes = {
    all: PropTypes.bool,
    without: PropTypes.bool,
    withOne: PropTypes.bool,
    withTwo: PropTypes.bool,
    withThree: PropTypes.bool,
    filterAll: PropTypes.func,
    filterWithout: PropTypes.func,
    filterWithOne: PropTypes.func,
    filterWithTwo: PropTypes.func,
    filterWithThree: PropTypes.func,
  }
  return (
    <div className="filter-bar">
      <span className="filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul className="filter-form">
        <li className="filter-check">
          <input
            className="custom-checkbox"
            type="checkbox"
            id="all"
            checked={all}
            onChange={filterAll}
          />
          <label htmlFor="all" className="checkbox-label">
            Все
          </label>
        </li>
        <li className="filter-check">
          <input
            className="custom-checkbox"
            type="checkbox"
            id="without-transplants"
            checked={without}
            onChange={filterWithout}
          />
          <label htmlFor="without-transplants" className="checkbox-label">
            Без пересадок
          </label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-1-transplant"
            className="custom-checkbox"
            checked={withOne}
            onChange={filterWithOne}
          />
          <label htmlFor="with-1-transplant" className="checkbox-label">
            С 1 пересадкой
          </label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-2-transplant"
            className="custom-checkbox"
            checked={withTwo}
            onChange={filterWithTwo}
          />
          <label htmlFor="with-2-transplant" className="checkbox-label">
            С 2 пересадками
          </label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-3-transplant"
            className="custom-checkbox"
            checked={withThree}
            onChange={filterWithThree}
          />
          <label htmlFor="with-3-transplant" className="checkbox-label">
            С 3 пересадками
          </label>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  all: state.all,
  without: state.without,
  withOne: state.withOne,
  withTwo: state.withTwo,
  withThree: state.withThree,
})

// const mapDispatchToProps=(dispatch)=>{
//   return bindActionCreators(actions,dispatch)

// }

export default connect(mapStateToProps, actions)(FilterBar)
