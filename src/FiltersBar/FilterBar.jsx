import React from "react";


const FilterBar=()=>{
    return(
        <div className="filter-bar">
            <span>Количество пересадок</span>
            <form>
                <input type="checkbox" className="filter-check" id="all" />
                <label htmlFor="all">Все</label>
                <input type="checkbox" className="filter-check" id="without-transplants" />
                <label htmlFor="without-transplants">Без пересадок</label>
                <input type="checkbox" className="filter-check" id="with-1-transplant" />
                <label htmlFor="with-1-transplant">С 1 пересадкой</label>
                <input type="checkbox" className="filter-check" id="with-2-transplant" />
                <label htmlFor="with-2-transplant">С 2 пересадками</label>
                <input type="checkbox" className="filter-check" id="with-3-transplant" />
                <label htmlFor="with-3-transplant">С 3 пересадками</label>
            </form>
            

        </div>
    )
}

export default FilterBar