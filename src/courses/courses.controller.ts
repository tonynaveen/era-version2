import {Request, Response } from 'express';
import { Controller, All, Req, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @All('maths')
    fetchMaths(@Req() req:Request, @Res() res:Response ):any {
        if (req.session.username) {res.render('Maths',{logged_in_user:req.session.username})}
        else res.status(302).redirect('../auth/login');
    }
    @All('science')
    fetchScience(@Req() req:Request, @Res() res:Response ):any {
        if (req.session.username) {res.render('Science',{logged_in_user:req.session.username})}
        else res.status(302).redirect('../auth/login');
    }
    @All('alr')
    fetchALR(@Req() req:Request, @Res() res:Response ):any {
        if (req.session.username) {res.render('ALR',{logged_in_user:req.session.username})}
        else res.status(302).redirect('../auth/login');
    }
    @All('ss')
    fetchSoftSkills(@Req() req:Request, @Res() res:Response ):any {
        if (req.session.username) {res.render('SoftSkills',{logged_in_user:req.session.username})}
        else res.status(302).redirect('../auth/login');
    }
    @All('studyMaterial')
    fetchStudyMaterial(@Req() req:Request, @Res() res:Response ):any {
        if (req.session.username) {res.render('StudyMaterial',{logged_in_user:req.session.username})}
        else res.status(302).redirect('../auth/login');
    }
    
}
