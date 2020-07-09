import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {
  userDeatils:any={};
  addMoneyForm: FormGroup;
  constructor(private _snackBar: MatSnackBar,private sharedService: SharedService, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data=>{
      this.userDeatils=data;
    });
    this.addMoneyForm=this.fb.group({
      amount:['',Validators.required]
    })
  }
  addMoney(){
    this.userDeatils.amount= parseInt(this.userDeatils.amount+ this.addMoneyForm.value.amount)
    console.log(this.addMoneyForm.value)
    this.userService.updateUser(this.userDeatils).subscribe(data=>{
      console.log("success")
      this.sharedService.updateMessage(data)
      this._snackBar.open('Added Money', 'Success', {
        duration: 4000,
      })
    }, err=> this._snackBar.open('Add Money', 'Failed', {
      duration: 4000,
    }
      ))
    
    // alert("hi")
  }

}
