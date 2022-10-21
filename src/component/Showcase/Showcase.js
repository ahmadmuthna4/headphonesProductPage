import './Showcase.css'

import showcase from "../../accest/images/showcase.jpg"



const Showcase= ()=>{
    return (
    <section id="home" className="section-showcase">
        <div className="container">
            <div>
            <h1>The headphones of the future.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
                commodi placeat ea itaque modi corrupti corporis nam voluptas aut
                reprehenderit eaque culpa.
            </p>
            <a href="#about" className="btn">Read More</a>
            </div>
            <img src={showcase} alt="" />
        </div>
    </section>
    )
}
export default Showcase