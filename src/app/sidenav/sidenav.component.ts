import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  
  constructor(){
    console.log(SidenavComponent.name+" is loaded..")
  }
  
  topics = [
    {path:'forms',name:'Forms & Data-Binding'},
    {path:'decorators',name:'Decorators'},
    {path:'directives',name:'Directives'},
    {path:'pipes',name:'Pipes'},
    {path:'hooks',name:'Hooks'},
    {path:'rxjs',name:'Rxjs'},
    {path:'ngrx',name:'Ngrx'},
    {path:'logging',name:'Logging'},
    {path:'http',name:'HTTP'},
    {path:'signals',name:'Signals'},
    {path:'error-handling',name:'Error Handling'},
    {path:'i18n',name:'i18n'},
    {path:'pwa',name:'Service Worker'},
    {path:'caching',name:'Caching'},
  ];

  @Input() toggle:MatDrawer | undefined;

  toggleMenu(){
    this.toggle?.toggle();
  }
}
