import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { GridAllModule } from "@syncfusion/ej2-angular-grids";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { View1Component } from "./view1.component";
import { View2Component } from "./view2.component";

@NgModule({
  declarations: [AppComponent, View1Component, View2Component],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    GridAllModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
