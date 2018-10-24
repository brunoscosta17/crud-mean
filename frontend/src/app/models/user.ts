export class User {

    constructor(_id = '', name = '', phone = '', birth = '') {
        this._id = _id;
        this.name = name;
        this.phone = phone;
        this.birth = birth;
    }

    _id: string;
    name: string;
    phone: string;
    birth: string;
}
