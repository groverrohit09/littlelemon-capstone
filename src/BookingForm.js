import { useState } from "react";
import Moment from "moment";

function BookingForm(props) {
  const [resDate, setResDate] = useState(new Date());
  // const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00']);
  return <form className="booking-form">
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" value={Moment(resDate).format('yyyy-MM-DD')} onChange={(e) => setResDate(e.target.value)} />
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time" value={props.changeAvailableTimes}>{
      props.availableTimes.map((x) => <option>{x}</option>)}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" />


    <input type="submit" value="Make Your reservation" className="reserve-button" />
  </form >;
}
export default BookingForm;