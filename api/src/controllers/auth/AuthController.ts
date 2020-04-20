import express from 'express';
import CreateUser from './CreateUser';
import GetAllUsers from './GetAllUsers';
import GetUserById from './GetUserById';
import UpdateUser from './UpdateUser';
import IssueResetToken from './IssueResetToken';
import ResetPasswordWithToken from './ResetPasswordWithToken';

const AuthRouter = express.Router();

// USER
AuthRouter.post('/new', CreateUser);
AuthRouter.post('/all', GetAllUsers);
AuthRouter.post('/view', GetUserById);
AuthRouter.post('/update', UpdateUser);

// PASSWORD RESET
AuthRouter.post('/issue-reset-token', IssueResetToken);
AuthRouter.get('/reset-password-with-token/:token', ResetPasswordWithToken);

export default AuthRouter;