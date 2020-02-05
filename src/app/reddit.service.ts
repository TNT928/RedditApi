import { Injectable, Input } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {map} from 'rxjs/Operators'


@Injectable({
  providedIn: 'root'
})
export class RedditService {


  userInput:string
  redditUrl : string= "https:www.reddit.com/r/"
  
  

  constructor( private http: HttpClient) { }

  getData(userInput){
    return this.http.get(`${this.redditUrl}${userInput}/.json`).pipe(map((response:any) => response.data.children))
    
    
  }
}
