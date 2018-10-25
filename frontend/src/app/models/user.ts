export class User {

    constructor(_id = '', name = '', phone = '', birth = '', email = '') {
        this._id = _id;
        this.name = name;
        this.phone = phone;
        this.birth = birth;
        this.email = email;
    }

    _id: string;
    name: string;
    phone: string;
    birth: string;
    email: string;
}
