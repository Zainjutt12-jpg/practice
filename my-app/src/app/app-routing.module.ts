import { NgModule } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute,RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { VideoComponent } from './video/video.component';
import { Part1Component } from './home/part1/part1.component';
import { Part2Component } from './home/part2/part2.component';
import { Part3Component } from './home/part3/part3.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home',
children:[
  {path:'',component:HomeComponent},
  {path:'part1',component:Part1Component},
  {path:'part2',component:Part2Component},
  {path:'part3',component:Part3Component}
]

},
  {path:'movie', component:MovieComponent},
  {path:'video', component:VideoComponent},

  {path:'**', component:LoginComponent},
{path:'part3',component:Part3Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }