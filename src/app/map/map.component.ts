import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Marker } from '../models/marker.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom: number;
  @Input() markers: Marker[] = [];
  @Output() marker = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  clickedMarker(label: string, index: number) {
    this.marker.emit(index);
  }
}
