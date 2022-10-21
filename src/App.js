import './App.css'
import Navbar from './component/Navbar/Navbar'
import Showcase from './component/Showcase/Showcase'
import About from './component/About/About'
import Gallery from './component/Gallery/Gallery'
import Footer from './component/Footer/Footer'

const App = ()=>{
    return(
        <>
            <Navbar />
            <Showcase />
            <About />
            <Gallery />
            <Footer />
         
        </>
    )
}
export default App