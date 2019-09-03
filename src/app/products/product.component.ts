import { Component, OnInit } from '@angular/core';
import {Iproduct} from './product.model';
import {ProductService} from './product.service';
@Component({

    selector: 'app-prod',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css'],
    styles:[
        `.online{
            background-color:gray
        }`
    ]
})

export class ProductComponent implements OnInit{
    title: String ='Products List';

    showTable: boolean=true;

    showImage:boolean=false;

    userText:string;

    imageWidth:number=100;
    serverStatus:String='Offline';
    constructor(private productService:ProductService){
        this.serverStatus=Math.random() >0.5 ? 'Online':'Offline'
    }


   product: Iproduct[]=[
        
   ];
   ngOnInit():void{
       this.productService.getProduct()
       .subscribe((data) => this.product=data);
   }
    
    getColor(){
        return this.serverStatus==='Online' ? 'green':'red'
    }
    toggleImage(): void{
        this.showImage=!this.showImage;
    }
}