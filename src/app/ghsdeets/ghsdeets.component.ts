import { Component, OnInit } from '@angular/core';
import { GhsService } from '../ghss/ghs.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ghsdeets',
  templateUrl: './ghsdeets.component.html',
  styleUrls: ['./ghsdeets.component.css']
})
export class GHSdeetsComponent implements OnInit {
  profile:any= []
  repos:any= []
  username:string

  constructor(private ghsServe:GhsService) { }

ngOnInit() {
}

findprofile(){
 this.ghsServe.updateprofile(this.username);
 this.ghsServe.getprofileInfo(this.username).subscribe(profile=>{
   console.log(profile);
   this.profile=profile;
})
 this.ghsServe.getprofileRepos().subscribe(repos=>{
   console.log(repos);
   this.repos=repos;
 })

}
}