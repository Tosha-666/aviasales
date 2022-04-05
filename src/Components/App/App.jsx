import React, { useEffect } from "react";
import "./App.scss";
import PropTypes from "prop-types";
import { Tabs } from "../Tabs";
import { FilterBar } from "../FiltersBar";
import { TicketList } from "../TicketList";
// import Aviasalesapi from '../../api'
import { connect } from "react-redux";
import * as actions from "../../actions";

function App({ ticketsLoaded }) {
  App.defaultProps = {
    ticketsLoaded: () => {},
  };
  App.propTypes = {
    ticketsLoaded: PropTypes.func,
  };

  useEffect(() => {
    ticketsLoaded();
  }, [ticketsLoaded]);

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
  );
}

export default connect(null, actions)(App);
