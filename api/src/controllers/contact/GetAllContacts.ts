import {Request, Response} from 'express';
import ContactModel from '../../models/ContactModel';
import APIResponse from '../../responses/APIResponse';

const GetAllContacts = async (req: Request, res: Response) => {

    try{
        const allContacts = await ContactModel.find({});
        return APIResponse.success(res, `${allContacts.length} Contacts Found.`, {contacts: allContacts});
    } catch (e){
        return APIResponse.error(res, "Error. Please try again");
    }
    

};

export default GetAllContacts;