export declare class UsersEntity {
    readonly userid: number;
    readonly username: string;
    password: string;
    hashPassword(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
    constructor(userId: number, name: string, pass: string);
}
