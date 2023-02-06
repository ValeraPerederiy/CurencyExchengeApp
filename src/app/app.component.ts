import { Component, OnInit } from '@angular/core';
import { DataBaseService, curencyToUah } from './share/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public usdCurency:number = 0;
  public eurCurency:number = 0;
  constructor(public dataBase:DataBaseService){}

  ngOnInit(){
    this.dataBase.getCurency('USD', 'UAH').subscribe(res=>{
      this.usdCurency = res.conversion_rate;
    })
    this.dataBase.getCurency('EUR', 'UAH').subscribe(res=>{
      this.eurCurency = res.conversion_rate;
   })
  }
}
