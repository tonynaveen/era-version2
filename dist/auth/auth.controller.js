"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const database_service_1 = require("./../database/database.service");
const common_1 = require("@nestjs/common");
let AuthController = class AuthController {
    constructor(dbConnector) {
        this.dbConnector = dbConnector;
    }
    getLogin() {
        return {};
    }
    getSignup() {
        return {};
    }
    theSignoutAction(req, res) {
        req.session.loggedin = false;
        req.session.username = '';
        res.status(302).redirect('login');
    }
    async theSignupAction(req, res) {
        const x = [
            req.body.name,
            req.body.password,
            req.body.phone,
            req.body.email,
        ];
        console.log(x);
        const encPass = this.dbConnector.encryptPassword(req.body.password);
        const isUserRegistered = await this.dbConnector.signUpUser(req.body.name, encPass, req.body.phone, req.body.email);
        if (isUserRegistered) {
            res.redirect('login');
        }
        else
            res.sendStatus(406);
    }
    async theLoginAction(req, res) {
        const encPass = this.dbConnector.encryptPassword(req.body.password);
        const canUserLogin = await this.dbConnector.signIn(req.body.email, encPass);
        if (canUserLogin) {
            req.session.loggedin = true;
            req.session.username = await this.dbConnector.getUserName(req.body.email);
        }
        if (req.session.isTeacher == 'YES')
            res.render('TeachersDashboard', {});
        else
            res.status(302).redirect('../');
    }
};
__decorate([
    common_1.All('login'),
    common_1.Render('Login.ejs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AuthController.prototype, "getLogin", null);
__decorate([
    common_1.All('signup'),
    common_1.Render('SignUp.ejs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AuthController.prototype, "getSignup", null);
__decorate([
    common_1.All('signout'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "theSignoutAction", null);
__decorate([
    common_1.Post('registerUser'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "theSignupAction", null);
__decorate([
    common_1.Post('/loginAction'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "theLoginAction", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map