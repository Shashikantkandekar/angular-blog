import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddpostComponent } from './addpost/addpost.component';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'addpost',component:AddpostComponent},
  {path:'home',component:HomeComponent },
  {path:'home/blogs/:id',component:DetailedBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
