import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {



    user: SocialUser;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            console.log(user);
        });
    }


}
