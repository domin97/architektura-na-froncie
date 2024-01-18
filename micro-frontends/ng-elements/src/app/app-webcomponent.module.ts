import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EmployeesModule } from './employees/employees.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    SettingsModule,
    EmployeesModule,
  ],
  providers: [],
})
export class AppModule {
  ngDoBootstrap(): void {
  }
}
