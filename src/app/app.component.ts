import { Component } from '@angular/core';
import {GhsService} from './ghss/ghs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[GhsService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Githubsearch';
}
