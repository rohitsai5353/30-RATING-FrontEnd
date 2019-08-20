export class Review{

    reviewId:number;
	userId:number;
	productId:number;
	reviewFeedback:string
    stars:number;
    


    constructor(userId:number,productId:number,reviewFeedback:string,stars:number){
        this.userId=userId;
        this.productId=productId;
        this.reviewFeedback=reviewFeedback;
        this.stars=stars;
    }
}