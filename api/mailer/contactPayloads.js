const generateHouseContactPayload = (user_inputs) => {
	return {
		from: {name: 'Clementine', address: "mailer@hydroheavenspas.com"},
		to: 'geoff@hydroheavenspas.com',
		subject: "New Message Received!",
		replyTo: user_inputs.email,
		template: {
			name: './mailer/views/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: user_inputs.name,
				email: user_inputs.email,
				message: user_inputs.message,
				header: "New message from website!"
			}
		}
	}
}

const generateClientContactPayload = (user_inputs) => {
	return {
		from: {name: 'Hydro Heaven Spas', address: "mailer@hydroheavenspas.com"},
		to: user_inputs.email,
		subject: "Message Received!",
		replyTo: "geoff@hydroheavenspas.com",
		template: {
			name: './mailer/views/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: user_inputs.name,
				email: user_inputs.email,
				message: user_inputs.message,
				header: "We have received your message!"
			}
		}
	}
}


module.exports = {
	generateHouseContactPayload,
	generateClientContactPayload
}