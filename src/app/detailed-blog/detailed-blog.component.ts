import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailed-blog',
  templateUrl: './detailed-blog.component.html',
  styleUrl: './detailed-blog.component.css'
})
export class DetailedBlogComponent implements OnInit {
  constructor( private route:ActivatedRoute ,private service :ServicesService, private http : HttpClient){

  }
  public id ! :string | null;
  public blog :any;
    ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>(`http://localhost:3000/blogs?id=${this.id}`).subscribe((data)=>{
      this.blog =data[0];
      console.log(this.id)
      console.log(data)
    },(error)=>{
      console.log("Either the block dosent exist or some error occured")
    })
  

  }

}
