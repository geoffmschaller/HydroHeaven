import TextValidator from "./TextValidator";

class EmailValidator {

	static validate = (input: string): boolean => {

		const cleaned: string = input.trim().replace(/ /, "").toString().toLowerCase();

		const userSplit: string[] = cleaned.split("@");
		if (userSplit.length != 2) return false;
		const user = userSplit[0];
		const userResult = TextValidator.validate(user);
		if (!userResult) return false;

		const companySplit = userSplit[1].split(".");
		if (companySplit.length < 2) return false;
		const company = companySplit[0];
		const companyResult = TextValidator.validate(company);
		if (!companyResult) return false;

		const domain = companySplit[1];
		const domainResult = TextValidator.validate(domain);
		if (!domainResult) return false;

		return true;

	}

}

export default EmailValidator;