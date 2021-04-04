import React from 'react'
import bg_about from '../../static/img/bg_about.png'
import aboutPt from '../../static/img/about.png'
import {useSelector} from "react-redux";
import {urlBack} from "../../config/config";

const About = props => {

  const title = useSelector(state => state.AdminReducers.textsList["AboutTitle"])
  const text1 = useSelector(state => state.AdminReducers.textsList["AboutText1"])
  const text2 = useSelector(state => state.AdminReducers.textsList["AboutText2"])
  const text3 = useSelector(state => state.AdminReducers.textsList["AboutText3"])

  const Bg = useSelector(state => state.AdminReducers.textsList["ImgAboutBg"])


  return (
    <div className="about" id="About"
         style={{
           backgroundImage: `url('${urlBack + '/' + Bg}')`,
         }}
    >
      <div className="about_title">{title}</div>
      <div className="about_wrapper">
        <div className="about_left_column">
          <div className="about_descr">
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
          </div>
        </div>
        <div className="about_right_column">
          <div className="about_img">
            <img className="bg_about" src={bg_about} alt="" />
            <img className="about_pic" src={aboutPt} alt="About" />
          </div>
        </div>
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
        <div className="box box6"></div>
      </div>
    </div>
  );
};

export default About;