import React, {useEffect, useState} from 'react'
import './HomePage.css'
import Header from "../parts/Header";
import About from "../parts/About";
import SingUp from "../parts/SingUp";
import Footer from "../parts/Footer";
import Feedback from "../parts/Feedback";
import Find from "../parts/Find";
import {urlBack} from "../../config/config"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTextsHome} from "../../redux/actions/AdminActions";
import FadeIn from "react-fade-in";

const HomePage = props => {

  const [isModalFindeOpen, setModalFind] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllTextsHome())
  })
  const foundUser = useSelector(state => state.UserReducer.foundUser)

  return (
    <>

      {isModalFindeOpen
        ? <FadeIn>
            <div className="findModal">
              <div className="modalWrapper">
                <div onClick={() => setModalFind(false)} className="close">X</div>
                <img src={`${urlBack + "/" + foundUser.photo}`} alt="photo"/>
                <div>
                  <div><span>Name:</span><span>{foundUser.name}</span></div>
                  <div><span>SocLink:</span><span>{foundUser.soclink}</span></div>
                  <div><span>Telephone:</span><span>{foundUser.tel}</span></div>
                  <div><span>Email:</span><span>{foundUser.email}</span></div>
                  <div><span>Message:</span><span>{foundUser.aboutMessage}</span></div>
                </div>
              </div>
            </div>
          </FadeIn>
        :null
      }

      <Find setModalFind={setModalFind} />
      <main className="main_container">
        <About />
        <SingUp />
        <Feedback />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;