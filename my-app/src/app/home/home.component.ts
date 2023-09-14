import { Router, Routes, ParamMap, ActivatedRoute,RouterOutlet,RouterStateSnapshot } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  

  constructor(private router:Router, private auth:AuthService){ }

  ngOnInit(): void {
    
  }

  watchnow() {
    this.router.navigate(['video']);
  }

  part1() {
    this.router.navigate(['part1']);
  }
  part3() {
    this.router.navigate(['part3']);
  }
  
}

