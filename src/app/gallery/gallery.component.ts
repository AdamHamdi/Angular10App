import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private Http:HttpClient) { }

  ngOnInit(): void {
  }
  onSearch(data){
    this.Http.get("https://pixabay.com/api/?key=20510912-0ba259270d805c28b08217e3d&q="+data.motCle+"tunis&image_type=photo&pretty=true").map;

  }

}
