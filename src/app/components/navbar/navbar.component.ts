import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { CommonServiceService } from 'src/app/common-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('toggleButton') toggleButton: ElementRef | any;
  @ViewChild('menu') menu: ElementRef | any;

  @Input() loggedId: any=false;
  @Input() user:any;

  constructor(private router:Router,
              private renderer:Renderer2, private commonService:CommonServiceService, private auth: AuthService) { 

//     this.renderer.listen('window', 'click',(e:Event)=>{
//       if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
//         this.onShow=false;
        
//       }console.log(e)
      
//  });
  }
 

  

  onShow=false;
  showInvalidCred =false
  blocksSub:any ;
  count=0;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.blocksSub = this.commonService.getBlocksInCart().subscribe(val => {
      if(! isNaN(+val)){
        this.count  =val;
      }
      // console.log(this.blocksSub);
    })
    this.count= this.commonService.getBlocksInCartValue();
  
    this.auth.loggedInSubscription().subscribe((res:any) => {
      this.loggedId = res;
      let locUser:string =localStorage.getItem('user') || '{}'
      this.user = JSON.parse(locUser);

    })
    if(this.user.email){
      this.loggedId =true;
    }

  }
  ngOnDestroy(): void {
    this.blocksSub.unsubscribe();
  }

  toggleShow(){
    this.onShow =!this.onShow
  }
  goToCart()
  {
    // if(!this.loggedId){
    //   this.toggleShow()
    //   return;
    // }
    if(this.count > 0){
      this.router.navigate(['/cart'])
    }else {

      this.router.navigate(['/create-ads'])
    }
    
  }
  goToHome()
  {
    this.router.navigate(['/'])
  }
  goToAds()
  {
    this.router.navigate(['/create-ads'])
    this.onShow=false;
  }
  onSignOut()
  {
    this.loggedId=false
    this.onShow=false
    localStorage.clear();
  }

  gotoRegister(){
    this.router.navigate(['/register'])
    this.onShow=false
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }
}
