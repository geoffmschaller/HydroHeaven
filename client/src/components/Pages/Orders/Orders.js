import React from 'react';
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import styles from './Orders.module.css';
import SubTitle from "../../Inflatables/SubTitle/SubTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";

class Orders extends React.Component {
	render() {
		return (
			<div className={styles.orders}>
				<DashboardTitle title={"Orders"}/>

				<SubTitle title={"Live Search"}/>
				<div className={styles.liveSearch}>
					<input type="text" placeholder={"Begin Typing To Search..."}/>
					<div className={styles.searchName}>Searching For Orders By "name"</div>
				</div>

				<VerticalSpacer height={30}/>
				<div className={styles.newOrder}>
					<SubTitle title={"Create New Order"}/>
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
									<option value="">Select Order Type</option>
									<option value="">Spa Order</option>
									<option value="">Swim Spa Order</option>
									<option value="">Spa Cover</option>
									<option value="">Spa Part</option>
									<option value="">BBQ Island</option>
									<option value="">BBQ Head/Cart</option>
									<option value="">BBQ Part</option>
								</select>
							</td>
							<td>
								<button>Save</button>
							</td>
						</tr>
					</table>
				</div>
				<VerticalSpacer height={30}/>
				<div className={styles.orderList}>
					<SubTitle title={"Client Orders"}/>
					<table>
						<tr>
							<th>Date</th>
							<th>Order #</th>
							<th>Client</th>
							<th>Type</th>
							<th>Status</th>
							<th>Edit</th>
						</tr>
						<tr>
							<td>10/17/19</td>
							<td>hs45j3ss</td>
							<td>Schaller, Geoff</td>
							<td>Spa Order</td>
							<td>ON ORDER</td>
							<td><i className="fad fa-edit"/></td>
						</tr>
					</table>
				</div>

			</div>
		);
	}
}

export default Orders;