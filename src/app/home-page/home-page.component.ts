import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  images:any =[]
  rows:any=[];
  loading =false;
  ngOnInit(): void {
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 5,
        wBlocks: 2,
        img: `https://picsum.photos/900/500?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 1,
        wBlocks: 3,
        img: `https://picsum.photos/900/500?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 3,
        wBlocks: 3,
        img: `https://picsum.photos/900/500?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 2,
        wBlocks: 3,
        img: `https://picsum.photos/900/500?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 1,
        wBlocks: 5,
        img: `https://picsum.photos/900/500?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 1,
        wBlocks: 2,
        img: `https://picsum.photos/900/500?random&t=${Math.random()}`
       })
    }
    this.images = this.images
  .map((value:any) => ({ value, sort: Math.random() }))
  .sort((a:any, b:any) => a.sort - b.sort)
  .map(( value: any) => value.value);
    console.log(this.images);

    this.getLeadsNextPage()
  }

  getLeadsNextPage(){
    this.loading =true;
    setTimeout(() => {
      for(let i=0;i<20;i++){
        this.rows.push(i)
      }
      this.loading =false;
    },1500)
  
  }
}
