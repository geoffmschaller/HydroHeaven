import {Request, Response} from 'express';
import ContactModel from '../../models/ContactModel';
import APIResponse from '../../responses/APIResponse';
import Sanitizer from "../../validators/Sanitizer";
import TextValidator from "../../validators/TextValidator";
import EmailValidator from "../../validators/EmailValidator";

const UpdateContact = async (req: Request, res: Response) => {

    // GET SUBMITTED DATA
    const submittedId: string = Sanitizer(req.body.id);
	const submittedName: string = Sanitizer(req.body.name);
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedMessage: string = Sanitizer(req.body.message);

    // VALIDATE DATA
    if(!TextValidator(submittedId)) return APIResponse.error(res, "Invalid ID Supplied");
	if (!TextValidator(submittedName, 50)) return APIResponse.error(res, "Valid name required. Max length 50.");
	if (!EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");
	if (!TextValidator(submittedMessage, 500)) return APIResponse.error(res, "Valid message required. Max length 500");

    // SAVE TO DB
    try {
        const updateResult = await ContactModel.findByIdAndUpdate(submittedId, {
            name: submittedName,
            email: submittedEmail,
            message: submittedMessage
        }, {new: true});
        return APIResponse.success(res, "Contact Found!", {contact: updateResult});
    } catch (e){
        return APIResponse.error(res, "Invalid ID Supplied.");
    }
    
    

};

export default UpdateContact;