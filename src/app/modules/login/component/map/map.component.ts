import {Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './marker.service';

const iconRetinaUrl = 'assets/icons/marker-icon-2x.png';
const iconUrl = 'assets/icons/marker-icon.png';
// const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  // shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      crs: L.CRS.Simple,
      // center: []
      maxZoom: 1,
      minZoom: -1,
    });

    var bounds: L.BoundsLiteral = [
      [0, 0],
      [1298, 1826],
    ];
    var image = L.imageOverlay('assets/picture/a.png', bounds).addTo(this.map);
    this.map.fitBounds(bounds);

    // this.map.dragging.disable();
  }

  constructor(private markerService: MarkerService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
  }
}
