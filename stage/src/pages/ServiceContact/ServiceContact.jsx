import React, {createRef, useState, useEffect} from 'react';
import styles from './ServiceContact.module.sass';
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import SendContactForm from "../../api/contactAPICalls";
import LocationsData from '../../data/LocationData';

const ServiceContact = props => {

	const [contactError, setContactError] = useState(false);
	const [contactResult, setContactResult] = useState('');
	const [contactSending, setContactSending] = useState(false);
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [messageValue, setMessageValue] = useState('');

	useEffect(() => {
		window.scrollTo(0, scrollRef.current.offsetTop - 50);
	});

	const scrollRef = createRef();

	const updateValue = (event) => {
		switch (event.target.name) {
			case 'nameInput':
				setNameValue(event.target.value);
				break;
			case 'emailInput':
				setEmailValue(event.target.value);
				break;
			default:
				setMessageValue(event.target.value);
		}
	};

	const sendContactForm = async () => {
		setContactSending(true);
		let results = await SendContactForm(nameValue, emailValue, messageValue);
		if (results.data.status_code === 500) {
			setContactError(true);
			setContactResult(results.data.message);
		} else {
			setContactError(false);
			setContactResult(results.data.message);
			setNameValue('');
			setEmailValue('');
			setMessageValue('');
		}
		setContactSending(false);
	};

	const resultClasses = contactError ? [styles.result, styles.error].join(" ") : [styles.result, styles.success].join(" ");

	return (
		<div className={styles.serviceContact}>
			<div ref={scrollRef}/>
			<div className={styles.holder}>
				<div className={styles.locations}>
					{
						LocationsData.map((loc, index) => {
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
							Please feel free to send us a message below, we'd love to hear from you. If this is
							urgent please call one of our locations so
							that a team member can help you directly.
						</div>
						<input name="nameInput" type="text" placeholder={"Full Name"} value={nameValue}
								onChange={(event) => updateValue(event)}/>
						<input name="emailInput" type="text" placeholder={"Email"} value={emailValue}
								onChange={(event) => updateValue(event)}/>
						<textarea name="messageInput" placeholder={"Your Message"} value={messageValue}
									onChange={(event) => updateValue(event)}/>
						<button disabled={contactSending} onClick={() => sendContactForm()}>
							{
								contactSending
									? <i className="fas fa-spinner"/>
									: <div>Send</div>
							}
						</button>
						<div className="clear"/>
						<div className={resultClasses}>{contactResult}</div>
					</div>
				</div>
			</div>
		</div>
	);

}


export default ServiceContact;