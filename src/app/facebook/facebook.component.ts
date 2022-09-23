import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  isDataLoaded = true;

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
      if (response.errorMessage) {
        alert("The requested Url is not valid, Please insert a valid Url")
      } else {
        $('#exampleModal').modal('show');
      }
    });
  }


  ValidateDownload() {
    var link = $(".link").val();

    if (link !== '' && link.includes("facebook") == true) {

        link = "https://" + link.slice(link.indexOf("facebook"));

        if (this.isValidURL(link) == true) {
          this.download(link);
        } else {
          alert('Please insert the valid link to download')
        }
        
      } else {
        alert('Please insert the valid link to download')
      }
  }

  isValidURL(Url: string) {
    var res = Url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };
}
