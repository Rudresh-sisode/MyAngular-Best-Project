import {Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector:'app-start',
    templateUrl:'./start.component.html',
    styleUrls:['./start.component.css']
})
export class StartComponent implements OnInit,OnChanges,OnDestroy {
    @Input() rating:number;
    

    startWidth:number
    constructor(){
        console.log("this is constructor");
    }

    ngOnInit(){
        console.log("this is ONInit");
    }

    ngOnChanges(){
        this.startWidth=this.rating*86/5;
        console.log("this is Onchanges");
    }

    ngOnDestroy(){
        console.log("this is Destroy");
    }
}