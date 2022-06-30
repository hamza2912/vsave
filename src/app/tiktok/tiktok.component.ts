import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.css']
})
export class TiktokComponent implements OnInit {
  data2: any = {
    "video": [
      "https://v16m-default.akamaized.net/f464e341d496dad70028972bd6eb9173/62a1299c/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/aff648b3357140a5955e3394364a5378/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1150&bt=575&btag=80000&cs=0&ds=6&ft=cL.iu6CwyQ8ZmoEB73x_vjgO.TOhLr&mime_type=video_mp4&qs=0&rc=aDZmOWdmaWY1NGg7aTU5aEBpamVkNWQ6ZjduZDMzZjczM0A2NC1iMGBgXjAxNGI2NS0wYSMuX15gcjQwMGFgLS1kMWNzcw%3D%3D&l=202206081658260102231021520C41D60C"
    ],
    "music": [
      "https://p16-va-default.akamaized.net/obj/musically-maliva-obj/1f0b7f8a67d2272598c047f330f6c5ec.mp3"
    ],
    "cover": [
      "https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/a4a4f93dd39e40fd9ba4b7f8801a4533_1654342044~c5_300x400.jpeg?x-expires=1654725600&x-signature=Q%2FBNzk6ALGvKgSw7VPCjHuQmsX8%3D"
    ],
    "OriginalWatermarkedVideo": [
      "https://v16m-default.akamaized.net/6cb1ee4fa06bf6c8f4f5dd1f1c8d73f5/62a1299c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/6a1cbc7250354a30b0b198e8c078ac7a/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1146&bt=573&btag=80000&cs=0&ds=3&ft=cL.iu6CwyQ8ZmoEB73x_vjgO.TOhLr&mime_type=video_mp4&qs=0&rc=ODxoNztpZjc0ZTQ0ZWVnaEBpamVkNWQ6ZjduZDMzZjczM0BeYGMwNC0xXy4xMzIwNWEuYSMuX15gcjQwMGFgLS1kMWNzcw%3D%3D&l=202206081658260102231021520C41D60C"
    ],
    "dynamic_cover": [
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/05183f4d264347babc6f87302283a7cb_1654342044?x-expires=1654725600&x-signature=pHKqJiGi5LOxXBHrHBbc3%2BDo0NU%3D"
    ],
    "author": [
      "✨𝙎𝙝𝙖𝙣𝙞_𝙒𝙧𝙞𝙩𝙚𝙨💫"
    ],
    "region": [
      "PK"
    ],
    "avatar_thumb": [
      "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/93c2f232b627658a10fd7b38cc5c6c60~c5_100x100.webp?x-expires=1654790400&x-signature=I3ezLs5m6Ghn6Dcbk3cbP2C3brU%3D"
    ],
    "custom_verify": [
      ""
    ]
  };
  data: any;
  isDataLoaded = true;
  constructor() { }

  ngOnInit(): void {
  }
  ValidateDownload() {
    var link = $(".link").val();

    if (link !== '' && link.includes("tiktok") == true) {

        link = "https://" + link.slice(link.indexOf("tiktok"));

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
      "url": "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index?url=" + link,
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "015d35f0c9mshb711bab00da7d9cp1c862bjsn13552f1d67a8",
        "X-RapidAPI-Host": "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com"
      }
    };

    $.ajax(settings).done((response: any) => {
      console.log(response);
      this.data = response;
      this.isDataLoaded = true;
      if (response.error) {
        alert("The url should be like https://tiktok.com.....")
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
