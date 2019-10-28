import React, {Component} from "react";
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "../components/Header"
import Photothingy from "../components/Photothingy"
import LoginForm from "../components/LoginForm"
import Banner from "../components/BannerOne";
import Header2 from "../components/Header2";
import QuickSearch from "../components/QuickSearch";
import QuickSearchResults from "../components/QuickSearchResults";
import Footer from "../components/Footer";
import Blurb from "../components/Blurb";
import ContactForm from "../components/ContactForm";
import LoginRegister from "../components/LoginRegister";


const photoThingData = require('../staticData/photoThingy')

class Home extends Component { 

    state = {
        starterImages: [],
        showLogin: false,
    }

    componentDidMount() {
        console.log("loaded home page");
    }
    

    render() {
        AOS.init()
        return (
            <>
      <Header/>
      <div className="bg-image img1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Banner/>
              <LoginForm logOut={this.onClickLogout}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <QuickSearch/>
              <QuickSearchResults/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image img5">
      <Blurb/>
      </div>
      <div className="bg-image img7">
      <Header2/> 
      </div>
      <div className="bg-image img6">
      <div className="container">
        <div className="row">
        {/* <Header2/>  */}
          <div className="lg-col-12">
            {photoThingData && photoThingData.map((item, i) => {
              return <Photothingy
                textclass={item.typeclass}
                key={i}
                item={item.classname}
                aosAction={item.aosAction}
                captions={item.captions}
              />
            })}
          </div>
        </div>
        </div>
      </div>
      <div className="bg-image img8">
      <ContactForm/>
      </div>
      <div className="bg-image img3">
      <Footer/>
      </div>
    </>

        )


    }

}

export default Home;





