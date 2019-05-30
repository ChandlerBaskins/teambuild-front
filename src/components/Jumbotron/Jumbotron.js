import React from "react";
import "./jumbotron.css";
import {Link} from 'react-router-dom';

const Jumbotron = () => (
  <div className="jumbo-container">

    <div className="rectangle-1" />
    <div className="rectangle-2" />
    <div className="rectangle-small"/>
    <div className="rectangle-3" />
    <div className="rectangle-4" />

    <div className="jumbotron">
          <div className="jumbo-title jumbo">Build something <ins>awesome</ins>.</div>

          <p className="jumbo-text jumbo">
            Are you ready to start open sourcing but lack participation? Are you
            looking for a team for a pet project? Do you want to gain experience
            working with teams from all over?
          </p>

        <div>
           <Link to='/apply' className="prefooter__button">Getting Started</Link>
        </div>

    </div>

  </div>
);

export default Jumbotron;
