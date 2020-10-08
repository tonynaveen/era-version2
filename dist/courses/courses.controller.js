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
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
let CoursesController = class CoursesController {
    fetchMaths(req, res) {
        if (req.session.username) {
            res.render('Maths', { logged_in_user: req.session.username });
        }
        else
            res.status(302).redirect('../auth/login');
    }
    fetchScience(req, res) {
        if (req.session.username) {
            res.render('Science', { logged_in_user: req.session.username });
        }
        else
            res.status(302).redirect('../auth/login');
    }
    fetchALR(req, res) {
        if (req.session.username) {
            res.render('ALR', { logged_in_user: req.session.username });
        }
        else
            res.status(302).redirect('../auth/login');
    }
    fetchSoftSkills(req, res) {
        if (req.session.username) {
            res.render('SoftSkills', { logged_in_user: req.session.username });
        }
        else
            res.status(302).redirect('../auth/login');
    }
    fetchStudyMaterial(req, res) {
        if (req.session.username) {
            res.render('StudyMaterial', { logged_in_user: req.session.username });
        }
        else
            res.status(302).redirect('../auth/login');
    }
};
__decorate([
    common_1.All('maths'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], CoursesController.prototype, "fetchMaths", null);
__decorate([
    common_1.All('science'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], CoursesController.prototype, "fetchScience", null);
__decorate([
    common_1.All('alr'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], CoursesController.prototype, "fetchALR", null);
__decorate([
    common_1.All('ss'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], CoursesController.prototype, "fetchSoftSkills", null);
__decorate([
    common_1.All('studyMaterial'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], CoursesController.prototype, "fetchStudyMaterial", null);
CoursesController = __decorate([
    common_1.Controller('courses')
], CoursesController);
exports.CoursesController = CoursesController;
//# sourceMappingURL=courses.controller.js.map