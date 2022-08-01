import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  loggedId=false;
  onShow=false;
  ngOnInit(): void {
  }

  login(form:any){
    let {emailId, password}= form.value
    if( emailId === 'test@gmail.com' && password === '1234'){
      this.loggedId=true;
    }
  }
  toggleShow(){
    this.onShow =!this.onShow
  }

}
