import {NgModule} from '@angular/core';

import {
  MatSlideToggleModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {LayoutModule} from '@angular/cdk/layout';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatButtonModule,
    ObserversModule,
    PlatformModule,
    LayoutModule
  ]
})
export class CustomMaterialModule {}
