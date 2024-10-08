export class LoginDto {
    public Email: string;
    public Password: string;

    constructor({Email, Password} : {Email: string, Password: string}) {
        this.Email = Email;
        this.Password = Password;
    }

}
