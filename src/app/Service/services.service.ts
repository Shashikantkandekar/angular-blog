import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/blogs'
  sendData(data:any){

    return this.http.post<any>(this.url,data)
  }
  getData(){
    return this.http.get(this.url);
  }
  getDataById(id:any){
    return this.http.get('http://localhost:3000/blogs?id=${id}');
  }
}
