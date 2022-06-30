import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.css']
})
export class VimeoComponent implements OnInit {
  isDataLoaded = true;
  // data: any = { "title": "Swiss Tourism - Even if It Takes Awhile", "mediaUrl": "aHR0cHM6Ly92aW1lby5jb20vNzEyODg4Mzg4", "thumbnail": "aHR0cHM6Ly9pLnZpbWVvY2RuLmNvbS92aWRlby8xNDM4NjkzNDk4LWUzODVhMzAwMTVlZWM5ZjRlMjE2YjFiYmRkZWU0NzFjMjc2OTk2YmY3ZWQ4ZmJhYTM2NjUwZDViZjk3YjAxZDktZF8xMjgw", "duration": "00:01:18", "uploader": "Spencer MacDonald", "format": "source - 3840x2160", "UrlDownload": "aHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3Byb2dyZXNzaXZlX3JlZGlyZWN0L2Rvd25sb2FkLzcxMjg4ODM4OC9jb250YWluZXIvZmNiZmRmYjYtMmZhZS00ZjlhLTllNWItMDNlODA4MmIwMmY1L2Y3NzEwMDE2L3N3aXNzX3RvdXJpc21fLV9ldmVuX2lmX2l0X3Rha2VzX2F3aGlsZSUyMCUyOE9yaWdpbmFsJTI5Lm1wND9leHBpcmVzPTE2NTUwOTQyNDUmbG9jPWV4dGVybmFsJnNlc3Npb25faWQ9ODllNjhhYjJmNmY4MWUyMWQxOWUwOGI3ZTZhMmVhYzMwM2Q3Zjk2MDE2NTUwMDc3MjUmc2lnbmF0dXJlPWQzMTlmY2U0YWVkMTFiNmJmMWI4ZjJlMWE3ODI4ZjIyZDdjNWEzMDI5N2QzZGI2MzBjOTk4MDZkOGNmM2NiODA=", "ext": "mp4", "likeCount": "199", "commentCount": "10", "viewCount": "2,819" };
  data: any;
  ImageUrl = '';
  constructor() { }

  ngOnInit(): void {


  }

  ValidateDownload() {
    var link = $(".link").val();

    if (link !== '' && link.includes("vimeo") == true) {

        link = "https://" + link.slice(link.indexOf("vimeo"));

        if (this.isValidURL(link) == true) {
          this.download(link);
        } else {
          alert('Please insert the valid link to download')
        }
        
      } else {
        alert('Please insert the valid link to download')
      }
  }

  download(link: any) {
    this.isDataLoaded = false;
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://popular-video-downloader.p.rapidapi.com/vimeo",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "015d35f0c9mshb711bab00da7d9cp1c862bjsn13552f1d67a8",
        "X-RapidAPI-Host": "popular-video-downloader.p.rapidapi.com"
      },
      "data": {
        "videoUrl": link
      }
    };

    $.ajax(settings).done((response: any) => {
      console.log(response);
      this.data = JSON.parse(response);//response;
      this.ImageUrl = atob(this.data.UrlDownload)
      this.isDataLoaded = true;
      if (response.errorMessage) {
        alert("The requested Url is not valid, Please insert a valid Url")
      } else {
        $('#exampleModal').modal('show');
      }
    });
  }

  isValidURL(Url: string) {
    var res = Url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };
}
