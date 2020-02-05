import { Component, OnInit, Input,Output } from '@angular/core';
import {RedditService} from '../reddit.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts;


  constructor( private reddit : RedditService) { }
  
  ngOnInit() {
    
  }

  onSearch(userInput:string){
    return this.reddit.getData(userInput).subscribe(data => this.posts = data);
  }

 
  
}
