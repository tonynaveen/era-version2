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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    root(req) {
        let logged_in_user = 'NONE';
        if (req.session.username)
            logged_in_user = req.session.username;
        return { logged_in_user: logged_in_user };
    }
    about(req) {
        let logged_in_user = 'NONE';
        if (req.session.username)
            logged_in_user = req.session.username;
        return { logged_in_user: logged_in_user };
    }
    liveSession(req, res) {
        if (req.session.username) {
            res.render('LiveSession', { logged_in_user: req.session.username });
        }
        else
            res.status(302).redirect('auth/login');
    }
    termsAndConditions() {
        return;
    }
    PrivacyPolicy() {
        return;
    }
};
__decorate([
    common_1.Get(''),
    common_1.Render('HomePage.ejs'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "root", null);
__decorate([
    common_1.All('/aboutEra'),
    common_1.Render('AboutUs.ejs'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "about", null);
__decorate([
    common_1.All('/eraLive'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "liveSession", null);
__decorate([
    common_1.All('/tnc'),
    common_1.Render('Terms.ejs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "termsAndConditions", null);
__decorate([
    common_1.All('/pp'),
    common_1.Render('PrivacyPolicy.ejs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "PrivacyPolicy", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map