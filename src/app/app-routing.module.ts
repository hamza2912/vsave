import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RedditComponent } from './reddit/reddit.component';
import { TermsComponent } from './terms/terms.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { VimeoComponent } from './vimeo/vimeo.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: 'facebook', component: FacebookComponent },
  { path: 'instagram', component: InstagramComponent },
  { path: 'reddit', component: RedditComponent },
  { path: 'tiktok', component: TiktokComponent },
  { path: 'vimeo', component: VimeoComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '', component: YoutubeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
