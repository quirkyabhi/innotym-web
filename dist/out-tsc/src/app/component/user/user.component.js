import { __decorate } from "tslib";
import { Component } from '@angular/core';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   // No:Number;
//   // Name: String;
//   // Age:Number;
//   // Salary:Number; 
//   // Role: String;
//   // Gender: String;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
let UserComponent = class UserComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.dataSource = [];
        // columns = ["No","Name","Age", "Salary", "Role", "Gender"];
        this.displayedColumns = ["_id", "no", "name", "age", "salary", "role", "gender"];
    }
    ngOnInit() {
        this.getUserList();
    }
    getUserList() {
        this._userService.getUsers().subscribe(res => {
            this.userList = res;
            console.log(this.userList);
            this.dataSource = this.userList;
        });
    }
};
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map