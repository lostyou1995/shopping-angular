import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { UpdateQuantityCartComponent } from './update-quantity-cart/update-quantity-cart.component';
import { PopoverCartComponent } from './popover-cart/popover-cart.component';

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
        PopoverCartComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
