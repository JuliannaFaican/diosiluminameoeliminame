import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernotf',
  templateUrl: './usernotf.component.html',
  styleUrls: ['./usernotf.component.css']
})
export class UsernotfComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  regresar(){
    this.nav.navigate([''])
  }

}
