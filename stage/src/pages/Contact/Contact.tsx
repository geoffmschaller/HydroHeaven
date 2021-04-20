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
				<div className={styles.left}>
					<div className="financing-module">
						<div>
							<img
							src="https://www.greensky.com/merchantkit/images/finance_buttons/headers/header_320.jpg?v=3.0.611"
							alt="Financing Options from GreenSky" tabIndex={0}/>
						</div>
						<div>
							<img
							src="https://www.greensky.com/merchantkit/images/finance_buttons/product_headers/hi_product_header_320.jpg?v=3.0.611"
							width="320" height="100" alt="Finance Your Project" tabIndex={0}/>
						</div>
						<div>
							<a
							href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81069356&dealerplan=9144&channel=External-Button-03"
							target="_blank" tabIndex={0} rel="noreferrer">
								<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/plans/9144_320x100.jpg?v=3.0.611"
								width="320" height="100" alt="Reduced Rate for 144 Months"/>
							</a>
						</div>
						<div>
							<a
							href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81069356&dealerplan=2602&channel=External-Button-03"
							target="_blank" tabIndex={0} rel="noreferrer">
								<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/plans/2602_320x100.jpg?v=3.0.611"
								width="320" height="100"
								alt="2602 - 6 Months No Interest, with Payments (84 months) - (78 Principal Pmts)"/>
							</a>
						</div>
						<div>
							<a
							href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81069356&dealerplan=2786&channel=External-Button-03"
							target="_blank" tabIndex={0} rel="noreferrer">
								<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/plans/2786_320x100.jpg?v=3.0.611"
								width="320" height="100"
								alt="2786 - Reduced Rate 9.99% for 96 Months - (90 Principal Pmts)"/>
							</a>
						</div>
						<div>
							<img
							src="https://www.greensky.com/merchantkit/images/finance_buttons/footers/footer_320.jpg?v=3.0.611"
							width="320" height="73"
							alt="Financing for GreenSky&#169; credit programs is provided by federally insured, federal and state chartered financial institutions without regard to race, color, religion, national origin, sex or familial status. NMLS #1416362; CT SLC-1416362; NJMT #1501607 C22"
							tabIndex={0}/>
						</div>
					</div>
				</div>
			</div>
			<Footer isDark={true}/>
		</div>
	)
}

export default Contact;