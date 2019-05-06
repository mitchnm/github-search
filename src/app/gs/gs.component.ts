import { Component, OnInit } from '@angular/core';
import {GhsService} from '../ghss/ghs.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-gs',
  templateUrl: './gs.component.html',
  styleUrls: ['./gs.component.css']
})
export class GSComponent implements OnInit {
  profile: any [];
  repos:any [];
  username: string;

  constructor(private ghsServe: GhsService) { }

  ngOnInit() {
  }

}
