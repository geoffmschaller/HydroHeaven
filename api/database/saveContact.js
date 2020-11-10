const saveContact = async (userInputs) => {
	try {
		const users = await ClientModel.findOne({ email: userInputs.email.toString() }).exec();
		if (!users) {
			await new ClientModel({
				name: userInputs.name,
				email: userInputs.email,
				contacts: [{ message: userInputs.message }]
			}).save();
		}
		else {
			users.contacts.push({ message: userInputs.message });
			await users.save();
		}
		return 200;
	}
	catch (e) {
		return 500;
	}
}

module.exports = saveContact;