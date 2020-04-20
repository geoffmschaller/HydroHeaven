import {Request, Response} from 'express';
import Sanitizer from '../../validators/Sanitizer';
import TextValidator from '../../validators/TextValidator';
import APIResponse from '../../responses/APIResponse';
import UserModel from '../../models/UserModel';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const ResetPasswordWithToken = async (req: Request, res: Response) => {

    // GET SUPPLIED INPUTS
    const suppliedId: string = Sanitizer(req.body.id);
    const suppliedToken: string = Sanitizer(req.body.token);
    const suppliedPassword: string = Sanitizer(req.body.password);

    // VALIDATE INPUTS
    if(!TextValidator(suppliedId)) return APIResponse.error(res, "Invalid ID Supplied.");
    if(!TextValidator(suppliedToken)) return APIResponse.error(res, "Invalid Token Supplied.");
    if(!TextValidator(suppliedPassword)) return APIResponse.error(res, "Invalid Password Supplied.");

    // DECODE TOKEN
    try {
        const decodedId = await jwt.verify(suppliedToken, process.env.JWT_KEY);
        if(!decodedId) return APIResponse.error(res, "Invalid Token Supplied");
        if(decodedId['id'] !== suppliedId) return APIResponse.error(res, "Token Mismatch");
        const updatedUser = await UserModel.findByIdAndUpdate(suppliedId, {
            password: await bcrypt.hash(suppliedPassword, 10),
            resetToken: ""
        }, {new: true});
        updatedUser['password'] = "REDACTED";
        return APIResponse.success(res, "Updated Password!", {user: updatedUser});
    } catch (e){
        return APIResponse.error(res, "Error. Please try again");
    }
    
    

};

export default ResetPasswordWithToken;