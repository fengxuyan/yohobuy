import { Component , OnInit} from '@angular/core';
import { ViewChild} from '@angular/core';
import {Directive, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'app-boys',
  templateUrl: './boys.component.html',
  styleUrls: ['./boys.component.css']
})
export class BoysComponent implements OnInit{
  @ViewChild("girls") girls: ElementRef;
  // @ViewChild("boys") boys: ElementRef;
  constructor() {
    //
  }
ngOnInit(){
  console.log(this.girls);
  // this.girls.nativeElement.style.backgroundColor='#fff';
  // this.girls.nativeElement.style.color='#000';
}
}
