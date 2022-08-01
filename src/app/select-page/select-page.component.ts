import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {
  rows =[0,0,0,0,0,0,0,0,0,0]
  cols =[0,0,0,0,0,0,0,0,0,0]
  mat=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
  count=0;

  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  selectBlock(i:any,j:any){
    if(this.count === 10){
      return
    }
    if(this.mat[i][j]===1)
    {
      this.mat[i][j]=0;
      this.count--;
    }
    else{
      this.mat[i][j]=1;
      this.count++;

    }
    
    
  }
  goToCheckout()
  {
    this.router.navigate(['/cart',this.count])
  }

}
