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
import { MatSidenavModule } from '@angular/material/sidenav';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    NavbarComponent,
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
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop'),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
