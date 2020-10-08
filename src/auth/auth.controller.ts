import { DatabaseService } from './../database/database.service';
import { Request, Response } from 'express';
import { Controller, All, Render, Req, Res, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
constructor(private readonly dbConnector:DatabaseService) {}
  
  @All('login')
  @Render('Login.ejs')
  getLogin(): any {
    return {};
  }

  @All('signup')
  @Render('SignUp.ejs')
  getSignup(): any {
    return {};
  }

  @All('signout')
  theSignoutAction(@Req() req: Request, @Res() res: Response): void {
    req.session.loggedin = false;
    req.session.username = '';
    res.status(302).redirect('login');
  }

  @Post('registerUser')
  async theSignupAction(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const x = [
      req.body.name,
      req.body.password,
      req.body.phone,
      req.body.email,
    ];
    console.log(x);
    const encPass = this.dbConnector.encryptPassword(req.body.password);
    const isUserRegistered = await this.dbConnector.signUpUser(
      req.body.name,
      encPass,
      req.body.phone,
      req.body.email,
    );
    if (isUserRegistered) {
      res.redirect('login');
    } else res.sendStatus(406);
  }

  @Post('/loginAction')
  async theLoginAction(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const encPass = this.dbConnector.encryptPassword(req.body.password);
    const canUserLogin = await this.dbConnector.signIn(req.body.email, encPass);
  
    if (canUserLogin) {
      req.session.loggedin = true;
      req.session.username = await this.dbConnector.getUserName(req.body.email);
      // Setup req.session.isTeacher
    }

    // If User Is A Teacher
    if (req.session.isTeacher=='YES') res.render('TeachersDashboard',{});
        // If User Is a Student
             else  res.status(302).redirect('../');
  }
}