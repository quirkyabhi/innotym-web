import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('http://localhost:3000/api/users');
    }
    createUser(model) {
        return this.http.post('http://localhost:3000/api/users/signup', model);
    }
    loginUser(model) {
        return this.http.post('http://localhost:3000/api/users/login', model);
    }
    updateUser(model) {
        return this.http.put('http://localhost:3000/api/users/' + model._id, model);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map