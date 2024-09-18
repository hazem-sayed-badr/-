import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
interface Item{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css',
  // animations:[
  //   trigger('animation',[
  //   transition('void=>visible',[
  //     style({transform:'scale(0.5'}),
  //     animate('150ms',style({transform:'scale(1)'}))
  //   ]),
  //   transition('visible=>void',[
  //     style({transform:'scale(1'}),
  //     animate('150ms',style({transform:'scale(0.5)'}))
  //   ]),
  //   ])
  // ]
})
export class LightboxComponent implements OnInit{
  @Input() galleryData:Item[]=[];
  @Input() showcount;
  previewImage=false;
  showmask=false;
  currentlightboximage:Item=this.galleryData[0];
  curentindex=0;
  controlls=true;
  totalimagecount=0;

  ngOnInit(): void {
    this.totalimagecount=this.galleryData.length;
  }

  onPreviewImage(index:number){
    this.showmask=true;
    this.previewImage=true;
    // this.showcount=true;
    // this.controlls=true;
    this.curentindex=index;
    this.currentlightboximage=this.galleryData[index];

  console.log(this.curentindex)
  console.log("/");
  console.log(this.totalimagecount);
  }

  onnext(){
    this.curentindex++;
    if(this.curentindex>this.galleryData.length-1){

           this.curentindex=0;
    }
    this.currentlightboximage=this.galleryData[this.curentindex];
  }
  onprev(){
    this.curentindex--;
    if(this.curentindex<0){

      this.curentindex=this.galleryData.length-1;
}
    this.currentlightboximage=this.galleryData[this.curentindex];
  }
  // onAnimationEnd(event:AnimationEvent){
  //   if(event.toState==='void'){
  //     this.showmask=false;
  //   }
  // }
  onclose(){
    this.showmask=false;
  }
}
