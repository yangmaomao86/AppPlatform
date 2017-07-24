import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

@Component({
  selector: 'test01',
  templateUrl: './app.component.html',
  //  template:"<hero-detail></hero-detail>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arr=[1,4,5,7,9,11,8,3,2,4];

  searchControl=new FormControl();

  constructor(){
    this.searchControl.valueChanges.subscribe(val=>{
      console.log(val);
    });
  }
}
