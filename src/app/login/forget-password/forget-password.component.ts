import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HeroService } from '../../hero.service';
import { MESSAGE_ERROR } from '../../message';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
    @Output() actionClick: EventEmitter<Number> = new EventEmitter<Number>();

    message: any;
    isValid: Boolean = true;

    accountGroup = new FormGroup({
        username : new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.email,
            Validators.required
        ])
    });

    constructor(private _heroService: HeroService) { }

    ngOnInit() {

    }

    onSubmit() {
        if (!this.accountGroup.valid) {
            this.isValid = false;
            this.message = MESSAGE_ERROR.REQUIRED;

        } else {
            this.isValid = true;

        }
    }

    onChangePageClicked(event) {
        this.actionClick.emit(event);
    }
}
