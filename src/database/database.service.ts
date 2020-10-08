import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as mysql from 'mysql';
let self: DatabaseService;
@Injectable()
export class DatabaseService {
  public password = 'pavuiug';
  public thePool: mysql.Pool;
  constructor() {
    this.thePool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'erardbms',
    });
    self = this;
  }
  async signUpUser(
    name: string,
    password: string,
    phone: string,
    email: string,
  ): Promise<any> {
    const userId = self.generateRandomUserId();
    const theQuery = `insert into era_user(user_id,user_name,user_phone,user_email,user_password) values ?`;
    const VALUES = [[userId, name, phone, email, password]];
    try {
      return new Promise(function(resolve, reject) {
        const formattedQuery = mysql.format(theQuery, [VALUES]);
        self.thePool.query(formattedQuery, function(err: any) {
          if (err) reject(err);
          else resolve(true);
        });
      });
    } catch (err_1) {
      console.error(err_1);
      return false;
    }
  }
  async signIn(email: string, password: string): Promise<any> {
    const theQuery = `select count(*) as theCount from era_user where user_email = "${email}" && user_password = "${password}"`;
    return new Promise(function(resolve, reject) {
    self.thePool.query(theQuery, function(err: any, result: any) {
        if (err) reject(err);
        else if (result[0].theCount != 1) resolve(false);
        else resolve(true);
      });
    }).catch(function(err) {
      console.error(err);
      return false;
    });
  }
  async getUserName(email: string): Promise<any> {
    return new Promise(function(resolve, reject) {
      const theQuery = `select user_name from era_user where user_email = "${email}" `;
      self.thePool.query(theQuery, function(err, res) {
        if (err) reject(err);
        resolve(res[0].user_name);
      });
    }).catch(err => {
      console.error(err);
      return false;
    });
  }
  /***
   * The Encryption Function AES 128
   * @author JSGREWAL
   */
  encryptPassword(data: string): string {
    const cipher = crypto.createCipher('aes128', this.password);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  /***
   * The Decryption Function AES 128
   * @author JSGREWAL
   */
  decryptPassword(data: string): string {
    const decipher = crypto.createDecipher('aes128', this.password);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
  generateRandomUserId(): number {
    const min = 0;
    const max = 999999;
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
  }
}
