import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { 
    
  }

  blocksInCart= new BehaviorSubject<number>(0);


  getBlocksInCart(){
    return this.blocksInCart.asObservable()
  }
  setBlocksInCart(num:number){
    this.blocksInCart.next(num)
  }
  getBlocksInCartValue(){
    return this.blocksInCart.getValue();
  }
}
