import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }
  showInvalidCred=false;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }

  login(form:any){
    // let {emailId, password}= form.value;
    let {emailId, password}= form.value
    console.log(form.value)
    if( emailId === 'test@gmail.com' && password === '1234'){

      localStorage.setItem('user', JSON.stringify({emailId, password}))
      this.auth.loggedIn.next(true);
      this.router.navigate(['/'])
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



  gotoRegister(){
    this.router.navigate(['/register'])
  }
}
