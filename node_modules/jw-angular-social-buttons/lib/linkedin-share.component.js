"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LinkedInShareComponent = /** @class */ (function () {
    function LinkedInShareComponent() {
        this.url = location.href;
        // load twitter sdk if required
        var url = 'https://platform.linkedin.com/in.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            script.innerHTML = ' lang: en_US';
            document.body.appendChild(script);
        }
    }
    LinkedInShareComponent.prototype.ngAfterViewInit = function () {
        // add linkedin share button script tag to element
        this.element.nativeElement.innerHTML = "<script type=\"IN/Share\" data-url=\"" + this.url + "\"></script>";
        // render share button
        window['IN'] && window['IN'].parse();
    };
    __decorate([
        core_1.Input()
    ], LinkedInShareComponent.prototype, "url", void 0);
    __decorate([
        core_1.ViewChild('element')
    ], LinkedInShareComponent.prototype, "element", void 0);
    LinkedInShareComponent = __decorate([
        core_1.Component({
            selector: 'linkedin-share',
            template: "<div #element></div>"
        })
    ], LinkedInShareComponent);
    return LinkedInShareComponent;
}());
exports.LinkedInShareComponent = LinkedInShareComponent;
