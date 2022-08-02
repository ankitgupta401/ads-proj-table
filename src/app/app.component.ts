import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ads-buy';
  loggedIn = false;
  user:any;
  constructor(private commonService: CommonServiceService){
    let locUser:string =localStorage.getItem('user') || '{}'
    this.user = JSON.parse(locUser);
    if(this.user.emailId){
      this.loggedIn =true;
    }

   
  }
  ngOnInit(): void {
   this.commonService.setBlocksInCart(0)
  }

}
