import { Component , OnInit} from '@angular/core';
import { ViewChild} from '@angular/core';
import {Directive, ElementRef, Renderer} from '@angular/core';
import {ChangeClassService} from '../myServices';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css'],
  providers: [ChangeClassService],
})
export class GirlsComponent implements  OnInit {
  // @ViewChild("girls") girls: ElementRef;
  @ViewChild("boys") boys: ElementRef;
  @ViewChild("boystxt") boystxt: ElementRef;
  @ViewChild("#boys1") boys1: ElementRef;

  localUrl: string;
  constructor(private  changeClass: ChangeClassService) {
    this.localUrl = this.changeClass.getUrl();
    // this.boys.nativeElement.style.backgroundColor='#fff';
  }
  ngOnInit() {
    // this.boystxt.nativeElement.style.color ='#000';
    // this.boys.nativeElement.style.color = '#000';
    // this.boys1.nativeElement.style.color = '#000';
    // this.boys.nativeElement.style.backgroundColor = 'white';
    // this.boys.nativeElement.style.border = '2px solid green';
    console.log(this.boys.nativeElement.style);

    // console.log(this.boys.nativeElement.style.backgroundColor);
    // console.log(this.boys.nativeElement.style.color);
    // }
  }
}
