const generateHouseContactPayload = (userInputs) => (
	{
		from: { name: 'Clementine', address: 'mailer@hydroheavenspas.com' },
		to: 'geoff@hydroheavenspas.com',
		subject: 'New Message Received!',
		replyTo: userInputs.email,
		template: {
			name: './mailer/views/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: userInputs.name,
				email: userInputs.email,
				message: userInputs.message,
				header: 'New message from website!'
			}
		}
	}
);

const generateClientContactPayload = (userInputs) => (
	{
		from: { name: 'Hydro Heaven Spas', address: 'mailer@hydroheavenspas.com' },
		to: userInputs.email,
		subject: 'Message Received!',
		replyTo: 'geoff@hydroheavenspas.com',
		template: {
			name: './mailer/views/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: userInputs.name,
				email: userInputs.email,
				message: userInputs.message,
				header: 'We have received your message!'
			}
		}
	}
);

module.exports = {
	generateHouseContactPayload,
	generateClientContactPayload
};
