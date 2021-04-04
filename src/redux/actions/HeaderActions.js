import {
	HIDE_LOG_IN,
	HIDE_SING_UP,
	SHAW_LOG_IN,
	SHAW_SING_UP,
	TOGGLE_MENU
} from "../types/HeaderTypes";

export function shawLogIn() {
	return {
		type: SHAW_LOG_IN
	}
}
export function hideLogIn() {
	return {
		type: HIDE_LOG_IN
	}
}
export function shawAuth() {
	return {
		type: SHAW_SING_UP
	}
}
export function hideAuth() {
	return {
		type: HIDE_SING_UP
	}
}

const shawHomePageTexts = () => {
	return async dispatch => {

	}
}

export function toggleMenu() {
	return {
		type: TOGGLE_MENU
	}
}

