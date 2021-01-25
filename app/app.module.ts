import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { GridAllModule } from "@syncfusion/ej2-angular-grids";

import { AppComponent } from "../app.component";
import { DemoGridComponent } from "../demo-grid.component";

@NgModule({
  declarations: [AppComponent, DemoGridComponent],
  imports: [BrowserModule, CommonModule, GridAllModule],
  bootstrap: [AppComponent],
  entryComponents: [DemoGridComponent]
})
export class AppModule {}
