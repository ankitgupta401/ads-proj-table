import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { 
    
  }
  typeOfBlock= new BehaviorSubject<number>(0);
  blocksInCart= new BehaviorSubject<number>(0);
  index= new BehaviorSubject<number>(0);



  getBlocksInCart(){
    return this.blocksInCart.asObservable()
  }
  getIndexCart(){
    return this.index.asObservable()
  }
  getTypeCart(){
    return this.typeOfBlock.asObservable()
  }
  setBlocksInCart(num:number, type: number, index:number){
    this.blocksInCart.next(num)
    this.typeOfBlock.next(type)
    this.typeOfBlock.next(index)
  }
  getBlocksInCartValue(){
    return this.blocksInCart.getValue();
  }
}
