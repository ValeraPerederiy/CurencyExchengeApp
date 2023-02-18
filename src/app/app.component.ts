import { Component, OnInit } from '@angular/core';
import { DataBaseService, apiResponce } from './share/data-base.service';

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
    this.dataBase.getCurency('USD', 'UAH').subscribe((res:apiResponce)=>{
      this.usdCurency = res.conversion_rate;
    })
    this.dataBase.getCurency('EUR', 'UAH').subscribe((res:apiResponce)=>{
      this.eurCurency = res.conversion_rate;
   })
  }
}
