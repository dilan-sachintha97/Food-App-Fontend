import Carousel from "../components/Carousel"
import Cart from "../components/Cart"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"


const Home = () => {
  return (
    <div>
        <NavBar/>
        <Carousel/>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Cart/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Cart/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Cart/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Cart/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
       
        <Footer/>
    </div>
  )
}

export default Home
