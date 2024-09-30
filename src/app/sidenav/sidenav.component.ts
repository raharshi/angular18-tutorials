import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  topics = [
    'Forms & Data-Binding',
    'Decorators',
    'Directives',
    'Pipes',
    'Hooks',
    'Rxjs',
    'Ngrx',
    'Logging',
    'HTTP',
    'Signals',
    'Error Handling',
    'i18n',
    'Service Worker',
    'Caching'
  ];
}
