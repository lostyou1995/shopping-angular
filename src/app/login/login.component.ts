import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  account: any;
  isValid: Boolean = true;;
  accountGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor( private heroService: HeroService) { }

  ngOnInit() {

  }

  onSubmit() {
    if (!this.accountGroup.valid) {
      this.isValid = false;
      this.message = "Vui lòng nhập đủ thông tin.";
    } else {
      this.isValid = true;

      this.account = {
        username: this.accountGroup.value.username,
        password: this.accountGroup.value.password
      };

      this.heroService.login(this.account).subscribe((account)=> {
        console.log(account);
      });
    }
  }

  close() {
    this.isValid = true;
  }

}
