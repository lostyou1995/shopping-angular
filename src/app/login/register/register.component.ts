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
    @Output() actionClick: EventEmitter<Object> = new EventEmitter<Object>();

    isValid: Boolean = true;
    isValidEmail: Boolean = true;
    isExistUsername: any = false;
    message: String;

    @Input() color: ThemePalette;

    accountCreate = new FormGroup({
        username : new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            this.noWhitespaceValidator
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

    onChangePageClicked(event) {
        this.actionClick.emit(event);
    }

    onSubmit() {
        if (!this.isSamePassword(this.accountCreate.value.password, this.accountCreate.value.repearPwd)) {
            this.isValid = false;
            this.message = MESSAGE_ERROR.PWD_NOT_MATCH;
            return;
        }

        if (!this.accountCreate.controls.email.valid) {
            this.isValidEmail = false;
            this.message = MESSAGE_ERROR.INVALID_EMAIL;
            return;
        }

        if (!this.accountCreate.valid) {
            this.isValid = false;
            this.message = MESSAGE_ERROR.REQUIRED;
            return;
        }

        var addAccount = {
            address: this.accountCreate.value.address,
            email: this.accountCreate.controls.email.value,
            gender: this.accountCreate.value.gender,
            password: this.accountCreate.value.password.trim(),
            username: this.accountCreate.value.username.trim()
        }

        console.log(addAccount);
        this.heroService.registerAccount(addAccount).subscribe((account) => {
            if (account) {
                this.actionClick.emit({content: "Bạn đã đăng ký thành công với tài khoản " + account.username + " vui lòng đăng nhập.", pageId: 1});
            }
        });
  }

    close() {
        this.isValid = true;
    }

    isSamePassword(pwdOld, pwdNew) {
        return pwdOld === pwdNew;
    }

    /**
     * @private
     * @summary Check user is exist on database or not
     * @function checkUsername
     * @param username Username register
     */
    checkUsername(username: string) {
        console.log(username.trim().length);
        if(username.trim().length > 0) {
            this.heroService.isExistUsername(username).subscribe(res => {
                this.isExistUsername = res;
                this.message = MESSAGE_ERROR.USERNAME_EXIST;
            });
        }
    }

    noWhitespaceValidator(control: FormControl) {
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': false };
    }
}
