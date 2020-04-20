import {Request, Response} from 'express';
import Sanitizer from "../../validators/Sanitizer";
import TextValidator from "../../validators/TextValidator";
import EmailValidator from "../../validators/EmailValidator";
import APIResponse from "../../responses/APIResponse";
import UserModel from '../../models/UserModel';

const bcrypt = require('bcryptjs');

const CreateUser = async (req: Request, res: Response) => {

    // GET INPUTS
    const submittedName: string = Sanitizer(req.body.name);
    const submittedEmail: string = Sanitizer(req.body.email);
    const submittedPassword: string = Sanitizer(req.body.password);
    const submittedTitle: string = Sanitizer(req.body.title);
    const submittedLocation: string = Sanitizer(req.body.location);

    // VALIDATE INPUTS
    if(!TextValidator(submittedName)) return APIResponse.error(res, "Invalid Name Submitted");
    if(!EmailValidator(submittedEmail)) return APIResponse.error(res, "Invalid Email Submitted");
    if(!TextValidator(submittedPassword)) return APIResponse.error(res, "Invalid Password Submitted");
    if(!TextValidator(submittedTitle)) return APIResponse.error(res, "Invalid Title Submitted");
    if(!TextValidator(submittedLocation)) return APIResponse.error(res, "Invalid Location Submitted");

    try{
        let createResult = await new UserModel({
            name: submittedName,
            email: submittedEmail,
            password: await bcrypt.hash(submittedPassword, 10),
            title: submittedTitle,
            location: submittedLocation
        }).save();
        createResult['password'] = "REDACTED";
        return APIResponse.success(res, "User Created!", {user: createResult});
    } catch (e){
        console.log(e);
        return APIResponse.error(res, "Error. Please try again.");
    }

};

export default CreateUser;