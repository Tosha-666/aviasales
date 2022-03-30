import React from "react";
import "./Ticket.scss";
import s7 from "../S7 Logo.png";
import addMinutes from 'date-fns/addMinutes'


const Ticket = ({price,carrier,toOrigin,toDestination,toDate,toDuration,toStops,backOrigin,backDestination,backDate,backDuration,backStops}) => 
{
 const getTimeFromMins=(mins)=> {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + ':' + minutes;
}

const time =(time)=> time.substring(
  time.indexOf("T") + 1, 
  time.lastIndexOf(".000Z")
).slice(0,5);

const timeCount=(date,duration)=>{
  const [year,month,day,hour,minutes]=date.match(/[0-9]{2,4}/g)
  const arrivalTime=addMinutes(new Date(year,month,day,hour,minutes),duration)
  return arrivalTime.toString().match(/\d{2}:\d{2}/)
}

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
            <td className="table-data">{time(toDate)} - {timeCount(toDate,toDuration)}</td>
            <td className="table-data">{getTimeFromMins(toDuration)}</td>
            <td className="table-data">{toStops.join(', ')}</td>
          </tr>
          <tr>
            <th className="table-header">{backOrigin}-{backDestination}</th>
            <th className="table-header">В ПУТИ</th>
            <th className="table-header">{backStops.length} ПЕРЕСАДКИ</th>
          </tr>
          <tr>
            <td className="table-data">{time(backDate)} - {timeCount(backDate,backDuration)}</td>
            <td className="table-data">{getTimeFromMins(backDuration)}</td>
            <td className="table-data">{backStops.join(', ')}</td>
          </tr>
          </tbody>
         
        </table>
     
    </div>
  );
};
export default Ticket;
