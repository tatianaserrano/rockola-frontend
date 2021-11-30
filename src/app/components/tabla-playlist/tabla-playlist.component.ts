import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-playlist',
  templateUrl: './tabla-playlist.component.html',
  styleUrls: ['./tabla-playlist.component.scss']
})
export class TablaPlaylistComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
