import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { FormsComponent } from './forms/forms.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { HooksComponent } from './hooks/hooks.component';
import { RxjsExamplesComponent } from './rxjs-examples/rxjs-examples.component';
import { NgrxExamplesComponent } from './ngrx-examples/ngrx-examples.component';
import { LoggingComponent } from './logging/logging.component';
import { HttpExamplesComponent } from './http-examples/http-examples.component';
import { SignalsComponent } from './signals/signals.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { I18nComponent } from './i18n/i18n.component';
import { PwaExamplesComponent } from './pwa-examples/pwa-examples.component';
import { CachingExamplesComponent } from './caching-examples/caching-examples.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    NavbarComponent,
    FormsComponent,
    DecoratorsComponent,
    DirectivesComponent,
    PipesComponent,
    HooksComponent,
    RxjsExamplesComponent,
    NgrxExamplesComponent,
    LoggingComponent,
    HttpExamplesComponent,
    SignalsComponent,
    ErrorHandlingComponent,
    I18nComponent,
    PwaExamplesComponent,
    CachingExamplesComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop'),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
