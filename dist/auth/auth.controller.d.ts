import { DatabaseService } from './../database/database.service';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly dbConnector;
    constructor(dbConnector: DatabaseService);
    getLogin(): any;
    getSignup(): any;
    theSignoutAction(req: Request, res: Response): void;
    theSignupAction(req: Request, res: Response): Promise<any>;
    theLoginAction(req: Request, res: Response): Promise<any>;
}
