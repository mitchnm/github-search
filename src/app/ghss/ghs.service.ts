import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GhsService {
  private username: string;
  private apikey :string = "1ad71de384e256c9f32cde9bc878b6052f53b84f";

  constructor(private http:HttpClient) { 
    console.log("service is ready");
  }
  getprofileInfo(username) {
    console.log(this.username);
    return this.http.get("https://api.github.com/users/"+username+"?access_token" + this.apikey)
  }
  getprofileRepos() {
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos" + "?access_token" + this.apikey)
  }
updateprofile(username:string) {
  this.username=username
}
}
