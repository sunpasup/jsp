import { Component, OnInit} from '@angular/core';
import { sampleData} from '../twitterData';
import {AuthService, SocialUser} from 'angularx-social-login';




@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})


export class IconsComponent implements OnInit {


    public admin: any = false;

    public twitterData: any = sampleData;

    user: SocialUser;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            console.log(user);
        });
    }





}
