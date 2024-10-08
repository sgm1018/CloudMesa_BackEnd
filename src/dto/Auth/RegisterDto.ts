export class RegisterDto {
    public Email: string;
    public Password: string;
    public FirstName: string;
    public LastName: string;
    public DateOfBirth: Date;

    constructor({Email, Password, FirstName, LastName, DateOfBirth} : {Email: string, Password: string, FirstName: string, LastName: string, DateOfBirth: Date}) {
        this.Email = Email;
        this.Password = Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DateOfBirth = DateOfBirth;
    }
}
