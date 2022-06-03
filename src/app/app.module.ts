import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { InstagramComponent } from './instagram/instagram.component';
import { VimeoComponent } from './vimeo/vimeo.component';
import { FacebookComponent } from './facebook/facebook.component';
import { RedditComponent } from './reddit/reddit.component';

@NgModule({
  declarations: [
    AppComponent,
    TiktokComponent,
    YoutubeComponent,
    InstagramComponent,
    VimeoComponent,
    FacebookComponent,
    RedditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
