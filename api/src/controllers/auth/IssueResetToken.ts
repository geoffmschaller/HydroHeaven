import {Request, Response} from 'express';
import Sanitizer from '../../validators/Sanitizer';
import TextValidator from '../../validators/TextValidator';
import APIResponse from '../../responses/APIResponse';
import UserModel from '../../models/UserModel';

const jwt = require('jsonwebtoken');

const IssueResetToken = async (req: Request, res: Response) => {

    // GET SUPPLIED ID
    const suppliedId: string = Sanitizer(req.body.id);

    // VALIDATE ID
    if(!TextValidator(suppliedId)) return APIResponse.error(res, "Invalid ID Supplied.");

    // GENERATE RESET TOKEN
    const token = await jwt.sign({id: suppliedId}, process.env.JWT_KEY);

    // GET ID
    try{
        const user = await UserModel.findByIdAndUpdate(suppliedId, {
            resetToken: token
        }, {new: true});
        user['password'] = "REDACTED";
        return APIResponse.success(res, "Reset Token Updated", {user: user});
    } catch(e){
        return APIResponse.error(res, "Invalid ID Supplied");
    }

};

export default IssueResetToken;