import {Request, Response} from 'express';
import Sanitizer from '../../validators/Sanitizer';
import TextValidator from '../../validators/TextValidator';
import APIResponse from '../../responses/APIResponse';
import ContactModel from '../../models/ContactModel';

const GetContactById = async (req: Request, res: Response) => {

    // GET SUPPLIED ID
    const suppliedId: string = Sanitizer(req.body.id);

    // VALIDATE ID
    if(!TextValidator(suppliedId)) return APIResponse.error(res, "Invalid ID Supplied.");

    // GET ID
    try{
        const contact = await ContactModel.findById(suppliedId);
        return APIResponse.success(res, "Contact Found", {contact: contact});
    } catch(e){
        return APIResponse.error(res, "Invalid ID Supplied");
    }

};

export default GetContactById;