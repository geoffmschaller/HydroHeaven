import React, {FunctionComponent, useState} from 'react';
import styles from './Contact.module.sass';
import NavigationBar from "../../components/molecules/NavigationBar/NavigationBar";
import Footer from "../../components/molecules/Footer/Footer";
import axios, {AxiosResponse} from "axios";
import RotateClockwise from "../../animations/RotateClockwise";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";
import ScrollToTop from "../../utils/ScrollToTop";

const Contact: FunctionComponent = () => {

	const [currentName, setCurrentName] = useState("");
	const [currentEmail, setCurrentEmail] = useState("");
	const [currentMessage, setCurrentMessage] = useState("");
	const [currentSuccess, setCurrentSuccess] = useState("");
	const [currentError, setCurrentError] = useState("");
	const [isSending, setIsSending] = useState(false);

	const submitForm = async () => {
		if (isSending) return;
		setIsSending(true);
		const result: AxiosResponse = await axios.post("https://api.hydroheavenspas.com/contact/new", {
			name: currentName,
			email: currentEmail,
			message: currentMessage
		});
		switch (result.data.status_code) {
			case 200:
				setCurrentError("");
				setCurrentSuccess(result.data.message);
				setCurrentName("");
				setCurrentEmail("");
				setCurrentMessage("");
				break;
			default:
				setCurrentError(result.data.errors);
				setCurrentSuccess("");
				break;
		}
		setIsSending(false);
	}

	return (
		<div className={styles.contact}>
			<ScrollToTop/>
			<NavigationBar background="contact"/>
			<div className={styles.wrapper}>
				<div className={styles.right}>
					<div className={styles.contactForm}>
						<FadeAndSlideUp duration={0.3}>
							<div className={styles.title}>Contact Us</div>
							<div className={styles.description}>Please feel free to send us a message below, we'd love to hear from you. If this is
								urgent
								please call one of our locations so that a team member can help you directly.
							</div>
							<div className={styles.input}>
								<div className={styles.label}>Name</div>
								<input
									type="text"
									onChange={(e) => {
										setCurrentName(e.target.value);
									}}
									value={currentName}
								/>
							</div>
							<div className={styles.input}>
								<div className={styles.label}>Email</div>
								<input
									type="text"
									onChange={(e) => {
										setCurrentEmail(e.target.value);
									}}
									value={currentEmail}
								/>
							</div>
							<div className={styles.input}>
								<div className={styles.label}>Message</div>
								<textarea
									onChange={(e) => {
										setCurrentMessage(e.target.value);
									}}
									value={currentMessage}
								/>
							</div>
							<div className={styles.submit} onClick={() => submitForm()}>{
								isSending
									? <RotateClockwise duration={1}>
										<i className="fal fa-spinner"/>
									</RotateClockwise>
									: <div>Submit</div>
							}</div>
							<div className={styles.error}>{currentError}</div>
							<div className={styles.success}>{currentSuccess}</div>
						</FadeAndSlideUp>
					</div>
				</div>
			</div>
			<Footer isDark={true}/>
		</div>
	)
}

export default Contact;