import BookingForm from "./BookingForm";
import Specials from "./Specials";
import { useState } from "react";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00']);
  return <main>
    <BookingForm availableTimes={availableTimes} changeAvailableTimes={setAvailableTimes}></BookingForm>
    <Specials></Specials></main>;
}
export default BookingPage;