import Validator from "./Validator";
import TextValidator from "./TextValidator";

class EmailValidator extends Validator {

	constructor(input: string) {
		super(input);
		this.validate();
	}

	public validate = (): boolean => {

		const cleaned: string = this.testInput.trim().replace(/ /, "").toString().toLowerCase();

		const userSplit: string[] = cleaned.split("@");
		if (userSplit.length != 2) return false;
		const user = userSplit[0];
		const userResult = new TextValidator(user).validate();
		if (!userResult) return false;

		const companySplit = userSplit[1].split(".");
		if (companySplit.length < 2) return false;
		const company = companySplit[0];
		const companyResult = new TextValidator(company).validate();
		if (!companyResult) return false;

		const domain = companySplit[1];
		const domainResult = new TextValidator(domain).validate();
		if (!domainResult) return false;

		return true;

	}

}

export default EmailValidator;