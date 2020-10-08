import { Request, Response } from 'express';
import { Controller, Get, Render, All, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('HomePage.ejs')
  root(@Req() req: Request): any {
    let logged_in_user = 'NONE';
    if (req.session.username) logged_in_user = req.session.username;
    return { logged_in_user: logged_in_user };
  }

  @All('/aboutEra')
  @Render('AboutUs.ejs')
  about(@Req() req: Request): any {
    let logged_in_user = 'NONE';
    if (req.session.username) logged_in_user = req.session.username;
    return { logged_in_user: logged_in_user };
  }

  @All('/eraLive')
  liveSession(@Req() req: Request, @Res() res: Response): any {
    if (req.session.username) {
      res.render('LiveSession', { logged_in_user: req.session.username });
    } else res.status(302).redirect('auth/login');
  }
  @All('/tnc')
  @Render('Terms.ejs')
  termsAndConditions(): void {
    return;
  }
  @All('/pp')
  @Render('PrivacyPolicy.ejs')
  PrivacyPolicy(): void {
    return;
  }
}
