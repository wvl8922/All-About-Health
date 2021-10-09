'use strict';

class UserStorage{
    static #users = {
    id: ["ethan", "johnxg", "google"],
    password: ["1234","1234","1234"],
    name: ["ethan","ethan1","ethan2"]
};

static getUsers(...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field)=>{
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
}
}

module.exports = UserStorage;