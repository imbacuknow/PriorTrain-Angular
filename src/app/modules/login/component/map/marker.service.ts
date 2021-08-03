import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  capitals: string = '/assets/data/mock-marker.geojson';

  constructor(private http: HttpClient) {}

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.markers) {
        const lon = c.position.pixel_y;
        const lat = c.position.pixel_x;
        const marker = L.marker([lat, lon]);

        marker.addTo(map);
      }
    });
  }
}
