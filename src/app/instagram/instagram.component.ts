import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  data: any;
  isDataLoaded = true;
  constructor() { }

  ngOnInit(): void {
  }

  test2() {
    var link = $(".link").val();
    if (link !== '') {
      this.download(link);

    } else {
      alert('Please insert the link to download')
    }
  }

  download(link: any) {
    this.isDataLoaded = false;
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=" + link,
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "9c68e3f1f9msh00ef3e4e8df677ap1d179cjsn309f2088e6f8",
        "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com"
      }
    };

    $.ajax(settings).done((response: any) => {
      console.log(response);
      this.data = response;
      this.isDataLoaded = true;
      $('#exampleModal').modal('show');
    });
  }
}
