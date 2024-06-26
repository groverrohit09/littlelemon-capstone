import heroImg from "./restauranfood.jpg";
import lemonDessertImg from "./lemon dessert.jpg";
import bruchettaImg from "./bruchetta.png";
import greekSaladImg from "./greek salad.jpg";

function Main() {
  return <main>
    <section className='hero-flex-container'>

      <article className="hero-box box1"><h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-table-button">Reserve a Table</button></article>
      <article className="hero-box box2"><img className="food-sample-image" src={heroImg} alt="Food sample" /></article>
    </section>

    <section className="container2">
      <article className="container2-grid-item-1">
        <h1>This Week's Specials!</h1>
      </article>
      <article className="container2-grid-item-2"><button className="online-menu-button">Online Menu</button></article>
    </section>

    <section className="cards">
      <article className="card1">
        <img src={greekSaladImg} alt="greek salad" className="food-items-images"></img>
        <h2>Greek Salad</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum elit dui, sed semper leo tristique non. Sed sed augue elit. Aliquam massa diam, laoreet ac est quis, egestas ultricies justo.</p>
        <a href="/">Order a Delivery</a>
      </article>
      <article className="card2">
        <img src={bruchettaImg} alt="bruchetta" className="food-items-images"></img>
        <h2>Bruchetta</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum elit dui, sed semper leo tristique non. Sed sed augue elit. Aliquam massa diam, laoreet ac est quis, egestas ultricies justo.</p>
        <a href="/">Order a Delivery</a>
      </article>
      <article className="card3">
        <img src={lemonDessertImg} alt="lemon dessert" className="food-items-images"></img>
        <h2>Lemon Dessert</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum elit dui, sed semper leo tristique non. Sed sed augue elit. Aliquam massa diam, laoreet ac est quis, egestas ultricies justo.</p>
        <a href="/">Order a Delivery</a>
      </article>
    </section>
  </main>;
}

export default Main;