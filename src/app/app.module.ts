import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { UpdateQuantityCartComponent } from './update-quantity-cart/update-quantity-cart.component';
import { PopoverCartComponent } from './popover-cart/popover-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import {MatButtonModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeaderComponent,
        HeroDetailComponent,
        DashboardComponent,
        FooterComponent,
        SliderImageComponent,
        UpdateQuantityCartComponent,
        PopoverCartComponent,
        LoginComponent,
        RegisterComponent,
        ForgetPasswordComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
