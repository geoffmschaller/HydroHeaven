import {Request, Response} from 'express';
import APIResponse from '../../responses/APIResponse';
import UserModel from '../../models/UserModel';

const GetAllUsers = async (req: Request, res: Response) => {

    try{
        const allUsers = await UserModel.find({});
        for(let i = 0; i < allUsers.length; i++){
            allUsers[i]['password'] = "REDACTED";
        }
        return APIResponse.success(res, `${allUsers.length} Users Found.`, {users: allUsers});
    } catch (e){
        return APIResponse.error(res, "Error. Please try again");
    }
    

};

export default GetAllUsers;