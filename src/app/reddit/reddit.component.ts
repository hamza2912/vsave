import { Component, OnInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';
declare var $: any;

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {
  fallback_url: any;
  download_url: any;
  isDataLoaded = true;
  constructor(private reddit: RedditService) { }

  ngOnInit(): void {
  }
  ValidateDownload() {
    var link = $(".link").val();
    if (link !== '' && link.includes("reddit") == true && this.isValidURL(link) == true) {
      this.isDataLoaded = false;
      this.reddit.Reddit(link + '.json').subscribe((response: any) => {
        this.fallback_url = response[0].data.children[0].data.secure_media.reddit_video.fallback_url;
        this.isDataLoaded = true;
        this.download_url = "https://sd.redditsave.com/download.php?permalink=" + link + "&video_url=" + this.fallback_url + "?source=fallback&audio_url=" + this.fallback_url.replace('DASH_720.mp4', 'DASH_audio.mp4');
        $('#exampleModal').modal('show');
      }, (err: any) => {
        this.isDataLoaded = true;
        alert("The requested Url is not valid, Please insert a valid Url")
      });
    } else {
      alert('Please insert the valid link to download')
    }
  }

  isValidURL(Url: string) {
    var res = Url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

}
