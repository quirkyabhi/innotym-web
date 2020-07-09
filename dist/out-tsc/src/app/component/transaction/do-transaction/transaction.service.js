import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
const BaseUrl = 'http://localhost:3000/api/transactions/';
let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
    }
    createTransaction(model) {
        return this.http.post(`${BaseUrl}`, model);
    }
};
TransactionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TransactionService);
export { TransactionService };
//# sourceMappingURL=transaction.service.js.map