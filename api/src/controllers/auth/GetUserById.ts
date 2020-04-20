import {Request, Response} from 'express';
import Sanitizer from '../../validators/Sanitizer';
import TextValidator from '../../validators/TextValidator';
import APIResponse from '../../responses/APIResponse';
import UserModel from '../../models/UserModel';

const GetUserById = async (req: Request, res: Response) => {

    // GET SUPPLIED ID
    const suppliedId: string = Sanitizer(req.body.id);

    // VALIDATE ID
    if(!TextValidator(suppliedId)) return APIResponse.error(res, "Invalid ID Supplied.");

    // GET ID
    try{
        const user = await UserModel.findById(suppliedId);
        user['password'] = "REDACTED";
        return APIResponse.success(res, "User Found", {user: user});
    } catch(e){
        return APIResponse.error(res, "Invalid ID Supplied");
    }

};

export default GetUserById;