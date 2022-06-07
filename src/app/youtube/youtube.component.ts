import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // $('#exampleModal').modal('show');
    // $(".click-btn-down").click(function () {
    //   var link = $(".link").val();
    //   var formate = $(".formte").children("option:selected").val();
    //   var src = "" + link + "=" + formate + "";
    //   downloadVideo(link, formate);
    // });




  }
  downloadVideo(link: any, formate: any) {
    $('.download-video').html('<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url=' + link + '&f=' + formate + '&color=64c896"></iframe>');
    // $('.download-video').html('<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url=https://www.youtube.com/watch?v=OUHVRWdVQCI&f=mp3&color=64c896"></iframe>');
  }

  test(formate: any) {
    var link = $(".link").val();
    // var formate = $(".formte").children("option:selected").val();
    var src = "" + link + "=" + formate + "";
    this.downloadVideo(link, formate);
  }

  test2() {
    var link = $(".link").val();
    if (link !== '') {
      $('#exampleModal').modal('show');
    } else {
      alert('Please insert the link to download')
    }

  }
}
