import "googlemaps";
import { ILocation } from "./ILocation";

export interface IMappable {
  location: ILocation;
  getMarkerContent(): string;
  markerColor: string;
}

export class CustomMap {
  // other developers won't modify it
  private googleMap: google.maps.Map;

  constructor(divElem: Element) {
    this.googleMap = new google.maps.Map(divElem, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // invert the dependency
  // if an object wants to be marked on the map
  // it has to satisfy the IMappable interface
  addMarker(mappable: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
      icon: `http://maps.google.com/mapfiles/ms/icons/${
        mappable.markerColor
      }-dot.png`
    });

    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.getMarkerContent()
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
