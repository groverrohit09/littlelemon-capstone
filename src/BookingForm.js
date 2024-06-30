import { useState, useEffect } from "react";
import Moment from "moment";
import OccasionDropdown from "./OccasionDropdown";
import tableImg from "./table.jpeg";

function BookingForm(props) {

  const [resDate, setResDate] = useState(new Date());
  const [resTime] = useState();
  const [guests, setGuests] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValidDate = resDate >= (new Date());
    const isValidGuests = guests > 0 && guests <= 10;

    setIsFormValid(isValidDate && isValidGuests);
  }, [resDate, resTime, guests]);

  return <form className="booking-form" data-testid="booking-form" onSubmit={() => console.log("Reservation confirmed")}>
    <section className="form-grid-item form-item-1" >
      <OccasionDropdown></OccasionDropdown>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={Moment(resDate).format('yyyy-MM-DD')} onChange={(event) => setResDate(new Date(event.target.value))} />
      <label htmlFor="res-time" >Choose time</label>
      <select id="res-time" value={resTime} onChange={() => props.changeAvailableTimes(resDate)}>{
        props.availableTimes.map((x, index) => <option key={index}>{x}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />


      <input type="submit" value="Make Your reservation" className="reserve-button" disabled={!isFormValid} />
    </section>
    <section className="form-grid-item form-item-2">
      <img src={tableImg} alt="table" className="table-image"></img>
    </section>
  </form >;
}
export default BookingForm;