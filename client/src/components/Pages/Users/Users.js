import React from 'react';
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import styles from './Users.module.css';
import SubTitle from "../../Inflatables/SubTitle/SubTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";

class Users extends React.Component {
	render() {
		return (
			<div className={styles.users}>
				<DashboardTitle title={"Users"}/>

				<SubTitle title={"Live Search"}/>
				<div className={styles.liveSearch}>
					<input type="text" placeholder={"Begin Typing To Search..."}/>
					<div className={styles.searchName}>Searching For Orders By "name"</div>
				</div>

				<VerticalSpacer height={30}/>
				<div className={styles.newUser}>
					<SubTitle title={"Create New User"}/>
					<table>
						<tr>
							<td>
								<input type="text" placeholder={"Last Name, First Name"}/>
							</td>
							<td>
								<select>
									<option value="">Select Location</option>
									<option value="">Arroyo Grande</option>
									<option value="">San Luis Obispo</option>
								</select>
							</td>
							<td>
								<select>
									<option value="">Select Department</option>
									<option value="">Sales</option>
									<option value="">Store Operations</option>
									<option value="">Service</option>
									<option value="">Company Operations</option>
								</select>
							</td>
							<td>
								<input type="text" placeholder={"Title"}/>
							</td>
							<td>
								<input type="text" placeholder={"Email"}/>
							</td>
							<td>
								<button>Save</button>
							</td>
						</tr>
					</table>
				</div>
				<VerticalSpacer height={30}/>
				<div className={styles.userList}>
					<SubTitle title={"Company Users"}/>
					<table>
						<tr>
							<th>Name</th>
							<th>Location</th>
							<th>Department</th>
							<th>Title</th>
							<th>View</th>
						</tr>
						<tr>
							<td>Schaller, Geoff</td>
							<td>San Luis Obispo</td>
							<td>Store Operations</td>
							<td>Sales Manager</td>
							<td><i className="fad fa-arrow-right"/></td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}

export default Users;