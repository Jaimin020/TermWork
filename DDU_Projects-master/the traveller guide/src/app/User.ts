// tslint:disable-next-line: class-name
export class user {
    public name: string;
    public pass: string;
    public email: string;
    constructor(name: string, pass: string, email?: string) {
        this.name = name;
        this.pass = pass;
        this.email = email;
    }
}
