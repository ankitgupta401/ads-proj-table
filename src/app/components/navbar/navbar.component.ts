import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('toggleButton') toggleButton: ElementRef | any;
  @ViewChild('menu') menu: ElementRef | any;

  @Input() loggedId: any=false;

  constructor(private router:Router,
              private renderer:Renderer2, private commonService:CommonServiceService) { 

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
    let {emailId, password}= form.value
    if( emailId === 'test@gmail.com' && password === '1234'){
      this.loggedId=true;
      this.onShow=false
      this.showInvalidCred = false;
      localStorage.setItem('user', JSON.stringify({emailId, password}))
    }else {
      this.showInvalidCred = true;
    }
  }
  toggleShow(){
    this.onShow =!this.onShow
  }
  goToCart()
  {
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

}
