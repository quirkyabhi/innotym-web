import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.userObj = {};
        this.isHidden = true;
    }
    ngOnInit() {
        this.sharedService.currentData.subscribe(data => {
            if (data == '') {
                this.isHidden = true;
                this.userObj = null;
            }
            else {
                this.isHidden = false;
                this.userObj = data;
            }
        });
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map