export interface VoteAPI {
    colleague : {pseudo : string , last : string , first : string , photo : URL , score : number};
    like_hate : string;
    score : number;
    created_date : string;
}
