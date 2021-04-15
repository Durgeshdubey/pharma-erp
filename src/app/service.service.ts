import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
          providedIn: "root"
})
export class ServiceService {
            //  BASE_URL ="http://localhost:3000"
         BASE_URL = "http://173.212.207.17:5022";
         // BASE_URL ="http://192.168.0.126:4000"
          constructor(private http: HttpClient) {}
          getAllData(api_url) {
                    return this.http.get(this.BASE_URL + api_url);
          }
          postAllData(data, api_url) {
                    //  console.log(data,"service");

                    return this.http.post(this.BASE_URL + api_url, data);
          }
}
