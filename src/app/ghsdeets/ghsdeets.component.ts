import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghsdeets',
  templateUrl: './ghsdeets.component.html',
  styleUrls: ['./ghsdeets.component.css']
})
export class GHSdeetsComponent implements OnInit {
  profile:any= []
  repos:any= []
  username:string

  constructor(private detailspageServe:DetailspageService) { }

ngOnInit() {



}

findprofile(){
 this.detailspageServe.updateprofile(this.username);
 this.detailspageServe.getprofileInfo(this.username).subscribe(profile=>{
   console.log(profile);
   this.profile=profile;
})
 this.detailspageServe.getprofileRepos().subscribe(repos=>{
   console.log(repos);
   this.repos=repos;
 })

}
}