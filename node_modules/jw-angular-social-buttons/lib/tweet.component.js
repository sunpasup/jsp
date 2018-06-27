"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TweetComponent = /** @class */ (function () {
    function TweetComponent() {
        this.url = location.href;
        this.text = '';
        // load twitter sdk if required
        var url = 'https://platform.twitter.com/widgets.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    TweetComponent.prototype.ngAfterViewInit = function () {
        // render tweet button
        window['twttr'] && window['twttr'].widgets.load();
    };
    __decorate([
        core_1.Input()
    ], TweetComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input()
    ], TweetComponent.prototype, "text", void 0);
    TweetComponent = __decorate([
        core_1.Component({
            selector: 'tweet',
            template: "<a href=\"https://twitter.com/share\" [attr.data-text]=\"text\" [attr.data-url]=\"url\" class=\"twitter-share-button\"></a>"
        })
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
