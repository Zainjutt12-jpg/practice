import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router, private auth:AuthService){}

  ngOnInit(): void {
    
  }

  goHome(){
 this.router.navigate(['home']);
  }

  logout(){
    this.auth.logout();
  }
}


