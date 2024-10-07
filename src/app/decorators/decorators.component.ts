import { Component, Directive, ElementRef, HostListener, Inject, Injectable, Input, Output, Pipe, PipeTransform, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.scss'
})
@Logging
export class DecoratorsComponent {

  test:string = "TEST";
  constructor(@Inject(DecorService) service: DecorService){
    service.log();
    console.log(DecoratorsComponent.name+" is loaded..")
  }
  // @Input() ip:any;
  // @Output() op:any;
  // @ViewChild('vc') vc:any;
  // @ViewChildren('vcs') vcs:any;

  // @HostListener('click',['$event'])
  // onHostClick(event:Event){

  // }
  

  
}

@Directive({
  selector:'[appHighlight]'
})
export class CustomHighlightDirective{
  constructor(el: ElementRef, renderer: Renderer2) { 
    renderer.setStyle(el.nativeElement, 'background-color', '#005ccb'); 
    renderer.setStyle(el.nativeElement, 'color', 'white'); 
  } 
}


@Injectable({
  providedIn:'root'
})
export class DecorService{

  log(){
    console.log(`Decor service called from Decor component!!`);
  }
}

export function Logging(target:any){
  console.log(`console from custom decorator ${target.name}`);
}

@Pipe({
  name:'customLowercase'
})
export class CustomLowerCasePipe implements PipeTransform{
  transform(value: string, ...args: any[]) {
    return value.toString().toLowerCase();
  }
  
}

