import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AddMoneyComponent = class AddMoneyComponent {
    constructor(_snackBar, sharedService, fb, userService) {
        this._snackBar = _snackBar;
        this.sharedService = sharedService;
        this.fb = fb;
        this.userService = userService;
        this.userDeatils = {};
    }
    ngOnInit() {
        this.sharedService.currentData.subscribe(data => {
            this.userDeatils = data;
        });
        this.addMoneyForm = this.fb.group({
            amount: ['', Validators.required]
        });
    }
    addMoney() {
        this.userDeatils.amount = parseInt(this.userDeatils.amount + this.addMoneyForm.value.amount);
        console.log(this.addMoneyForm.value);
        this.userService.updateUser(this.userDeatils).subscribe(data => {
            console.log("success");
            this.sharedService.updateMessage(data);
            this._snackBar.open('Added Money', 'Success', {
                duration: 4000,
            });
        }, err => this._snackBar.open('Add Money', 'Failed', {
            duration: 4000,
        }));
        // alert("hi")
    }
};
AddMoneyComponent = __decorate([
    Component({
        selector: 'app-add-money',
        templateUrl: './add-money.component.html',
        styleUrls: ['./add-money.component.scss']
    })
], AddMoneyComponent);
export { AddMoneyComponent };
//# sourceMappingURL=add-money.component.js.map