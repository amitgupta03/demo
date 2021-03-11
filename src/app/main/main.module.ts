import { NgModule } from "@angular/core";
import { RouterModule, ExtraOptions } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FuseSharedModule } from "@fuse/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { CarouselComponent } from "./carousel/carousel.component";
import { AboutComponent } from "./about/about.component";
import { CareerComponent } from "./career/career.component";
import { MainComponent } from "./main.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { EventsComponent } from "./events/events.component";
import { SponsoersComponent } from "./sponsoers/sponsoers.component";
import { MySponsoersComponent } from "./my-sponsoers/my-sponsoers.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonPopUpComponent } from './common-pop-up/common-pop-up.component';
import { MatToolbarModule } from "@angular/material/toolbar";

const routes = [
    {
        path: "home",
        component: CarouselComponent,
    },
    {
        path: "about",
        component: AboutComponent,
    },
    {
        path: "career",
        component: CareerComponent,
    },
    {
        path: "gallery",
        component: GalleryComponent,
    },
    {
        path: "events",
        component: EventsComponent,
    },
    {
        path: "sponsoers",
        component: SponsoersComponent,
    },
    {
        path: "sponsoerMe",
        component: MySponsoersComponent,
    },
    {
        path: "contact",
        component: ContactUsComponent,
    },
];



  
@NgModule({
    declarations: [
        MainComponent,
        CareerComponent,
        CarouselComponent,
        AboutComponent,
        GalleryComponent,
        EventsComponent,
        SponsoersComponent,
        MySponsoersComponent,
        ContactUsComponent,
        FooterComponent,
        CommonPopUpComponent,
        
        
    ],
    imports: [
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        TranslateModule,
        MatSnackBarModule,
        FuseSharedModule,
        MatToolbarModule,
        
    ],
    exports: [CareerComponent, CarouselComponent, AboutComponent],
})
export class MainModule {}
