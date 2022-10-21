import './Gallery.css'
import img1 from "../../accest/images/gal2323.jpg"
import img2 from "../../accest/images/gal39834.jpg"
import img3 from "../../accest/images/gal43884.jpg"
import img4 from "../../accest/images/gal4958.jpg"
import img5 from "../../accest/images/gal4545.jpg"
import img6 from "../../accest/images/gal74744.jpg"


const Gallery= (props)=>{
    return (
     <section className="section-gallery">
        <div className="gallery">
            <img src={img1} alt="" className="big" />
            <img src={img2} alt="" className="big" />
            <img src={img3} alt="" className="big" />
            <img src={img4} alt="" className="big" />
            <img src={img5} alt="" className="big" />
            <img src={img6} alt="" className="big" />
            
        </div>
    </section>
    )
}
export default Gallery


