import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
let SharedService = class SharedService {
    constructor() {
        this.userData = new BehaviorSubject('');
        this.currentData = this.userData.asObservable();
    }
    updateMessage(data) {
        this.userData.next(data);
    }
};
SharedService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SharedService);
export { SharedService };
//# sourceMappingURL=shared.service.js.map