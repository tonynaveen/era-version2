import * as mysql from 'mysql';
export declare class DatabaseService {
    password: string;
    thePool: mysql.Pool;
    constructor();
    signUpUser(name: string, password: string, phone: string, email: string): Promise<any>;
    signIn(email: string, password: string): Promise<any>;
    getUserName(email: string): Promise<any>;
    encryptPassword(data: string): string;
    decryptPassword(data: string): string;
    generateRandomUserId(): number;
}
