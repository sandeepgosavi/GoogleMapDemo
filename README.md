# GoogleMap Demo
It is a small project to implement google map in {N}.

## Introduction
This project is to demonstrate implementation of google map in {N}.

## Usage
Thanks to [dapriett] (https://github.com/dapriett) for the [nativescript-google-maps-sdk] (https://github.com/dapriett/nativescript-google-maps-sdk.git). Please go through the sdk for more details.
I am repeating the same steps by [dapriett] (https://github.com/dapriett).

## Install the plugin using the NativeScript CLI tooling

```
tns plugin add nativescript-google-maps-sdk
```
## Setup Android API Key

First copy over the template string resource files for Android

```
cp -r node_modules/nativescript-google-maps-sdk/platforms/android/res/values app/App_Resources/Android/
```

Next modify the file at `app/App_Resources/Android/values/nativescript_google_maps_api.xml`, uncomment `nativescript_google_maps_api_key` string and replace `PUT_API_KEY_HERE` with your api key.

The plugin will default to latest available version of the Android `play-services-maps` SDK.  If you need to change the version, you can add a project ext property `googlePlayServicesVersion` like so:

```
//   /app/App_Resources/Android/app.gradle

project.ext {
    googlePlayServicesVersion = "+"
}
```
## Setup iOS API Key
In the main script of your app `app.js`, use the following to add the API key (providing your key in place of `PUT_API_KEY_HERE`)
```
if(application.ios) {
  GMSServices.provideAPIKey("PUT_API_KEY_HERE");
}
```
##  Adding the MapView
```
<GridLayout>
    <MapView (mapReady)="onMapReady($event)"></MapView>
</GridLayout>
```
## Register MapView
```
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
```
## app/app.component.ts
```
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
```
