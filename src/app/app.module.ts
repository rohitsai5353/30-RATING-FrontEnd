import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AppranComponent} from './app.ran';
import {FormsModule} from  '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,AppranComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }