import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { GridAllModule } from "@syncfusion/ej2-angular-grids";

import { AppComponent } from "./app.component";
import { View1Component } from "./view1.component";
import { View2Component } from "./view2.component";

@NgModule({
  declarations: [AppComponent, View1Component, View2Component],
  imports: [BrowserModule, CommonModule, GridAllModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
