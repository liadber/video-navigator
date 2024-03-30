import {Component} from '@angular/core';
import {VideoManagerComponent} from "./components/video-manager/video-manager.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideoManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'video-navigator';
}
