import { Component , OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params , CanActivate} from '@angular/router';

@Component({
  selector: 'my-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit{
  localUrl : string;
  tab_class:string;
  constructor(private activatedRoute: ActivatedRoute) {}
  getParams(): void {
    // 获取路由参数
    // http://localhost:4201/post?id=12&name=zhangsan
    // this.activatedRoute.params
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // let userId = params['userId'];
      console.log(params);
    });
  }
  isContains(str, substr): any {
    return str.indexOf(substr) >= 0;
  }
  getUrl(): any {
    if(this.isContains(location.href,'boys')){
      this.tab_class ='blue';
    }else if(this.isContains(location.href,'girls')){
      this.tab_class ='girls';
    }else if(this.isContains(location.href,'kids')){
      this.tab_class ='kids';
    }else if(this.isContains(location.href,'lifestyle')){
      this.tab_class ='lifestyle';
    }else if(this.isContains(location.href,'index')){
      this.tab_class ='orange';
    }
    else if(this.isContains(location.href,'login')){
      this.tab_class ='yellow';
    }
    return this.tab_class;
  }
  ngOnInit(){
    this.getParams();
    this.localUrl =  this.getUrl();
  }
}
