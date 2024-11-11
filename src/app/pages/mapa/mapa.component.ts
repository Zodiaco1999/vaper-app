import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule
  ],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = { lat: 4.616598606109619, lng: -74.15335845947266 };
  zoom = 15;
}
