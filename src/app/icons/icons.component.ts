import { Component, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http'
import { sampleData, sampleYouTubeData } from '../twitterData';
import {AuthService, SocialUser} from 'angularx-social-login';
import 'rxjs/add/operator/map'
import { NgxSpinnerService } from 'ngx-spinner';

import 'rxjs/add/operator/mergeMap';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';





@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})


export class IconsComponent implements OnInit {

    private doctors = [];

    public admin: any = false;

    twitterData: any = {};
    tweetData: any = {};


    public isImages: any = true;
    public isVideos: any = false;
    public isTweets: any = false;
    // public dynamicData: any ={};


    youtubeData: any = {};
    private  tweetAPI="https://janagence.herokuapp.com/tweets";
    private imagesAPI="https://janagence.herokuapp.com/media_tweets";
    private videosAPI="https://janagence.herokuapp.com/videos";
    // public oneUrl="https://www.youtube.com/embed/tgbNymZ7vqY";

    pageOfItems: Array<any>;

    user: SocialUser;

    constructor(private authService: AuthService, private http: Http, private spinner: NgxSpinnerService, public sanitizer: DomSanitizer) {
        console.log("hello");



        // http.get('http://jsonplaceholder.typicode.com/users/')
        //     .flatMap((response) => response.json())
        //     // .filter((person) => person.id > 5)
        //     // .map((person) => "Dr. " + person.name)
        //     .subscribe((data) => {
        //         this.doctors.push(data);
        //     });
        //
        // http.get(this.videosAPI)
        //     .flatMap((response) => response.json())
        //     .filter((video) => video.videoID)
        //     .map((video) => "https://www.youtube.com/embed/" + video.videoID +"?controls=0")
        //     .subscribe((data) => {
        //         this.youtubeData.push(data);
        //         console.log(this.youtubeData);
        //     });
    }

    getImagesData(){
        return this.http.get(this.imagesAPI).map((res:Response) => res.json())
    }

    getImages(){
        this.getImagesData().subscribe(twitterData => {console.log(twitterData); this.twitterData= twitterData})

    }
    getTweetsData(){
        return this.http.get(this.tweetAPI).map((res:Response) => res.json())
    }

    getTweets(){
        this.getTweetsData().subscribe(tweetData => {console.log(tweetData); this.tweetData= tweetData})

    }
    getVideosData(){
        return this.http.get(this.videosAPI).map((res:Response) => res.json())
    }

    getVideos(){
        this.getVideosData().subscribe(youtubeData => {console.log(youtubeData); this.youtubeData= youtubeData})
    }



    showImages(){
        this.isImages=true;
        this.isTweets=false;
        this.isVideos=false;
        // this.dynamicData=this.twitterData;
        this.getImages();
        this.getImagesData();
    }
    showTweets(){
        this.isImages=false;
        this.isTweets=true;
        this.isVideos=false;
        // this.dynamicData=this.tweetData;
       this.getTweets();
       this.getTweetsData();



    }
    showVideos(){
        this.spinner.show();

        this.isImages=false;
        this.isTweets=false;
        this.isVideos=true;
        // this.dynamicData=this.youtubeData;
        this.getVideos();
        this.getVideosData();
        this.spinner.hide();
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            console.log(user);
        });

        this.showImages();

        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
    }





}
