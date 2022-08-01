import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router:Router) { }

  blocks:any

  ngOnInit(): void {

    this.route.params.subscribe((param:any)=>{
     this.blocks= +param.count
    })
  }
  checkout(form:any){
    Swal.fire('Purchase Complete','Thank you for your purchase','success').then(()=>
      {
         this.router.navigate(['/'])
      })
    
  }

}
