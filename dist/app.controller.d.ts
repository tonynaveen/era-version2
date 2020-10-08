import { Request, Response } from 'express';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    root(req: Request): any;
    about(req: Request): any;
    liveSession(req: Request, res: Response): any;
    termsAndConditions(): void;
    PrivacyPolicy(): void;
}
