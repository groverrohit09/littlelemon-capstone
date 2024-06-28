import lemonDessertImg from "./lemon dessert.jpg";
import bruchettaImg from "./bruchetta.png";
import greekSaladImg from "./greek salad.jpg";


function Specials() {
  return <section>
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
  </section>;

}

export default Specials;