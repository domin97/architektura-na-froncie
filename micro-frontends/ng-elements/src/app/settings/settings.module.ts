import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from '@angular/elements';

import { SettingsComponent } from "./settings.component";


@NgModule({
  imports: [
    SettingsComponent,
  ],
  exports: [
    SettingsComponent,
  ],
})
export class SettingsModule {
  constructor(injector: Injector) {
    const customSettings = createCustomElement(SettingsComponent, { injector: injector });
    customElements.define('app-settings', customSettings);
  }
}
