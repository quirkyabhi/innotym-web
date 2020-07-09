import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(fb, userService, _snackBar, sharedService, router) {
        this.fb = fb;
        this.userService = userService;
        this._snackBar = _snackBar;
        this.sharedService = sharedService;
        this.router = router;
    }
    ngOnInit() {
        this.createLoginForm();
        this.createSignupForm();
        // thi
    }
    createSignupForm() {
        this.signupForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            amount: ['', Validators.required],
        });
    }
    createLoginForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    signup() {
        // alert("sigup called")
        this.signupForm.value.role = "user";
        this.userService.createUser(this.signupForm.value).subscribe(data => {
            console.log(data);
            alert("sigup successful");
        }, err => console.log(err));
    }
    login() {
        this.userService.loginUser(this.loginForm.value).subscribe(data => {
            console.log(data);
            this._snackBar.open('Login Successful', 'Success', {
                duration: 4000,
            });
            this.sharedService.updateMessage(data);
            this.router.navigate(['user']);
            console.log(data);
            // alert("login successful")
        }, err => console.log(err));
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map