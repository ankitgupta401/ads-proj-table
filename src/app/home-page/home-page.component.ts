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
  allArr:any=[]
  loading =false;
  ngOnInit(): void {
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 5,
        wBlocks: 2,
        img: `https://picsum.photos/500/200?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 1,
        wBlocks: 3,
        img: `https://picsum.photos/100/300?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<400;i++){
      
      this.images.push( {
        hBlocks: 3,
        wBlocks: 3,
        img: `https://picsum.photos/300/300?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 2,
        wBlocks: 3,
        img: `https://picsum.photos/200/300?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 1,
        wBlocks: 5,
        img: `https://picsum.photos/100/500?random&t=${Math.random()}`
       })
    }
    for(let i=0;i<40;i++){
      
      this.images.push( {
        hBlocks: 1,
        wBlocks: 2,
        img: `https://picsum.photos/100/200?random&t=${Math.random()}`
       })
    }
   
    console.log(this.images);
 
    // this.shuffleImage();
    this.allArr = [];
    this.getLeadsNextPage()
  }

  shuffleImage(){
    this.images = this.images
    .map((value:any) => ({ value, sort: Math.random() }))
    .sort((a:any, b:any) => a.sort - b.sort)
    .map(( value: any) => value.value);
  }

  getLeadsNextPage(){
    this.loading =true;
    setTimeout(() => {
      
      let len =0;
      let tempArr =[];
      this.shuffleImage();
      let currRowSpan = 20
      let nextRowData =[]

      for(let i=0;i<this.images.length;i++){
   
        if((len+ this.images[i].wBlocks) > currRowSpan){
          let rem = currRowSpan - len;
          if(rem > 0){
            tempArr.push({
              hBlocks: 1,
              wBlocks: rem,
              // img: `https://picsum.photos/100/${rem}?random&t=${Math.random()}`
            });
          }
      
          this.allArr.push(tempArr);
          tempArr= [];
          let total = 0;
       
       
          let indexToRemove =[];
          for(let i=0;i<nextRowData.length;i++){
            if(nextRowData[i].hBlocks > 0){
              total += nextRowData[i].wBlocks;
              nextRowData[i].hBlocks--;
              }else {
                indexToRemove.push(i);
              }
          }
          for (let i = indexToRemove.length -1; i >= 0; i--){
  
            nextRowData.splice(indexToRemove[i],1);
          }
          currRowSpan = 20 - total;
          len =0
        }else {


          tempArr.push(this.images[i]);
          // currRowSpan = currRowSpan - (this.images[i].wBlocks);
          len += this.images[i].wBlocks;
          console.log(this.images[i].hBlocks > 1)
          if(this.images[i].hBlocks > 1){
            nextRowData.push({...this.images[i], hBlocks: this.images[i].hBlocks - 1});
          }
         
        }
      }
      console.log(this.allArr);
      this.loading =false;
    },1500)
  
  }

  stringify(obj:any){
    return JSON.stringify(obj)
  }



}
