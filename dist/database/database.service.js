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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const mysql = require("mysql");
let self;
let DatabaseService = class DatabaseService {
    constructor() {
        this.password = 'pavuiug';
        this.thePool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'erardbms',
        });
        self = this;
    }
    async signUpUser(name, password, phone, email) {
        const userId = self.generateRandomUserId();
        const theQuery = `insert into era_user(user_id,user_name,user_phone,user_email,user_password) values ?`;
        const VALUES = [[userId, name, phone, email, password]];
        try {
            return new Promise(function (resolve, reject) {
                const formattedQuery = mysql.format(theQuery, [VALUES]);
                self.thePool.query(formattedQuery, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve(true);
                });
            });
        }
        catch (err_1) {
            console.error(err_1);
            return false;
        }
    }
    async signIn(email, password) {
        const theQuery = `select count(*) as theCount from era_user where user_email = "${email}" && user_password = "${password}"`;
        return new Promise(function (resolve, reject) {
            self.thePool.query(theQuery, function (err, result) {
                if (err)
                    reject(err);
                else if (result[0].theCount != 1)
                    resolve(false);
                else
                    resolve(true);
            });
        }).catch(function (err) {
            console.error(err);
            return false;
        });
    }
    async getUserName(email) {
        return new Promise(function (resolve, reject) {
            const theQuery = `select user_name from era_user where user_email = "${email}" `;
            self.thePool.query(theQuery, function (err, res) {
                if (err)
                    reject(err);
                resolve(res[0].user_name);
            });
        }).catch(err => {
            console.error(err);
            return false;
        });
    }
    encryptPassword(data) {
        const cipher = crypto.createCipher('aes128', this.password);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
    decryptPassword(data) {
        const decipher = crypto.createDecipher('aes128', this.password);
        let decrypted = decipher.update(data, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    generateRandomUserId() {
        const min = 0;
        const max = 999999;
        const random = Math.floor(Math.random() * (+max - +min)) + +min;
        return random;
    }
};
DatabaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map