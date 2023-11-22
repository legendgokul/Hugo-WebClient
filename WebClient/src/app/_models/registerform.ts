export class  registerform{
    userName:string;
    email:string;
    address:string;
    password:string;
    type:string;
    businessInfo:string;
    phoneNumber:string;

    constructor(userName:string,email:string,
        address:string,password:string,
        type:string, businessInfo:string,
        phoneNumber:string){

        this.userName = userName;
        this.email = email;
        this.address = address;
        this.password = password;
        this.type = type;
        this.businessInfo = businessInfo;
        this.phoneNumber = phoneNumber;
    }
}