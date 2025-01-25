import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { DomainListComponent } from './domain-list/domain-list.component';

export const routes: Routes = [
  { path: '', component: DomainListComponent },  // Handles the root path
  { path: 'domain/:id', component: DomainDetailsComponent },  // Handles dynamic domain paths
  { path: '**', component: DomainListComponent }  // Catches all undefined paths (404 handler)
];


@NgModule({
  declarations: [
    AppComponent,
    DomainListComponent,
    DomainDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
