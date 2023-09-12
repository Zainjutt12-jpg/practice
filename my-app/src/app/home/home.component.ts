import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import countries from './countries.json';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public countryList:{name:string, code:string, movie:string}[] = countries;
  

  constructor(private router:Router, private auth:AuthService){ }

  ngOnInit(): void {
    
  }

  watchnow() {
    this.router.navigate(['video']);
  }


  
}
