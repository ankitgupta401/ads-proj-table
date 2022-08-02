import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})


export class SelectPageComponent implements OnInit {
 
  layouts:any={
    1: { 0: [[0]]},
    2: {0: [[0,0]] , 1:[[0], [0]]},
    3: {0: [[0,0,0]] , 1:[[0], [0] ,[0]]},
    4: {0: [[0,0,0,0]] , 1:[[0], [0] ,[0] ,[0]], 2: [[0,0],[0,0]]},
    5: {0: [[0,0,0,0,0]] , 1:[[0], [0] ,[0],[0], [0]]},
    6: {0: [[0,0,0,0,0,0]] , 1:[[0], [0] ,[0] ,[0],[0], [0]], 2: [[0,0,0],[0,0,0]], 3: [[0,0],[0,0],[0,0]]},
    7: {0: [[0,0,0,0,0,0,0]] , 1:[[0], [0] ,[0],[0], [0],[0], [0]]},
    8: {0: [[0,0,0,0,0,0,0,0]] , 1:[[0], [0] ,[0] ,[0],[0], [0],[0], [0]], 2: [[0,0],[0,0],[0,0],[0,0]], 3: [[0,0,0,0],[0,0,0,0]]},
    9: {0: [[0,0,0,0,0,0,0,0,0]] , 1:[[0], [0] ,[0],[0], [0],[0], [0],[0], [0]], 2: [[0,0,0],[0,0,0],[0,0,0]]},
    10: {0: [[0,0,0,0,0,0,0,0,0,0]] , 1:[[0], [0],[0], [0] ,[0] ,[0],[0], [0],[0], [0]], 2: [[0,0],[0,0],[0,0],[0,0],[0,0]], 3: [[0,0,0,0,0],[0,0,0,0,0]]},
  }

  mat = [this.layouts[1][0]]

  count=1;
  type = 1;
  index =0;
  constructor(private router:Router, private commonService: CommonServiceService) { }


  ngOnInit(): void {
    // this.commonService.setBlocksInCart(this.count);
  }
  selectBlock(ind:any){
    this.index = ind
    this.commonService.setBlocksInCart(this.count, this.type, this.index);
    this.goToCheckout();
  }
  goToCheckout()
  {
    this.router.navigate(['/cart'])
  }

  onChangeBlocks(noOfBlocks: any){
    this.count=+noOfBlocks;
    if(this.type == 1 && noOfBlocks !== 1){
      this.mat = [this.layouts[noOfBlocks][0]]
    }else if(this.type == 2&& noOfBlocks !== 1){
      this.mat = [this.layouts[noOfBlocks][1]]
    }else {

      this.mat = Object.keys(this.layouts[noOfBlocks]).map(val => this.layouts[noOfBlocks][val]);
     if(noOfBlocks !== 1){
      this.mat.splice(0,2);
     
     }
   
    }
    console.log(this.mat);
  }
  changeLayout(layout:any){
   this.type = layout;
   this.onChangeBlocks(this.count);
  }
}
