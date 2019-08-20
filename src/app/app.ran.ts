import { Component } from '@angular/core';
import { RatingService } from './service';

import { Review } from './model/review';

@Component({
    selector: 'add',
    templateUrl: 'ran.html'
})

export class AppranComponent { 
    
    constructor(private service:RatingService){

    }
     rating:number;
     userId:number;
     productId:number;
     reviewFeedback:string
     stars:number;


    submit(){
        var ob:Review=new Review(18,3,"Good Product Great Quality",this.rating);
        this.service.rate(ob).subscribe(data=>console.log(data));
         alert("Review added successfully");

    }
}3