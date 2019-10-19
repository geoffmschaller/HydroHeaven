import React from 'react';
import styles from './ClientDetails.module.css';
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import {Link} from "react-router-dom";
import SPA_IMAGE from '../../../static/images/spas/250.png';
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import SubTitle from "../../Inflatables/SubTitle/SubTitle";
import Axios from "axios";

class ClientDetails extends React.Component {

	state = {
		client: null
	};

	componentWillMount() {
		Axios.post("/api/clients/get-client-by-id", {id: this.props.match.params.id}).then(result => {
			console.log(result);
			let s = {...this.state};
			s.client = result.data.client;
			this.setState(s);
		})
	}

	render() {
		return (
			<div className={styles.clientDetails}>
				{
					this.state.client ?
						<DashboardTitle title={this.state.client.lastName + ", " + this.state.client.firstName + " - " + this.state.client.phone}/> : null
				}


				<VerticalSpacer height={10}/>
				<div className={styles.breadcrumbs}>
					{
						this.state.client ? <div>
							<Link to={"/dashboard/clients"}>Clients</Link> / {this.state.client._id}
						</div> : null
					}

				</div>

				<VerticalSpacer height={20}/>
				<div className={styles.map}
				     style={{backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.envato.com%2Ffiles%2F232829041%2Fgoogle-maps_screenshot_1.jpg&f=1&nofb=1")'}}>
				</div>
				<VerticalSpacer height={20}/>
				{
					this.state.client ? <div className={styles.address}>{this.state.client.address}</div> : null
				}

				<div className={styles.breaker}/>

				<Block float={FLOAT_LEFT} width={30}>
					<SubTitle title={"Spa Information"}/>
					<div className={styles.spaDetails}>
						<img src={SPA_IMAGE} alt=""/>
						<div className={styles.scale}>
							<i className="fad fa-sausage"/> *Banana for scale.
						</div>
						<div className={styles.model}>2016 - #250</div>
						<div className={styles.make}>By American Whirlpool</div>
					</div>
					<div className="clear"/>
				</Block>
				<Block float={FLOAT_RIGHT} width={70}>
					<div className={styles.cleaningRoute}>
						<SubTitle title={"Cleaning Route"}/>
						<div className={styles.result}>Cleaning Route: <span className={styles.route}>SLO</span></div>
					</div>
					<VerticalSpacer height={30}/>
					<div className={styles.serviceHistory}>
						<SubTitle title={"Service History"}/>
						<table>
							<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Status</th>
								<th>View</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							</tbody>

						</table>
					</div>
					<VerticalSpacer height={30}/>
					<div className={styles.orderHistory}>
						<SubTitle title={"Order History"}/>
						<table>
							<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Status</th>
								<th>View</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							</tbody>
						</table>
					</div>
					<VerticalSpacer height={30}/>
					<div className={styles.clientNotes}>
						<SubTitle title={"Notes About Client"}/>
						<table>
							<thead>
							<tr>
								<th>Date</th>
								<th>Note</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td><i className={styles.edit + " fad fa-money-check-edit"}/></td>
								<td><i className={styles.delete + " fad fa-backspace"}/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td><i className={styles.edit + " fad fa-money-check-edit"}/></td>
								<td><i className={styles.delete + " fad fa-backspace"}/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td><i className={styles.edit + " fad fa-money-check-edit"}/></td>
								<td><i className={styles.delete + " fad fa-backspace"}/></td>
							</tr>
							</tbody>
						</table>
					</div>
				</Block>

				<div className="clear"/>
			</div>
		);
	}

}

export default ClientDetails;