import { HttpClient } from '@angular/common/http';
import { ServicesService } from './../Service/services.service';

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { v4 as uuid} from 'uuid';



@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent implements OnInit{

  constructor(private service :ServicesService){}

  addblog =new FormGroup({
    "id":new FormControl(uuid),
    "title":new FormControl('',Validators.required),
    "author":new FormControl('',Validators.required),
    "content":new FormControl('',Validators.required)
  });
  onSubmit(){
    console.log(this.addblog.value);
    this.service.sendData(this.addblog.value).subscribe((data)=>{
      console.log("Data send Succesfully...");},

      (error)=>{
        console.log("Data dosent sent succesfully...")
      
    })
    
    
  }
  ngOnInit(): void {
    
  }

}
