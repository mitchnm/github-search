import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GHSdeetsComponent } from './ghsdeets/ghsdeets.component'
import { GhsService } from './ghss/ghs.service';

@NgModule({
  declarations: [
    AppComponent,
    GHSdeetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GhsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
