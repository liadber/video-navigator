import {Injectable} from '@angular/core';
import {VideoMetadata} from "../models/video-metadata.model";

@Injectable({
  providedIn: 'root'
})
export class VideoMetadataService {

  constructor() {
  }

  getVideosMetadata(): VideoMetadata[] {
    return this.getDemoVideos();
  }

  getDemoVideos(): VideoMetadata[] {
    return [
      {
        videoId: 'a1234567',
        screenColor: 'blue',
        widthRatio: 2,
        heightRatio: 5,
        menuItems: [
          {label: "Pause", onClick: () => ""},
          {label: "Advertise", onClick: () => ""},
          {label: "Divide", onClick: () => ""},
          {label: "Share", onClick: () => console.log("Share")},
          {label: "Play", onClick: () => console.log("Play")},
          {label: "Add to Playlist", onClick: () => console.log("Add to Playlist")},
          {label: "Report", onClick: () => console.log("Report")},
          {label: "Watch Later", onClick: () => console.log("Watch Later")},
          {label: "Loop", onClick: () => console.log("Loop")}
        ],
      },
      {
        videoId: 'c89223411',
        screenColor: 'green',
        widthRatio: 1,
        heightRatio: 11,
        menuItems: [
          {label: "Restart", onClick: () => ""},
          {label: "Stop", onClick: () => ""},
          {label: "Mute", onClick: () => ""},
          {label: "Subtitles", onClick: () => console.log("Subtitles")}
        ],

      },
      {
        videoId: 'b9876543',
        screenColor: 'yellow',
        widthRatio: 1,
        heightRatio: 7,
        menuItems: [
          {label: "Play", onClick: () => console.log("Play")},
          {label: "Settings", onClick: () => console.log("Settings")}
        ]
      },
      {
        videoId: 'c2468101',
        screenColor: 'red',
        widthRatio: 3,
        heightRatio: 11,
        menuItems: [
          {label: "FullScreen", onClick: () => console.log("FullScreen")},
          {label: "Favorite", onClick: () => console.log("Favorite")},
          {label: "Mute", onClick: () => console.log("Mute")},
          {label: "Skip", onClick: () => console.log("Skip")},
          {label: "Download", onClick: () => console.log("Download")},
          {label: "Share", onClick: () => console.log("Share")},
          {label: "Add to Watchlist", onClick: () => console.log("Add to Watchlist")},
          {label: "Repeat", onClick: () => console.log("Repeat")},
          {label: "Forward", onClick: () => console.log("Forward")},
          {label: "Like", onClick: () => console.log("Like")},
          {label: "Comment", onClick: () => console.log("Comment")}
        ]
      },
      {
        videoId: 'd1357924',
        screenColor: 'pink',
        widthRatio: 2,
        heightRatio: 6,
        menuItems: [
          {label: "Skip", onClick: () => console.log("Skip")},
          {label: "Quality", onClick: () => console.log("Quality")},
          {label: "Download", onClick: () => console.log("Download")}
        ]
      },
      {
        videoId: 'e2468135',
        screenColor: 'purple',
        widthRatio: 1,
        heightRatio: 4,
        menuItems: [
          {label: "Rewind", onClick: () => console.log("Rewind")},
          {label: "Comment", onClick: () => console.log("Comment")},
          {label: "Report", onClick: () => console.log("Report")},
          {label: "Watch Later", onClick: () => console.log("Watch Later")},
          {label: "Quality", onClick: () => console.log("Quality")},
        ]
      }
    ];

  }
}
