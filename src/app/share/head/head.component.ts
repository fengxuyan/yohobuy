import { Component} from '@angular/core';
import {Directive, ElementRef, Renderer} from '@angular/core';
import {ChangeClassService} from '../../myServices';
import { ViewChild} from '@angular/core';
// import {ChildenComponent} from './childen/childen.component'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: [ChangeClassService],
})
export class HeadComponent  {
  localUrl: string;

  @ViewChild("girls") girls: ElementRef;
  @ViewChild("boys") boys: ElementRef;
  constructor(private  changeClass: ChangeClassService ){
    this.localUrl = this.changeClass.getUrl();
  }
  changeColor(elf: ElementRef , renderer: Renderer){
    this.girls.nativeElement.style.backgroundColor= '#ff88ae';
    console.log(this.boys.nativeElement.style.color);
  }
  changeColorboys(elf: ElementRef , renderer: Renderer){
    this.boys.nativeElement.style.backgroundColor=  this.localUrl;
    this.girls.nativeElement.style.backgroundColor='#fff';
    this.girls.nativeElement.style.color='#000';
  }

}
