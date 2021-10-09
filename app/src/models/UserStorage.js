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

static getUserInfo(id){
    const user = this.#users;
    const idx = user.id.indexOf(id);
    const usersKeys = Object.keys(user);
    const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = user[info][idx];
        return newUser;
    }, {});

    return userInfo;
}

static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return{success: true};
}
}

module.exports = UserStorage;