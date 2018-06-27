"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fb_like_component_1 = require("./fb-like.component");
var google_plus_component_1 = require("./google-plus.component");
var tweet_component_1 = require("./tweet.component");
var linkedin_share_component_1 = require("./linkedin-share.component");
var pin_it_component_1 = require("./pin-it.component");
var JwSocialButtonsModule = /** @class */ (function () {
    function JwSocialButtonsModule() {
    }
    JwSocialButtonsModule = __decorate([
        core_1.NgModule({
            declarations: [
                fb_like_component_1.FbLikeComponent,
                google_plus_component_1.GooglePlusComponent,
                tweet_component_1.TweetComponent,
                linkedin_share_component_1.LinkedInShareComponent,
                pin_it_component_1.PinItComponent
            ],
            exports: [
                fb_like_component_1.FbLikeComponent,
                google_plus_component_1.GooglePlusComponent,
                tweet_component_1.TweetComponent,
                linkedin_share_component_1.LinkedInShareComponent,
                pin_it_component_1.PinItComponent
            ]
        })
    ], JwSocialButtonsModule);
    return JwSocialButtonsModule;
}());
exports.JwSocialButtonsModule = JwSocialButtonsModule;
