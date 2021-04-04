import React, {useEffect, useState} from 'react';
import {fetchUsers} from "../../redux/actions/AdminActions";
import {useDispatch} from "react-redux";

const AdminAllUsers = props => {

	const dispatch = useDispatch()
	const [users, setUsers] = useState([])

	useEffect(  async () => {
		if (props.isAuth.currentUser.role == 'admin') {
			const allUsers = await dispatch(fetchUsers())
			setUsers(allUsers.users)
		}
	}, [])

	return (
		<>
			<h2 className="AllUsersTitle">Пользователи</h2>
			<div>
				{ users.length
					? <div className='usersWrapper'>
						{users.map(user => {
							return (
								<div className="userWrapperEl">
									{
										Object.keys(user).map(el => {
											return (
												<div className='UserWrapField'>
													<span className="fieldName">{el}:</span>
													<span>{user[el]}</span>
												</div>
											)})
									}
								</div>)
						})}
					</div>
					: null
				}
			</div>
		</>
	);
};

export default AdminAllUsers;