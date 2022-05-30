import React from 'react'
import PropTypes from 'prop-types'
import './FilterBar.scss'
import { useDispatch, useSelector } from 'react-redux'

const FilterBar = () => {
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

  const dispatch = useDispatch()

  const all = useSelector((state) => state.all)
  const without = useSelector((state) => state.without)
  const withOne = useSelector((state) => state.withOne)
  const withTwo = useSelector((state) => state.withTwo)
  const withThree = useSelector((state) => state.withThree)

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
            onChange={() => dispatch({ type: 'all' })}
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
            onChange={() => dispatch({ type: 'without' })}
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
            onChange={() => dispatch({ type: 'withOne' })}
          />
          <label htmlFor="with-1-transplant" className="checkbox-label">
            1 пересадка
          </label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-2-transplant"
            className="custom-checkbox"
            checked={withTwo}
            onChange={() => dispatch({ type: 'withTwo' })}
          />
          <label htmlFor="with-2-transplant" className="checkbox-label">
            2 пересадки
          </label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-3-transplant"
            className="custom-checkbox"
            checked={withThree}
            onChange={() => dispatch({ type: 'withThree' })}
          />
          <label htmlFor="with-3-transplant" className="checkbox-label">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

export default FilterBar
