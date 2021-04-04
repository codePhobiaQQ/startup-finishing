import React, {useCallback, useEffect} from 'react'
import man from '../../static/img/man.svg'
import mail from '../../static/img/mail.svg'
import {Link} from "react-scroll";
import {NavLink, useHistory} from 'react-router-dom'
import Burger from "../UI/Burger";
import {useDispatch, useSelector} from "react-redux";
import {shawAuth, toggleMenu} from "../../redux/actions/HeaderActions";
import {exit} from "../../redux/actions/UserActions";
import {urlBack} from "../../config/config";

const Header = () => {

	const history = useHistory()

	const exitHandler = (event) => {
		event.preventDefault()
		dispatch(exit())
		history.push('/')
	}

	const isMenuOpen = useSelector(state => state.HeaderReducers.isMenuOpen)
	const dispatch = useDispatch()
	const isAuth = useSelector(state => state.UserReducer.isAuth)

	const headerTel = useSelector(state => state.AdminReducers.textsList["Telephone"])
	const headerEmail = useSelector(state => state.AdminReducers.textsList["Email"])
	const Logo = useSelector(state => state.AdminReducers.textsList["ImgLogo"])

	useEffect(() => {
	}, [history, isAuth])

	return (
		<header className="header_container">

			<div className="container">
				<div className="header_wrapper">

					<Burger/>

					<div className="header_logo">
						<img src={`${urlBack + '/' + Logo}`} alt="Qeellee"/>
					</div>
					<div className="header_navigation">
						<div
							className={window.innerWidth >= 1200 ? "burger_menu" : (isMenuOpen ? "burger_menu active" : "burger_menu")}
						>
							<nav className="navigation_container">
								<ul className="nav_list">

									{!isAuth && <li className="nav_item">

										<Link onClick={() => dispatch(shawAuth())}>
											Войти в лк
										</Link>
									</li>}

									{isAuth &&
									<>
										<li className="nav_item">
											{history.location.pathname != '/'
												? <NavLink
													onClick={() => dispatch(toggleMenu())} to="/"
												>
													Главная
												</NavLink>
												: <NavLink
													onClick={() => dispatch(toggleMenu())} to="/lk"
												>
													ЛК
												</NavLink>
											}
										</li>

										<li className="nav_item">
											<a href="/" onClick={(event) => exitHandler(event)}>
												Выход
											</a>
										</li>
									</>
									}

									<li className="nav_item">
										<Link
											to="Contacts"
											spy={true}
											smooth={true}
											duration={500}
											onClick={() => dispatch(toggleMenu())}
										>
											Контакты
										</Link>
									</li>

									{history.location.pathname == '/' ?
										<>
											<li className="nav_item">
												<Link
													to="About"
													spy={true}
													smooth={true}
													duration={700}
													onClick={() => dispatch(toggleMenu())}
												>
													О нас
												</Link>
											</li>
											<li className="nav_item">
												<Link
													to="Voices"
													spy={true}
													smooth={true}
													duration={700}
													onClick={() => dispatch(toggleMenu())}
												>
													Отзывы
												</Link>
											</li>
										</>
										: null
									}
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="header_contacts">
					<div className="contact_phone btn_contact"><a href={`tel:${headerTel}`}>{headerTel}</a></div>
					<div className="contact_email btn_contact"><a href={`mailto:${headerEmail}`}><span
						className="mail-text">{headerEmail}</span><img className="mail-img" src={mail} alt="Email"/></a>
					</div>
				</div>
			</div>

		</header>
	);
};

export default Header;