import { User } from "src/models/User/User.schema";

export class UserWithTokenDto {
    public Email: string;
    public Token: string;
    public FirstName: string;
    public LastName: string;
    public DateOfBirth: Date;

    constructor({Token, User} : {Token: string, User: User}) {
        this.Token = Token;
        this.Email = User.Email;
        this.FirstName = User.FirstName;
        this.LastName = User.LastName;
        this.DateOfBirth = User.DateOfBirth;
    }

}
