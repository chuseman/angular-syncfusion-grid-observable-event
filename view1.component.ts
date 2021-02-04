import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";

import { GridComponent } from "@syncfusion/ej2-angular-grids";

import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { GridHelpers, Sport } from "./grid-helpers";

@Component({
  selector: "app-view1",
  templateUrl: "view1.component.html"
})
export class View1Component implements OnInit, AfterViewInit, OnDestroy {
  private subscription = new Subscription();

  sports = GridHelpers.sports;

  @ViewChild("grid") grid: GridComponent;

  ngOnInit(): void {
    console.log("View1Component - ngOnInit");
  }

  ngAfterViewInit(): void {
    console.log("View1Component - ngAfterViewInit");
    this.subscription.add(
      GridHelpers.getSelectedRowObservable<Sport>(this.grid)
        .pipe(debounceTime(100))
        .subscribe({
          next: sport => {
            console.log("View1Component - selected sport", sport);
          }
        })
    );
  }

  ngOnDestroy(): void {
    console.log("View1Component - ngOnDestroy");
    this.subscription.unsubscribe();
  }
}
