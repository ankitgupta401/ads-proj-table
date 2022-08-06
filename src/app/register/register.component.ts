import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  register(form:any){
    this.auth.register({...form.value}).subscribe((res:any)=> {
      if(res.email){
          localStorage.setItem('user', JSON.stringify(res))
          // localStorage.setItem('token', JSON.stringify(res.data.token))
          this.auth.setLoggedIn();
          this.router.navigate(['/create-ads'])
      }else {
        Swal.fire('An Error Occured',res.message,'error')
      }
    })
  }

  gotoLogin(){
    this.router.navigate(['/login'])
  }
}
