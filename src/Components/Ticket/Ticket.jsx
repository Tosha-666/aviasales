import React from "react";
import "./Ticket.scss";
import s7 from "../S7 Logo.png";

const Ticket = ({price,carrier,toOrigin,toDestination,toDate,toDuration,toStops,backOrigin,backDestination,backDate,backDuration,backStops}) => 
{
 const getTimeFromMins=(mins)=> {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + ':' + minutes;
};
  return (
    <div className="ticket">
      <div className="header-box">
        <span className="price">{price} Р</span>
        <img src={s7} alt="" />
      </div>
      
        <table className="table-desk">
          <tbody>
            <tr>
            <th className="table-header">{toOrigin}-{toDestination}</th>
            <th className="table-header">В ПУТИ</th>
            <th className="table-header">{toStops.length} ПЕРЕСАДКИ</th>
          </tr>
          <tr>
            <td className="table-data">1</td>
            <td className="table-data">{getTimeFromMins(toDuration)}</td>
            <td className="table-data">{toStops.join(', ')}</td>
          </tr>
          <tr>
            <th className="table-header">{backOrigin}-{backDestination}</th>
            <th className="table-header">В ПУТИ</th>
            <th className="table-header">{backStops.length} ПЕРЕСАДКИ</th>
          </tr>
          <tr>
            <td className="table-data">1</td>
            <td className="table-data">{getTimeFromMins(backDuration)}</td>
            <td className="table-data">{backStops.join(', ')}</td>
          </tr>
          </tbody>
         
        </table>
     
    </div>
  );
};
export default Ticket;
