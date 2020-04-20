import {Request, Response} from 'express';
import Sanitizer from '../../validators/Sanitizer';
import TextValidator from '../../validators/TextValidator';
import APIResponse from '../../responses/APIResponse';
import UserModel from '../../models/UserModel';
import EmailValidator from "../../validators/EmailValidator";
import BooleanValidator from "../../validators/BooleanValidator";

const UpdateUser = async (req: Request, res: Response) => {

    // GET INPUTS
    const submittedId: string = Sanitizer(req.body.id);
    const submittedName: string = Sanitizer(req.body.name);
    const submittedTitle: string = Sanitizer(req.body.title);
    const submittedLocation: string = Sanitizer(req.body.location);
    const submittedActive: string = Sanitizer(req.body.active);
    const submittedCompany: string = Sanitizer(req.body.company);

    // VALIDATE INPUTS
    if(!TextValidator(submittedId)) return APIResponse.error(res, "Invalid ID Submitted");
    if(!TextValidator(submittedName)) return APIResponse.error(res, "Invalid Name Submitted");
    if(!TextValidator(submittedTitle)) return APIResponse.error(res, "Invalid Title Submitted");
    if(!TextValidator(submittedLocation)) return APIResponse.error(res, "Invalid Location Submitted");
    if(!BooleanValidator(submittedActive)) return APIResponse.error(res, "Invalid Active Submitted");
    if(!TextValidator(submittedCompany)) return APIResponse.error(res, "Invalid Company Submitted");

    try{
        const updateResult = await UserModel.findByIdAndUpdate(submittedId, {
            name: submittedName,
            title: submittedTitle,
            location: submittedLocation,
            active: submittedActive,
            company: submittedCompany
        }, {new: true});
        return APIResponse.success(res, "User Updated.", {user: updateResult});
    } catch(e){
        console.log(e);
        return APIResponse.error(res, "Error. Please try again.");
    }

};

export default UpdateUser;