import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RoutingSheetComponent } from './layout/routing-sheet/routing-sheet.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { RoutingSheetDetailComponent } from './layout/routing-sheet-detail/routing-sheet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutingSheetComponent,
    NotFoundPageComponent,
    ContactsComponent,
    RoutingSheetDetailComponent
],
  imports: [
    BrowserModule,
    MdlModule,
    RouterModule.forRoot([
      { path: '', component: RoutingSheetComponent },
      { path: 'routingsheet', component: RoutingSheetComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'routingsheet/:id', component: RoutingSheetDetailComponent},
      { path: 'page-not-found', component: NotFoundPageComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
