import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef
} from "@angular/core";

import { DemoGridComponent } from "./demo-grid.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  private counter = 1;
  private demoGrids: ComponentRef<DemoGridComponent>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  onAddGrid() {
    const gridNumber = this.counter++;
    console.log("adding grid", gridNumber);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      DemoGridComponent
    );

    const componentRef = this.viewContainerRef.createComponent<
      DemoGridComponent
    >(componentFactory);

    componentRef.instance.gridNumber = gridNumber;

    this.demoGrids.push(componentRef);
  }

  onRemoveGrid() {
    const demoGrid = this.demoGrids[0];
    if (demoGrid == null) {
      console.log("No grid to remove");
      return;
    }
    console.log("removing grid", demoGrid.instance.gridNumber);

    this.viewContainerRef.remove(0);
    this.demoGrids.splice(0, 1);
  }
}
