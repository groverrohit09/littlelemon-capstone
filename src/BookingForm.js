import { useState } from "react";
import Moment from "moment";
import OccasionDropdown from "./OccasionDropdown";
import tableImg from "./table.jpeg";


function submitAPI(formData) {
  return true;
}
function BookingForm(props) {
  const [resDate, setResDate] = useState(new Date());

  return <form className="booking-form">
    <section className="form-grid-item form-item-1" >
      <OccasionDropdown></OccasionDropdown>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={Moment(resDate).format('yyyy-MM-DD')} onChange={(event) => setResDate(new Date(event.target.value))} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={() => props.changeAvailableTimes(resDate)}>{
        props.availableTimes.map((x, index) => <option key={index}>{x}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />


      <input type="submit" value="Make Your reservation" className="reserve-button" disabled={!submitAPI(FormData)} />
    </section>
    <section className="form-grid-item form-item-2">
      <img src={tableImg} alt="table" className="table-image"></img>
    </section>
  </form >;
}
export default BookingForm;