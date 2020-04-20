import TextValidator from "./TextValidator";


const EmailValidator = (input: string | null | undefined): boolean => {
	try {
		if(input === undefined || input === null) return false;

		const cleaned: string = input.trim().replace(/ /, "").toString().toLowerCase();
		const userSplit: string[] = cleaned.split("@");
		if (userSplit.length != 2) return false;

		const user = userSplit[0];
		const userResult = TextValidator(user);
		if (!userResult) return false;

		const companySplit = userSplit[1].split(".");
		if (companySplit.length < 2) return false;

		const company = companySplit[0];
		const companyResult = TextValidator(company);
		if (!companyResult) return false;
		
		const domain = companySplit[1];
		const domainResult = TextValidator(domain);
		if (!domainResult) return false;

		return true;
	}catch(e){
		return false;
	}	
};

export default EmailValidator;