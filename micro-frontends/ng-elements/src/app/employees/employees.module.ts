import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from '@angular/elements';

import { EmployeesComponent } from "./employees.component";


@NgModule({
  imports: [
    EmployeesComponent,
  ],
  exports: [
    EmployeesComponent,
  ],
})
export class EmployeesModule {
  constructor(injector: Injector) {
    const customEmployees = createCustomElement(EmployeesComponent, { injector: injector });
    customElements.define('app-employees', customEmployees);
  }
}
