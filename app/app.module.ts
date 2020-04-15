import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';

import { FlexLayoutSampleComponent } from './flexLayoutSample.component';

@NgModule({
  imports:      [ 
    CommonModule,
    BrowserModule, 
    BrowserAnimationsModule,  
    FlexLayoutModule, 
    CustomMaterialModule 
    ],
  declarations: [ AppComponent, FlexLayoutSampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
