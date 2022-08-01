import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: ElementRef | any;
  @ViewChild('menu') menu: ElementRef | any;
  

  constructor(private router:Router,
              private renderer:Renderer2) { 

//     this.renderer.listen('window', 'click',(e:Event)=>{
//       if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
//         this.onShow=false;
        
//       }console.log(e)
      
//  });
  }
  
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
  goToCart()
  {
    this.router.navigate(['/create-ads'])
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
  }

}
