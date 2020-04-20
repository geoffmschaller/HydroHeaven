import React, {ChangeEvent} from 'react';
import styles from './ServiceContact.module.sass';
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import LocationInterface from "../../interfaces/LocationInterface";
import SendContactForm from "../../api/contactAPICalls";

class ServiceContact extends React.Component {

	componentDidMount(){
		window.scrollTo(0,0);
	}

	state = {
		error: true,
		result: "",
		sending: false,
		nameInput: "",
		emailInput: "",
		messageInput: ""
	};

	locations: Array<LocationInterface> = [
		{
			address: "135 Traffic Way, Arroyo Grande CA",
			image: require('../../static/images/locations/arroyo_grande.jpg'),
			phone: "(805) 473 - 2205"
		},
		{
			address: "200 Higuera Street, San Luis Obispo, CA",
			image: require('../../static/images/locations/san_luis_obispo.jpg'),
			phone: "(805) 544 - 1772"
		}
	];

	updateValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let input: string = event.target.name;
		let s: React.ComponentState = {...this.state};
		s[input] = event.target.value;
		this.setState(s);
	};

	sendContactForm = async () => {
		await this.setState({sending: true});
		let results = await SendContactForm(this.state.nameInput, this.state.emailInput, this.state.messageInput);
		switch (results.data['status']) {
			case 500:
				this.setState({error: true, result: results.data.message});
				break;
			default:
				this.setState({error: false, result: results.data.message, nameInput: "", emailInput: "", messageInput: ""});
		}
		await this.setState({sending: false});
	};

	render() {

		let resultClasses = this.state.error ? [styles.result, styles.error].join(" ") : [styles.result, styles.success].join(" ");

		return (
			<div className={styles.serviceContact}>
				<div className={styles.holder}>
					{/* LOCATIONS */}
					<div className={styles.locations}>
						{
							this.locations.map((loc, index) => {
								return <div className={styles.location} key={index}>
									<img src={loc.image} alt=""/>
									<div className={styles.address}>{loc.address}</div>
									<div className={styles.phone}>{loc.phone}</div>
								</div>
							})
						}
					</div>
					<div className={styles.contact}>
						<DarkSlantTitle title={"Contact Us"}/>
						<div className={styles.contactForm}>
							<div className={styles.description}>
								Please feel free to send us a message below, we'd love to hear from you. If this is urgent please call one of our locations so
								that a team member can help you directly.
							</div>
							<input name="nameInput" type="text" placeholder={"Full Name"} value={this.state.nameInput}
							       onChange={(event) => this.updateValue(event)}/>
							<input name="emailInput" type="text" placeholder={"Email"} value={this.state.emailInput}
							       onChange={(event) => this.updateValue(event)}/>
							<textarea name="messageInput" placeholder={"Your Message"} value={this.state.messageInput}
							          onChange={(event) => this.updateValue(event)}/>
							<button disabled={this.state.sending} onClick={() => this.sendContactForm()}>
								{
									this.state.sending
										? <i className="fas fa-spinner"></i>
										: <div>Send</div>
								}
							</button>
							<div className="clear"/>
							<div className={resultClasses}>{this.state.result}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default ServiceContact;