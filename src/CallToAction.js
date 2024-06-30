import heroImg from "./restauranfood.jpg";
import { Link } from "react-router-dom";

function CallToAction() {
  return <section className='hero-flex-container'>

    <article className="hero-box box1"><h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <Link to='/reservations'><button className="reserve-table-button" id="reserve-button">Reserve a Table</button></Link></article>
    <article className="hero-box box2"><img className="food-sample-image" src={heroImg} alt="Food sample" /></article>
  </section >;
}

export default CallToAction;