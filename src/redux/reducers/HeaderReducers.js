import {
	HIDE_LOG_IN,
	HIDE_SING_UP,
	SHAW_LOG_IN,
	SHAW_SING_UP,
	TOGGLE_MENU
} from "../types/HeaderTypes";

const initialState = {
	isLogInOpen: false,
	isAuthOpen: false,
	isMenuOpen: false,
	textsForHomePage: {}
}

export const HeaderReducers = (state = initialState, action) => {
	switch (action.type) {
		case SHAW_LOG_IN:
			return {...state, isLogInOpen: true}
		case HIDE_LOG_IN:
			return {...state, isLogInOpen: false}
		case SHAW_SING_UP:
			return {...state, isAuthOpen: true}
		case HIDE_SING_UP:
			return {...state, isAuthOpen: false}
		case TOGGLE_MENU:
			return {...state, isMenuOpen: !state.isMenuOpen}



		default: return state
	}
}