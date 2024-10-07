import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { CachingExamplesComponent } from './caching-examples/caching-examples.component';
import { PwaExamplesComponent } from './pwa-examples/pwa-examples.component';
import { I18nComponent } from './i18n/i18n.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { SignalsComponent } from './signals/signals.component';
import { HttpExamplesComponent } from './http-examples/http-examples.component';
import { LoggingComponent } from './logging/logging.component';
import { NgrxExamplesComponent } from './ngrx-examples/ngrx-examples.component';
import { RxjsExamplesComponent } from './rxjs-examples/rxjs-examples.component';
import { HooksComponent } from './hooks/hooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { DecoratorsComponent } from './decorators/decorators.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'decorators',loadChildren:()=> import("./decorators/decorators.module").then(m=>m.DecoratorsModule)},
  {path:'directives',component:DirectivesComponent},
  {path:'pipes',component:PipesComponent},
  {path:'hooks',component:HooksComponent},
  {path:'rxjs',component:RxjsExamplesComponent},
  {path:'ngrx',component:NgrxExamplesComponent},
  {path:'logging',component:LoggingComponent},
  {path:'http',component:HttpExamplesComponent},
  {path:'signals',component:SignalsComponent},
  {path:'error-handling',component:ErrorHandlingComponent},
  {path:'i18n',component:I18nComponent},
  {path:'pwa',component:PwaExamplesComponent},
  {path:'caching',component:CachingExamplesComponent},
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormExampleModule) },
  {path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
