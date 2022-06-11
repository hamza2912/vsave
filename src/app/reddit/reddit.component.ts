import { Component, OnInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';
declare var $: any;

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {
  data: any;
  constructor(private reddit: RedditService) { }

  ngOnInit(): void {
  }
  test2() {
    var link = $(".link").val();
    if (link !== '') {
      this.reddit.Reddit(link + '.json').subscribe((response: any) => {
        this.data = response[0].data.children[0].data.secure_media.reddit_video.fallback_url;
        alert(this.data)
      });
    } else {
      alert('Please insert the link to download')
    }
  }



}
