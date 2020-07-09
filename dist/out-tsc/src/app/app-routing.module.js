import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { AddMoneyComponent } from './component/add-money/add-money.component';
import { DoTransactionComponent } from './component/transaction/do-transaction/do-transaction.component';
const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add-money', component: AddMoneyComponent },
    { path: 'do-transaction', component: DoTransactionComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map