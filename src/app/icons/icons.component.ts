import { Component, OnInit} from '@angular/core';
import { sampleData} from '../twitterData';



@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})


export class IconsComponent implements OnInit {

    public admin: any = false;

    public twitterData: any = sampleData;

    constructor() {
    }

  ngOnInit() {
  }

}
