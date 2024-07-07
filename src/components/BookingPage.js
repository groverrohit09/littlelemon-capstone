import BookingForm from "./BookingForm";
import Specials from "./Specials";
import Footer from "./Footer";
import { useReducer } from "react";


function seededRandom(seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}

function fetchAPI(date) {
  let result = [];
  let random = seededRandom(date);

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() > 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}


function BookingPage() {

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };
  const updateTimes = (state, action) => {
    return fetchAPI(action.date);
  }



  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return <main>
    <BookingForm availableTimes={availableTimes} changeAvailableTimes={(date) => {
      dispatch({ date: date })
    }}></BookingForm>
    <Specials></Specials>
    <Footer></Footer>
  </main>;
}
export default BookingPage;