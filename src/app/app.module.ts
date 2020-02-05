import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component'
import {FormsModule} from '@angular/forms'
import { RedditService } from './reddit.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [RedditService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
