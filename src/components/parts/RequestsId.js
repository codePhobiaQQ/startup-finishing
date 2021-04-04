import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchRequests} from "../../redux/actions/AdminActions";
import {AdminReducers} from "../../redux/reducers/adminReducer";
import {setWhatOpen} from "../../redux/actions/UserActions";

const RequestsId = props => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchRequests())
	}, [])

	const clickHandler = (data) => {
		const [name, ID] = data
		dispatch(setWhatOpen("changeReqId"))
		props.setСhangeId(ID)
		props.changeUserPopup(name)
	}

	const requests = useSelector(state => state.AdminReducers.requestsList)

	return (
		<div className="requestItems">

			{!requests.length
			? <div className="requestItem">Запросов пока нет</div>
			: requests.map((el, index) => {
					return (
						<div className="requestItem">
							<span>ID:</span>
							<span>{el}</span>
							<button onClick={() => clickHandler(["ID", el])}>Изменить</button>
						</div>
					)
				})}
		</div>
	);
};

export default RequestsId;