import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  constructor(private getblogService:ServicesService){

  }
  items !:any
  ngOnInit(): void {
    this.getblogService.getData().subscribe((data)=>{
      this.items=data;
      console.log(this.items)
    },
    (error)=>{
      console.log("error occurs")
    }
  )
  }

}
