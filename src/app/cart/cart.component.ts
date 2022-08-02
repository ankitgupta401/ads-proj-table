import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'
import { CommonServiceService } from '../common-service.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {

  constructor(private route:ActivatedRoute,
              private router:Router, private commonService: CommonServiceService) { }


  blocks:any =0;
  blocksSub:any;
  ngOnInit(): void {

    this.blocksSub = this.commonService.getBlocksInCart().subscribe(val => {
      if(! isNaN(+val)){
        this.blocks =val;
      }
      console.log(val);
  
    })
  }

  ngOnDestroy(): void {
    this.blocksSub.unsubscribe()
  }
  checkout(form:any){
    Swal.fire('Purchase Complete','Thank you for your purchase','success').then(()=>
      {
        this.commonService.setBlocksInCart(0,0,0);
         this.router.navigate(['/'])
      })
    
  }

}
