import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  isDataLoaded = true;
  test = {
    "hasError": false,
    "errorCode": 0,
    "errorMessage": null,
    "errorDescription": null,
    "body": {
      "video": "https://video-ort2-1.xx.fbcdn.net/v/t42.1790-2/275634192_5234693623250120_8249905989455486320_n.mp4?_nc_cat=1&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjUwNSwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=AHX4ghImA-oAX9brWwH&rl=505&vabr=281&_nc_ht=video-ort2-1.xx&oh=00_AT_eQ5fsJEz3VibaSNsepMpxdr2xE1Cyfxx8l4u0OfyYuw&oe=62A01A31&dl=1",
      "videoHD": "https://video-ort2-1.xx.fbcdn.net/v/t66.36240-2/46129957_124490616927315_8944427197529379596_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjE1MDAsInJsYSI6MTA0NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=sg_pNDP8bs4AX9WaHGj&rl=1500&vabr=632&_nc_ht=video-ort2-1.xx&oh=00_AT-kLCRLscV1pzryCNWErMvab7NdT-WFcU6FchZNkNUVSQ&oe=62A4C7C3&dl=1"
    }
  };

  data: any;
  constructor() { }

  ngOnInit(): void {
    // this.download();
  }

  download(link: any) {
    this.isDataLoaded = false;
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://socialdownloader.p.rapidapi.com/api/facebook/video?video_link=" + link,
      "method": "GET",
      "headers": {
        "X-RapidAPI-Host": "socialdownloader.p.rapidapi.com",
        "X-RapidAPI-Key": "015d35f0c9mshb711bab00da7d9cp1c862bjsn13552f1d67a8"
      }
    };

    $.ajax(settings).done((response: any) => {
      this.data = response;
      console.log(response);
      this.isDataLoaded = true;
      $('#exampleModal').modal('show');
    });
  }


  test2() {
    var link = $(".link").val();
    if (link !== '' && link.includes("facebook") == true) {
      // $('#exampleModal').modal('show');
      this.download(link)
    } else {
      alert('Please insert the valid link to download')
    }
  }

}
