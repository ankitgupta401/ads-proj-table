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

  constructor(private auth:AuthService, ) { }

  ngOnInit(): void {
  }

  register(form:any){
    this.auth.register({...form.value}).subscribe((res:any)=> {
      if(res.status){
          localStorage.setItem('user', JSON.stringify(res.data))
          localStorage.setItem('token', JSON.stringify(res.data.token))
          this.auth.setLoggedIn();
      }else {
        Swal.fire('An Error Occured',res.message,'error')
      }
    })
  }
}
