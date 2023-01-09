import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  iniciarsesion(){
    this.nav.navigate(['home']);
  }
  sesionincorrecta(){
    this.nav.navigate(['usernotfoundweb'])
  }

}
