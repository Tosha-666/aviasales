import React from "react";
import PropTypes from "prop-types";
import "./Tabs.scss";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Tabs = ({ filterTab, changeFilterTab }) => {
  Tabs.defaultProps = {
    filterTab: "cheaper",
    changeFilterTab: () => {},
  };
  Tabs.propTypes = {
    filterTab: PropTypes.string,
    changeFilterTab: PropTypes.func,
  };
  return (
    <div className="tab-container">
      <span
        className={`tab ${filterTab === "cheaper" && "active"}`}
        onClick={() => changeFilterTab("cheaper")}
      >
        САМЫЙ ДЕШЕВЫЙ
      </span>
      <span
        className={`tab ${filterTab === "fastest" && "active"}`}
        onClick={() => changeFilterTab("fastest")}
      >
        САМЫЙ БЫСТРЫЙ
      </span>
      <span
        className={`tab ${filterTab === "optimal" && "active"}`}
        onClick={() => changeFilterTab("optimal")}
      >
        ОПТИМАЛЬНЫЙ
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filterTab: state.filterTab,
  };
};

export default connect(mapStateToProps, actions)(Tabs);
