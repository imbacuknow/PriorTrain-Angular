import {Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';

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
      // zoom: -1,
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

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
