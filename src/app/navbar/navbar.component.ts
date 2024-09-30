import { Component , Input, Output,EventEmitter} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() toggle:MatDrawer | undefined;
  @Input() title:string="";

  toggleMenu(){
    this.toggle?.toggle();
  }
}
