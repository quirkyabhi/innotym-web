import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { AddMoneyComponent } from './component/add-money/add-money.component';
import { DoTransactionComponent } from './component/transaction/do-transaction/do-transaction.component';


const routes: Routes = [
{path:'', redirectTo:'/login',pathMatch:'full'},
{path:'user', component:UserComponent},
{path:'login', component:LoginComponent},
{path:'add-money',component:AddMoneyComponent},
{path:'do-transaction',component:DoTransactionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
