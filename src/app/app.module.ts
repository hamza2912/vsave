import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { InstagramComponent } from './instagram/instagram.component';
import { VimeoComponent } from './vimeo/vimeo.component';
import { FacebookComponent } from './facebook/facebook.component';
import { RedditComponent } from './reddit/reddit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    TiktokComponent,
    YoutubeComponent,
    InstagramComponent,
    VimeoComponent,
    FacebookComponent,
    RedditComponent,
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
