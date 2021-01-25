import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";

import {
  BehaviorSubject,
  fromEvent,
  merge,
  Observable,
  Subscription
} from "rxjs";

import {
  GridComponent,
  RowDeselectEventArgs,
  RowSelectEventArgs
} from "@syncfusion/ej2-angular-grids";
import { debounceTime, map } from "rxjs/operators";

@Component({
  selector: "app-demo-grid",
  templateUrl: "demo-grid.component.html"
})
export class DemoGridComponent implements OnInit, AfterViewInit, OnDestroy {
  private selectedSportSubject = new BehaviorSubject<Sport>(null);
  private subscription = new Subscription();

  sports: Sport[] = [
    { id: 1, name: "Badminton" },
    { id: 2, name: "Cricket" },
    { id: 3, name: "Football" },
    { id: 4, name: "Golf" },
    { id: 5, name: "Tennis" }
  ];

  selectedSport$ = this.selectedSportSubject.asObservable();

  @Input() gridNumber: number;

  @ViewChild("grid") grid: GridComponent;

  constructor() {}

  ngOnInit(): void {
    console.log("DemoGridComponent - ngOnInit");
  }

  ngAfterViewInit(): void {
    console.log("DemoGridComponent - ngAfterViewInit");
    this.subscription.add(
      getSelectedRowObservable<Sport>(this.grid)
        .pipe(debounceTime(100))
        .subscribe({
          next: sport => {
            console.log("selected sport", sport);
            this.selectedSportSubject.next(sport);
          }
        })
    );
  }

  ngOnDestroy(): void {
    console.log("DemoGridComponent - ngOnDestroy");
    this.subscription.unsubscribe();
  }
}

interface Sport {
  id: number;
  name: string;
}

function getSelectedRowObservable<T>(grid: GridComponent): Observable<T> {
  return merge(
    fromEvent<RowSelectEventArgs>(grid, "rowSelected").pipe(
      map(event => event.data as T)
    ),
    fromEvent<RowDeselectEventArgs>(grid, "rowDeselected").pipe(
      map(() => <T>null)
    )
  );
}
