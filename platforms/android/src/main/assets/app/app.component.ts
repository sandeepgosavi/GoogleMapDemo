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
        this.position.latitude = 18.5555574;//-33.86;
        this.position.longitude = 73.9536162;//151.20;
        // this.marker.position = { latitude: -33.86, longitude: 151.20 }
        // this.marker.position = this.position.positionFromLatLng(-33.86, 151.20);
        this.marker.position = this.position;
        this.marker.title = "World Trade Center";
        this.marker.snippet = "India";
        this.marker.userData = { index : 1};
        mapView.addMarker(this.marker);
    };
    // //public mapView;
    // public marker;
    // public position;

    // constructor(){
    //     this.marker = new Marker();
    //     //this.mapView = new MapView();
    //     this.position = new Position();
    // }

    // onMapReady(args) {
    //     console.log("Setting a marker...");
    //     // var mapView = args.object;
    //     // this.marker.position = this.position.positionFromLatLng(-33.86, 151.20);
    //     // this.marker.title = "Sydney";
    //     // this.marker.snippet = "Australia";
    //     // this.marker.userData = { index : 1};
    //     // mapView.addMarker(this.marker);
    // }

    // onMarkerSelect(args) {
    // console.log("Clicked on " +args.marker.title);
    // }

    // onCameraChanged(args) {
    //     console.log("Camera changed: " + JSON.stringify(args.camera)); 
    // }
}
