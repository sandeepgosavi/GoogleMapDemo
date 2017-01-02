// import { Component } from "@angular/core";
// import { MapView, Marker, Position } from "nativescript-google-maps-sdk";

import { Component, ElementRef, ViewChild } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { Marker, Position } from "nativescript-google-maps-sdk";

// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    @ViewChild("MapView") mapView: ElementRef;
    public marker;
    public position;

    //Map events
    onMapReady = (event) => {
        console.log("Map Ready");
        var mapView = event.object;
        this.marker = new Marker();
        this.position = new Position();
        this.position.latitude = 18.5555574;
        this.position.longitude = 73.9536162;
        this.marker.position = this.position;
        this.marker.title = "World Trade Center";
        this.marker.snippet = "India";
        this.marker.userData = { index : 1};
        mapView.addMarker(this.marker);
    };
}
