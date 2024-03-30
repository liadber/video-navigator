import {Component, OnInit} from '@angular/core';
import {VideoMetadata} from "../../models/video-metadata.model";
import {VideoMetadataService} from "../../services/video-metadata.service";
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {MenuContextComponent} from "../menu-context/menu-context.component";

@Component({
  selector: 'app-video-manager',
  standalone: true,
  imports: [MenuContextComponent, CommonModule, MatGridListModule],
  templateUrl: './video-manager.component.html',
  styleUrl: './video-manager.component.css'
})
export class VideoManagerComponent implements OnInit {
  public videos: Array<VideoMetadata> = [];

  constructor(private videoMetadataService: VideoMetadataService) {
  }

  ngOnInit() {
    this.videos = this.videoMetadataService.getVideosMetadata()
  }
}
