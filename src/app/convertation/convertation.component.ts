import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataBaseService } from '../share/data-base.service';

@Component({
  selector: 'app-convertation',
  templateUrl: './convertation.component.html',
  styleUrls: ['./convertation.component.scss']
})
export class ConvertationComponent {

  public convertForm:FormGroup;
  public value1:string = 'UAH'
  public value2:string = 'USD'
  constructor(public dataBase:DataBaseService) {
    this.convertForm = new FormGroup({
      'givedCurency':new FormControl(''),
      'receivedCurency':new FormControl('')
    })
   }

  public calculateReceivedCurency():void{
    this.dataBase.getCurency(this.value1, this.value2).subscribe(res=>{
      this.convertForm.patchValue({ receivedCurency: this.convertForm.value.givedCurency * res.conversion_rate})
    })
  }

  public calculateGivedCurency():void{
    this.dataBase.getCurency(this.value2, this.value1).subscribe(res=>{
      this.convertForm.patchValue({ givedCurency: this.convertForm.value.receivedCurency * res.conversion_rate})
    })
  }

  public changeValue1($event:any):void{
    this.value1 = $event.target.value;
    this.calculateReceivedCurency();
    
  }

  public changeValue2($event:any):void{
    this.value2 = $event.target.value;
    this.calculateReceivedCurency();
  }
}
