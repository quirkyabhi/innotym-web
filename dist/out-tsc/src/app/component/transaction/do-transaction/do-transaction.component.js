import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DoTransactionComponent = class DoTransactionComponent {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    ngOnInit() {
    }
    doTrannsaction(model) {
        this.transactionService.createTransaction(model).subscribe(data => {
            console.log(data);
        }, err => console.log(err));
    }
};
DoTransactionComponent = __decorate([
    Component({
        selector: 'app-do-transaction',
        templateUrl: './do-transaction.component.html',
        styleUrls: ['./do-transaction.component.scss']
    })
], DoTransactionComponent);
export { DoTransactionComponent };
//# sourceMappingURL=do-transaction.component.js.map