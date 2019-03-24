import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MESSAGE_ERROR } from '../../message';
import { ThemePalette  } from '@angular/material';
import { HeroService } from "../../hero.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() loginClick: EventEmitter<Number> = new EventEmitter<Number>();
  isValid: Boolean = true;
  message: String;
  @Input() color: ThemePalette;
  accountCreate = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    repearPwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    address: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ])
  });

  constructor(private heroService: HeroService) { }

  ngOnInit() {

  }
  
  onLoginClicked() {
    this.loginClick.emit(1);
  }

  onSubmit() {
    console.log(this.accountCreate.value);
    if (!this.accountCreate.valid) { 
      this.isValid = false;
      this.message = MESSAGE_ERROR.REQUIRED;
      return;
    }

    if (!this.isSamePassword(this.accountCreate.value.password, this.accountCreate.value.repearPwd)) {
      this.isValid = false;
      this.message = MESSAGE_ERROR.PWD_NOT_MATCH;
      return;
    }

    this.heroService.registerAccount(this.accountCreate.value).subscribe((account)=>{
      console.log(account);
    });
  }

  close() {
    this.isValid = true;
  }

  isSamePassword(pwdOld, pwdNew) {
    return pwdOld === pwdNew;
  }

  // onChange(mrChange: MatRadioButton) {
  //   console.log(mrChange.value);
  // }
}
