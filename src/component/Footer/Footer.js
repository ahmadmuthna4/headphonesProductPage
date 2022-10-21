import './Footer.css'
const Footer= ()=>{
    return (
      <>
       <footer className="section-footer">
      <div className="container">
        <div>
          <h2>Lorem ipsum dolor sit.</h2>
          <a href="#">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <div>
          <h3>Company Info</h3>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form name="email-form" onsubmit="event.preventDefault()">
            <div className="email-form">
              <span className="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  className="form-control"
                  placeholder="E-mail" />
                  </span><button type="submit" value="Submit" className="form-control submit">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
      </>
    )
}
export default Footer