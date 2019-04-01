import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HeroService } from '../hero.service';
import { MESSAGE_ERROR } from '../message';

enum Page {
  LOGIN = 1,
  REGISTER = 2,
  FORGOT_PASSWORD = 3
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    message: any;

    isValid: Boolean = true;
    isSuccess: Boolean = false;
    typeMessage: string = "danger";
    pageId: Number = Page.REGISTER;

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
            this.message = MESSAGE_ERROR.REQUIRED;

        } else {
            this.isValid = true;

            var createAccount = {
                username: this.accountGroup.value.username,
                password: this.accountGroup.value.password
            };

            this.heroService.login(createAccount).subscribe((account)=> {
                    console.log(account);
            });
        }
    }

    close() {
        this.isValid = true;
    }

    /**
     * @private
     * @summary Set page id current
     * @function fromPage
     * @param event 
     */
    fromPage(event) {
        this.pageId = event.pageId;
        this.message = event.content;
        this.isSuccess = true;
        this.typeMessage = "success";
    }
}
