// import { Component } from "@angular/core";
// import { MapView, Marker, Position } from "nativescript-google-maps-sdk";
"use strict";
var core_1 = require('@angular/core');
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
            var mapView = event.object;
            _this.marker = new nativescript_google_maps_sdk_1.Marker();
            _this.position = new nativescript_google_maps_sdk_1.Position();
            _this.position.latitude = 18.5555574; //-33.86;
            _this.position.longitude = 73.9536162; //151.20;
            // this.marker.position = { latitude: -33.86, longitude: 151.20 }
            // this.marker.position = this.position.positionFromLatLng(-33.86, 151.20);
            _this.marker.position = _this.position;
            _this.marker.title = "World Trade Center";
            _this.marker.snippet = "India";
            _this.marker.userData = { index: 1 };
            mapView.addMarker(_this.marker);
        };
    }
    __decorate([
        core_1.ViewChild("MapView"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "mapView", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map