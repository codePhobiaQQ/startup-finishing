import React from 'react'
import logo from  '../../static/img/footer_logo.svg'
import vk from  '../../static/img/vk.svg'
import inst from  '../../static/img/inst.svg'
import {Link} from "react-scroll";
import {useSelector} from "react-redux";

const Footer = props => {

  const tel = useSelector(state => state.AdminReducers.textsList["Telephone"])
  const email = useSelector(state => state.AdminReducers.textsList["Email"])


  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_navigation_container">
          <div className="footer_row_nav">
            <div className="footer_logo">
              <img src={logo} alt="Qellee" />
            </div>
            <div className="footer_nav_wrapper">
              <nav className="footer_nav">
                <ul className="footer_nav_list">
                  <li className="footer_nav_item"><a href="#">Войти в лк</a></li>
                  <li className="footer_nav_item"><a href="#">Контакты</a></li>
                  <li className="footer_nav_item">
                    <Link
                      to="About"
                      spy={true}
                      smooth={true}
                      duration={700}
                    >
                      О нас
                    </Link>
                  </li>
                  <li className="footer_nav_item"><a href="#">Услуги</a></li>
                  <li className="footer_nav_item">
                    <Link
                      to="Voices"
                      spy={true}
                      smooth={true}
                      duration={700}
                    >
                      Отзывы
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer_row_contacts">
            <div className="privacy_policy">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Защита персональных данных</a>
            </div>
            <div className="footer_contacts">
              <div className="footer_phone btn_contact"><a href={`tel:${tel}`}>{tel}</a></div>
              <div className="footer_email btn_contact"><a href={`mailto:${email}`}>{email}</a></div>
            </div>
          </div>
        </div>
        <div className="foooter_copyright_container">
          <div className="copyright">
            © Любые копирование запрещенно без письменого согласия компании StartUp
          </div>
          <div className="footer_social">
            <div className="footer_social_title">Мы в соцсетях</div>
            <div className="footer_social_container">
              <div className="footer_vk"><img src={vk} alt="VK" /></div>
              <div className="footer_inst"><img src={inst} alt="VK" /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;