import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  isDataLoaded = true;


  data2: any = {
    "hasError": false,
    "errorCode": 0,
    "errorMessage": null,
    "errorDescription": null,
    "body": {
      "id": "V9HEbiBlTWc",
      "meta": {
        "title": "Sports Tricks - MAGIC OF THE MONTH June 2022",
        "source": "https://www.youtube.com/watch?v=V9HEbiBlTWc",
        "duration": "8:30",
        "tags": "Vine,Best of Vine,Vine Comedy,Funny,comedy,hilarious,cute,magic,vine magic,vine compilation,vine fail,watch vines,vine 2013,cool vines,special effects vines,zachking,magic of the month,zach reacts",
        "subtitle": {
          "token": "e62bed44198397aef81967d7236f9948",
          "language": [
            "en"
          ]
        }
      },
      "thumb": "https://i.ytimg.com/vi/V9HEbiBlTWc/hqdefault.jpg",
      "video_quality": [
        "2160",
        "1440",
        "1080",
        "720",
        "480",
        "360",
        "240",
        "144"
      ],
      "url": [
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=18&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=DsvUGAZH2iwnq5QyHLws-CYG&gir=yes&clen=37454533&ratebypass=yes&dur=510.188&lmt=1654424758893914&mt=1654928333&fvip=6&fexp=24001373%2C24007246&c=WEB&txp=4538432&n=ekwADOeX5wQQIw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgQ7cdfYiZ6a-goE85LFPKdnj6h_tEx3pr2bDtlslXJqoCIQC1jzCHB9gkYpbZKySG--5pg4Xo1l6DzpgL_RtH8km8TQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "360",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=18&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=DsvUGAZH2iwnq5QyHLws-CYG&gir=yes&clen=37454533&ratebypass=yes&dur=510.188&lmt=1654424758893914&mt=1654928333&fvip=6&fexp=24001373%2C24007246&c=WEB&txp=4538432&n=ekwADOeX5wQQIw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgQ7cdfYiZ6a-goE85LFPKdnj6h_tEx3pr2bDtlslXJqoCIQC1jzCHB9gkYpbZKySG--5pg4Xo1l6DzpgL_RtH8km8TQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4",
          "ext": "mp4",
          "downloadable": false,
          "quality": "360",
          "audio": false,
          "no_audio": false,
          "itag": "18",
          "filesize": 37454533,
          "attr": {
            "title": "video format: 360",
            "class": ""
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=22&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=DsvUGAZH2iwnq5QyHLws-CYG&cnr=14&ratebypass=yes&dur=510.188&lmt=1654424953971592&mt=1654928333&fvip=6&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=ekwADOeX5wQQIw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANUjnnN2KC5--7o8_33_1SXAHgRNyVJ5ToamHTkG8f9XAiEAhJ7cu8U620MnpNdfmWn1_sXhqe7bS2vKPpq8aJgj4G4%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS&title=Sports%20Tricks%20%7C%20MAGIC%20OF%20THE%20MONTH%20June%202022",
          "name": "MP4",
          "subname": "720",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=22&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=DsvUGAZH2iwnq5QyHLws-CYG&cnr=14&ratebypass=yes&dur=510.188&lmt=1654424953971592&mt=1654928333&fvip=6&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=ekwADOeX5wQQIw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANUjnnN2KC5--7o8_33_1SXAHgRNyVJ5ToamHTkG8f9XAiEAhJ7cu8U620MnpNdfmWn1_sXhqe7bS2vKPpq8aJgj4G4%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4",
          "ext": "mp4",
          "downloadable": true,
          "quality": "720",
          "audio": false,
          "no_audio": false,
          "itag": "22",
          "attr": {
            "title": "video format: 720",
            "class": ""
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=134&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=16849402&dur=510.134&lmt=1654424937742476&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgCHjsE5lVpRWU85qvCalkzek9J5Z1G9G5sc6_9p_sdBoCIDwK0ngFxvQUBcnizR_0eQlyNJMEr7BejQgtK8Jnpj4M&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "360",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=134&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=16849402&dur=510.134&lmt=1654424937742476&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgCHjsE5lVpRWU85qvCalkzek9J5Z1G9G5sc6_9p_sdBoCIDwK0ngFxvQUBcnizR_0eQlyNJMEr7BejQgtK8Jnpj4M&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "360",
          "audio": false,
          "no_audio": true,
          "itag": "134",
          "filesize": 16849402,
          "attr": {
            "title": "video format: 360 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=29320005&dur=510.134&lmt=1654424937792419&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAM9zXmjII64x2yG8Y-3APSaPNWWInqvZHkw4efQ0bmLnAiAtbQILza1PvqVJBeefgfP47eNeIoBA6fRzFdSDyKmhlw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "480",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=29320005&dur=510.134&lmt=1654424937792419&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAM9zXmjII64x2yG8Y-3APSaPNWWInqvZHkw4efQ0bmLnAiAtbQILza1PvqVJBeefgfP47eNeIoBA6fRzFdSDyKmhlw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "480",
          "audio": false,
          "no_audio": true,
          "itag": "135",
          "filesize": 29320005,
          "attr": {
            "title": "video format: 480 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=50656176&dur=510.134&lmt=1654424937746303&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgZI7S_3FudA7tef3iakep_7zD3gE7g2yTNt3XSYXEcysCIQCnSKxIgpsg2ujVaeLrlMqfdpo-Q--oQkjDcViOgM96gw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "720",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=50656176&dur=510.134&lmt=1654424937746303&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgZI7S_3FudA7tef3iakep_7zD3gE7g2yTNt3XSYXEcysCIQCnSKxIgpsg2ujVaeLrlMqfdpo-Q--oQkjDcViOgM96gw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "720",
          "audio": false,
          "no_audio": true,
          "itag": "136",
          "filesize": 50656176,
          "attr": {
            "title": "video format: 720 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=140421107&dur=510.134&lmt=1654424809087730&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJwQrE2b3oKGqVla8SESzkyCuejpgQ8uevkNHyeDlir9AiBmgEErs_5ox2jtYkFBR9Cd536TzjS76RhQKhFm2F7dZg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "1080",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=140421107&dur=510.134&lmt=1654424809087730&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJwQrE2b3oKGqVla8SESzkyCuejpgQ8uevkNHyeDlir9AiBmgEErs_5ox2jtYkFBR9Cd536TzjS76RhQKhFm2F7dZg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "1080",
          "audio": false,
          "no_audio": true,
          "itag": "137",
          "filesize": 140421107,
          "attr": {
            "title": "video format: 1080 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=140&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=8257605&dur=510.188&lmt=1654424731543988&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgcjs6Ay84cLgmAqKFhAckPK3JiFz4zIW7ZxoqKm5jfW8CIQCYtxsE189OT2sEZBpWBLu9FtxLR97IguZbIhizQyYbiQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "Audio M4A",
          "subname": "131",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=140&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=8257605&dur=510.188&lmt=1654424731543988&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgcjs6Ay84cLgmAqKFhAckPK3JiFz4zIW7ZxoqKm5jfW8CIQCYtxsE189OT2sEZBpWBLu9FtxLR97IguZbIhizQyYbiQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "m4a audio",
          "ext": "m4a",
          "downloadable": false,
          "quality": "131",
          "audio": true,
          "no_audio": false,
          "itag": "140",
          "filesize": 8257605,
          "attr": {
            "title": "audio format: m4a 131 kb/s",
            "class": ""
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=243&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=19934190&dur=510.134&lmt=1654425077259411&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALagdB4y_FN18QUE-8dZJhg0_rxtC06cyULHsfyE1Ut9AiBXF0c5wPwJ9W5he7RivcXoQmM32pp6p8grDZpoTdzvaQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "WEBM",
          "subname": "360",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=243&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=19934190&dur=510.134&lmt=1654425077259411&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALagdB4y_FN18QUE-8dZJhg0_rxtC06cyULHsfyE1Ut9AiBXF0c5wPwJ9W5he7RivcXoQmM32pp6p8grDZpoTdzvaQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "webm dash",
          "ext": "webm",
          "downloadable": false,
          "quality": "360",
          "audio": false,
          "no_audio": true,
          "itag": "243",
          "filesize": 19934190,
          "attr": {
            "title": "video format: 360 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=244&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=27142318&dur=510.134&lmt=1654425077266575&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYcnUdLy8p36xqoHCB6ixJ9sxJTe7m4X2a69KYUnFm1kCIQCEM25ayK4iKPOOhYtvANhPiDOpJdR5RPucUq2phW_VjA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "WEBM",
          "subname": "480",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=244&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=27142318&dur=510.134&lmt=1654425077266575&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYcnUdLy8p36xqoHCB6ixJ9sxJTe7m4X2a69KYUnFm1kCIQCEM25ayK4iKPOOhYtvANhPiDOpJdR5RPucUq2phW_VjA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "webm dash",
          "ext": "webm",
          "downloadable": false,
          "quality": "480",
          "audio": false,
          "no_audio": true,
          "itag": "244",
          "filesize": 27142318,
          "attr": {
            "title": "video format: 480 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=50701667&dur=510.134&lmt=1654425077286861&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANqymfJoeh8o-mrIr1-7T9ZCmpfTwH2CDgeFz9i6_hdGAiEA6cTxur2kA_CFuNoMs66ideSrJuVj9gOY48Tbscg8pi8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "WEBM",
          "subname": "720",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=50701667&dur=510.134&lmt=1654425077286861&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANqymfJoeh8o-mrIr1-7T9ZCmpfTwH2CDgeFz9i6_hdGAiEA6cTxur2kA_CFuNoMs66ideSrJuVj9gOY48Tbscg8pi8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "webm dash",
          "ext": "webm",
          "downloadable": false,
          "quality": "720",
          "audio": false,
          "no_audio": true,
          "itag": "247",
          "filesize": 50701667,
          "attr": {
            "title": "video format: 720 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=85735704&dur=510.134&lmt=1654425032278173&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJPB90EkvmEd3cr1NUPeZ1JHtHfqEpNkdJVBlGAGJeZdAiA0Zqc07_Q6xq8s1cJ01aeIp2fQepZSWDhtXp0-jT97JA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "WEBM",
          "subname": "1080",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=85735704&dur=510.134&lmt=1654425032278173&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4537432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJPB90EkvmEd3cr1NUPeZ1JHtHfqEpNkdJVBlGAGJeZdAiA0Zqc07_Q6xq8s1cJ01aeIp2fQepZSWDhtXp0-jT97JA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "webm dash",
          "ext": "webm",
          "downloadable": false,
          "quality": "1080",
          "audio": false,
          "no_audio": true,
          "itag": "248",
          "filesize": 85735704,
          "attr": {
            "title": "video format: 1080 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=249&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=3163230&dur=510.161&lmt=1654424728545405&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBW14mErpnsa4vuRDVO4M8aaA27FFZGzcfHu9PsR-UiQCIFKnGFWIPl2nqS2dzeh-YF0f86VTRw40A5FyB6BfPsNd&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "Audio OPUS",
          "subname": "56",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=249&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=3163230&dur=510.161&lmt=1654424728545405&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBW14mErpnsa4vuRDVO4M8aaA27FFZGzcfHu9PsR-UiQCIFKnGFWIPl2nqS2dzeh-YF0f86VTRw40A5FyB6BfPsNd&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "opus audio",
          "ext": "opus",
          "downloadable": false,
          "quality": "56",
          "audio": true,
          "no_audio": false,
          "itag": "249",
          "filesize": 3163230,
          "attr": {
            "title": "audio format: opus 56 kb/s",
            "class": ""
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=250&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=4200551&dur=510.161&lmt=1654424728864030&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBiGkozKAUxI_9SRoQATRD6XP18WcVGFg5NO5Oyeax5gCIBKLueMrg8sfkgIWpO62Id2bKbYGwWs9FpL-t5lMVrsa&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "Audio OPUS",
          "subname": "74",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=250&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=4200551&dur=510.161&lmt=1654424728864030&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBiGkozKAUxI_9SRoQATRD6XP18WcVGFg5NO5Oyeax5gCIBKLueMrg8sfkgIWpO62Id2bKbYGwWs9FpL-t5lMVrsa&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "opus audio",
          "ext": "opus",
          "downloadable": false,
          "quality": "74",
          "audio": true,
          "no_audio": false,
          "itag": "250",
          "filesize": 4200551,
          "attr": {
            "title": "audio format: opus 74 kb/s",
            "class": ""
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=251&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=8228203&dur=510.161&lmt=1654424729640777&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgAlyaMT2kjT1NzsuoZHKAxMOzAetFah8xAD7GRHwGpH4CIQCuYLviAg3QLO1kmPv11uqFKj-Zba_AYo1WWzDW8coxWA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "Audio OPUS",
          "subname": "142",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=251&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=audio%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=8228203&dur=510.161&lmt=1654424729640777&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgAlyaMT2kjT1NzsuoZHKAxMOzAetFah8xAD7GRHwGpH4CIQCuYLviAg3QLO1kmPv11uqFKj-Zba_AYo1WWzDW8coxWA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "opus audio",
          "ext": "opus",
          "downloadable": false,
          "quality": "142",
          "audio": true,
          "no_audio": false,
          "itag": "251",
          "filesize": 8228203,
          "attr": {
            "title": "audio format: opus 142 kb/s",
            "class": ""
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=271&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=305742389&dur=510.134&lmt=1654425029571768&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPX5wLASQKfLybca6zHLerMkzgUC67wVVhbzBkFaY5-oAiBZfc4kw_BCg7a3xnrp95fuFh2ijg1sZeiYP0MFoBwwEw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "WEBM",
          "subname": "1440",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=271&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=305742389&dur=510.134&lmt=1654425029571768&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPX5wLASQKfLybca6zHLerMkzgUC67wVVhbzBkFaY5-oAiBZfc4kw_BCg7a3xnrp95fuFh2ijg1sZeiYP0MFoBwwEw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "webm dash",
          "ext": "webm",
          "downloadable": false,
          "quality": "1440",
          "audio": false,
          "no_audio": true,
          "itag": "271",
          "filesize": 305742389,
          "attr": {
            "title": "video format: 1440 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=785344189&dur=510.134&lmt=1654425601047600&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIge5FpPLoxKwlj0f42Xg0HYRc3OMhQAJbzeruKxUh8pZACIQCOVjPFqMdLRI5DIZpzHZCiVKJaTHBSE714c_Qq6QmoxQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "WEBM",
          "subname": "2160",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fwebm&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=785344189&dur=510.134&lmt=1654425601047600&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4532432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIge5FpPLoxKwlj0f42Xg0HYRc3OMhQAJbzeruKxUh8pZACIQCOVjPFqMdLRI5DIZpzHZCiVKJaTHBSE714c_Qq6QmoxQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "webm dash",
          "ext": "webm",
          "downloadable": false,
          "quality": "2160",
          "audio": false,
          "no_audio": true,
          "itag": "313",
          "filesize": 785344189,
          "attr": {
            "title": "video format: 2160 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=396&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=16514761&dur=510.134&lmt=1654443554023751&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJv29EnaHoHGziJM1Z9mIMP4Xz2wJOSMra5pSQqKrm5hAiEA3Fbqqx74L49DZzc2OcYZ3GCQT3jwF_weQO5ppE3VkmU%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "360",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=396&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=16514761&dur=510.134&lmt=1654443554023751&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJv29EnaHoHGziJM1Z9mIMP4Xz2wJOSMra5pSQqKrm5hAiEA3Fbqqx74L49DZzc2OcYZ3GCQT3jwF_weQO5ppE3VkmU%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "360",
          "audio": false,
          "no_audio": true,
          "itag": "396",
          "filesize": 16514761,
          "attr": {
            "title": "video format: 360 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=397&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=28958115&dur=510.134&lmt=1654443852281920&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgOxNsklg7pQpKjLn5Owpa9foF3BVJI11gTBlu9HISKJACIQCOcXSZG3EnN5Ixl-s6pAetCKCnAxY1YRjKoqd5AUaT_Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "480",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=397&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=28958115&dur=510.134&lmt=1654443852281920&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgOxNsklg7pQpKjLn5Owpa9foF3BVJI11gTBlu9HISKJACIQCOcXSZG3EnN5Ixl-s6pAetCKCnAxY1YRjKoqd5AUaT_Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "480",
          "audio": false,
          "no_audio": true,
          "itag": "397",
          "filesize": 28958115,
          "attr": {
            "title": "video format: 480 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=398&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=55747164&dur=510.134&lmt=1654443735653221&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAPlwUTCM7nI-G1sKS7z3X5GLKh4V4df6ohqQXYgwftRSAiEA8V_l7liZFV3rlXPjTZ1aUcLm-FXqd5eTZ5yIFte67ZU%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "720",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=398&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=55747164&dur=510.134&lmt=1654443735653221&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAPlwUTCM7nI-G1sKS7z3X5GLKh4V4df6ohqQXYgwftRSAiEA8V_l7liZFV3rlXPjTZ1aUcLm-FXqd5eTZ5yIFte67ZU%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "720",
          "audio": false,
          "no_audio": true,
          "itag": "398",
          "filesize": 55747164,
          "attr": {
            "title": "video format: 720 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=399&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=96370962&dur=510.134&lmt=1654444030064547&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIkmQYV07oZUJtmOB-BN05qVE20jaxDblqi79EuWaWX6AiBLRP-ksntk6121_TVqvvepIvzqH2vqMK3BPY_H4GBRTg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "1080",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=399&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=96370962&dur=510.134&lmt=1654444030064547&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIkmQYV07oZUJtmOB-BN05qVE20jaxDblqi79EuWaWX6AiBLRP-ksntk6121_TVqvvepIvzqH2vqMK3BPY_H4GBRTg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "1080",
          "audio": false,
          "no_audio": true,
          "itag": "399",
          "filesize": 96370962,
          "attr": {
            "title": "video format: 1080 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=400&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=294562896&dur=510.134&lmt=1654443753406848&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIUr-smH05zcHNiQ0ZdIanj5nsCzukIpK-VAu-wo0UIPAiBLstVhRN6g4YRNycH9ZIUZTU1suU6I2xVDZKHDvp91pA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "1440",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=400&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=294562896&dur=510.134&lmt=1654443753406848&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIUr-smH05zcHNiQ0ZdIanj5nsCzukIpK-VAu-wo0UIPAiBLstVhRN6g4YRNycH9ZIUZTU1suU6I2xVDZKHDvp91pA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "1440",
          "audio": false,
          "no_audio": true,
          "itag": "400",
          "filesize": 294562896,
          "attr": {
            "title": "video format: 1440 (without audio)",
            "class": "no-audio"
          }
        },
        {
          "url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=401&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=579752363&dur=510.134&lmt=1654444253408429&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgLwcUmB8WfrITwUmSmnSXL27vhCwyVIerA-lY1AVx6NsCIGZocBZWQANUzDM_X6-q-GFOI4ueMzA2tKTr9bLyiE7V&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "name": "MP4",
          "subname": "2160",
          "info_url": "https://rr3---sn-ab5sznzs.googlevideo.com/videoplayback?expire=1654951008&ei=_zekYtCwPIj08gSJ8b_QBw&ip=198.20.189.77&id=o-AG93HEgHCtbMOZc1mEGtDDSufD4rCIpCGpUw7dEU2Sr5&itag=401&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=u6&mm=31%2C29&mn=sn-ab5sznzs%2Csn-ab5l6nsy&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=4ocVC3d4X4pG0dQlUaERcoSJ85i1LIg&vprv=1&mime=video%2Fmp4&ns=A6IG4bcMPSQXEJWvUDL3rw4G&gir=yes&clen=579752363&dur=510.134&lmt=1654444253408429&mt=1654928333&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=4531432&n=FqMK_pvKg_444w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgLwcUmB8WfrITwUmSmnSXL27vhCwyVIerA-lY1AVx6NsCIGZocBZWQANUzDM_X6-q-GFOI4ueMzA2tKTr9bLyiE7V&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgB7SWewUM93TiER6sTt_SJfJxipfHcj96usY9tmb02coCIG3rlJ1CJO7EAgVjool2ZyowHlNbJ40-JvTuvuGV9KxS",
          "type": "mp4 dash",
          "ext": "mp4",
          "downloadable": false,
          "quality": "2160",
          "audio": false,
          "no_audio": true,
          "itag": "401",
          "filesize": 579752363,
          "attr": {
            "title": "video format: 2160 (without audio)",
            "class": "no-audio"
          }
        }
      ]
    }
  };

  data: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ValidateDownload() {
    var link = $(".link").val();

    if (link !== '' && link.includes("youtube") == true) {

      link = "https://" + link.slice(link.indexOf("youtube"));

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
      "url": "https://socialdownloader.p.rapidapi.com/api/youtube/video?video_link=" + link,
      "method": "GET",
      "headers": {
        "X-RapidAPI-Host": "socialdownloader.p.rapidapi.com",
        "X-RapidAPI-Key": "015d35f0c9mshb711bab00da7d9cp1c862bjsn13552f1d67a8"
      }
    };
    $.ajax(settings).done((response: any) => {
      console.log(response);
      // Filtering Data
      response?.body?.url.forEach((data: any) => {
        if (data.type == 'mp4') {
          this.data.push(data)
        }
      })
      this.isDataLoaded = true;
      if (response.errorMessage) {
        // alert(response.errorMessage)
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
