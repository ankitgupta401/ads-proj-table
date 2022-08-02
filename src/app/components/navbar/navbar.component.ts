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
  user:any ;

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
  
  }
  ngOnDestroy(): void {
    this.blocksSub.unsubscribe();
  }

  login(form:any){
    // let {emailId, password}= form.value;
    let {emailId, password}= form.value
    if( emailId === 'test@gmail.com' && password === '1234'){
      this.loggedId=true;
      this.onShow=false
      this.showInvalidCred = false;
      localStorage.setItem('user', JSON.stringify({emailId, password}))
    }else {
      this.showInvalidCred = true;
    }
    // this.auth.login({...form.value}).subscribe((res:any)=> {
    //   if(res.status){
    //     this.loggedId=true;
    //     this.onShow=false
    //     this.showInvalidCred = false;
    //     this.user= res.data;
    //     localStorage.setItem('user', JSON.stringify(res.data))
    //     localStorage.setItem('token', JSON.stringify(res.data.token))
    //       this.auth.setLoggedIn();
    //   }else {
    //     Swal.fire('An Error Occured',res.message,'error')
    //   }
    // })
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
}
