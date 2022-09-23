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

  ValidateDownload() {
    var link = $(".link").val();

    if (link !== '' && link.includes("instagram") == true) {

        link = "https://" + link.slice(link.indexOf("instagram"));

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
      "url": "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=" + link,
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "015d35f0c9mshb711bab00da7d9cp1c862bjsn13552f1d67a8",
        "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com"
      }
    };

    $.ajax(settings).done((response: any) => {
      console.log(response);
      this.data = response;
      this.isDataLoaded = true;
      if (response.error) {
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
