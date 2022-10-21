import './Navbar.css'


const Navbar= ()=>{
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">Phono</h1>
                <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                </ul>
            </div>
        </nav>
       
    )
}
export default Navbar