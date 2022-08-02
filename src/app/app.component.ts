import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
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
  constructor(private commonService: CommonServiceService, private auth:AuthService){
    let locUser:string =localStorage.getItem('user') || '{}'
    this.user = JSON.parse(locUser);
    if(this.user.emailId){
      this.loggedIn =true;
    }
    this.auth.loggedInSubscription().subscribe((res:any) => {
      this.loggedIn = res;
    })

   
  }
  ngOnInit(): void {
  //  this.commonService.setBlocksInCart(0)
  }

}
