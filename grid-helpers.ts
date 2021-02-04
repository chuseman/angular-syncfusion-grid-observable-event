import {
  GridComponent,
  RowDeselectEventArgs,
  RowSelectEventArgs
} from "@syncfusion/ej2-angular-grids";

import { fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators";

export class GridHelpers {
  static sports: Sport[] = [
    { id: 1, name: "Badminton" },
    { id: 2, name: "Cricket" },
    { id: 3, name: "Football" },
    { id: 4, name: "Golf" },
    { id: 5, name: "Tennis" }
  ];

  static getSelectedRowObservable<T>(grid: GridComponent): Observable<T> {
    return merge(
      fromEvent<RowSelectEventArgs>(grid, "rowSelected").pipe(
        map(event => event.data as T)
      ),
      fromEvent<RowDeselectEventArgs>(grid, "rowDeselected").pipe(
        map(() => <T>null)
      )
    );
  }
}

export interface Sport {
  id: number;
  name: string;
}
