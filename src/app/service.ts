import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Review } from "./model/review";
import { Observable } from 'rxjs';



@Injectable({
    providedIn:'root'
})

export class RatingService{
    private url:string="http://localhost:5000/review"
    constructor(private http:HttpClient){}
    rate(reviewObject:Review):Observable<any> {
        let options = { "headers": 
        new HttpHeaders({ "Content-Type": "application/json" }) };
        return this.http.post<Review>(this.url+"/addReviewForProduct",reviewObject,options);
    
        
    }

    
}

