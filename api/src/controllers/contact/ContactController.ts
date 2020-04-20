import express from 'express';
import SendContact from './SendContact';
import GetAllContacts from './GetAllContacts';
import GetContactById from './GetContactById';
import UpdateContact from './UpdateContact';

const ContactRouter = express.Router();

ContactRouter.post("/new", SendContact);
ContactRouter.post("/all", GetAllContacts);
ContactRouter.post("/view", GetContactById);
ContactRouter.post("/update", UpdateContact);

export default ContactRouter;