import React from 'react';
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import styles from './CleaningList.module.css';
import SubTitle from "../../Inflatables/SubTitle/SubTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";

class CleaningList extends React.Component {
	render() {
		return (
			<div className={styles.cleaningList}>
				<DashboardTitle title={"Cleaning Routes"}/>

				<SubTitle title={"Live Search"}/>
				<div className={styles.liveSearch}>
					<input type="text" placeholder={"Begin Typing To Search..."}/>
					<div className={styles.searchName}>Searching For Route Stops By "name"</div>
				</div>

				<VerticalSpacer height={30}/>
				<div className={styles.newStop}>
					<SubTitle title={"Create New Stop"}/>
					<table>
						<tr>
							<td>
								<select>
									<option value="">Select Client</option>
									<option value="">Schaller, Geoff</option>
								</select>
							</td>
							<td>
								<select>
									<option value="">Select Cleaning Route</option>
									<option value="">Beach Route</option>
								</select>
							</td>
							<td>
								<button>Save</button>
							</td>
						</tr>
					</table>
				</div>
				<VerticalSpacer height={30}/>
				<div className={styles.routeList}>
					<SubTitle title={"Cleaning Route Stops"}/>
					<table>
						<tr>
							<th>Client</th>
							<th>Route</th>
							<th>Address</th>
							<th>Status</th>
							<th>Edit</th>
						</tr>
						<tr>
							<td>Schaller, Geoff</td>
							<td>SLO ROUTE</td>
							<td>920 W Laurel Ave, Lompoc</td>
							<td>OK</td>
							<td><i className="fad fa-edit"/></td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}

export default CleaningList;