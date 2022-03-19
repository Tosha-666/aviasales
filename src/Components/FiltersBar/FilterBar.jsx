import React from "react";
import './FilterBar.scss'

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <span className="filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul className="filter-form">
        <li className="filter-check">
          <input 
          className="custom-checkbox"
          type="checkbox"  
          id="all" />
          <label htmlFor="all" className="checkbox-label">Все</label>
        </li>
        <li className="filter-check">
          <input
            className="custom-checkbox"
            type="checkbox"
            id="without-transplants"
          />
          <label htmlFor="without-transplants" className="checkbox-label">Без пересадок</label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-1-transplant"
            className="custom-checkbox"
          />
          <label htmlFor="with-1-transplant" className="checkbox-label">С 1 пересадкой</label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-2-transplant"
            className="custom-checkbox"
          />
          <label htmlFor="with-2-transplant" className="checkbox-label">С 2 пересадками</label>
        </li>
        <li className="filter-check">
          <input
            type="checkbox"
            id="with-3-transplant"
            className="custom-checkbox"
          />
          <label htmlFor="with-3-transplant" className="checkbox-label">С 3 пересадками</label>
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
