import {Injectable} from "@angular/core";
import {Interns} from "./interns";
import {Observable} from "rxjs/Observable"
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Http, Headers} from "@angular/http";

@Injectable()

export class AppService{
  interns: Interns[] = [{
    name: 'Gitika',
    id : 1
  },
    {
      name: 'Raman',
      id : 2
    },
    {
      name: 'Anuj',
      id : 3
    },
    {
      name: 'Nikita',
      id : 4
    },
    {
      name: 'Divya',
      id : 5
  }];
constructor(private http: Http){

}
  /*getData() {
    return Observable.of<any>(this.interns)
  }*/

  /*getData() {
    return Promise.resolve<any>(this.interns)
  }*/

  showTask(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type' : 'application/json'
    });
    let obj = {
      date: 'jhdj',
      title: 'AKdknhfjd',
      description: 'adfjd',
      priority: 'high'
    };
    return this.http.get('http://localhost:9000/get/all',
        {headers: jsonHeader}).map(data => {
      return this.extractData(data)}).catch(e => this.handleError(e));
  }

  addTask(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type' : 'application/json'
    });
    let obj = {
      date: 'jhdj',
      title: 'AKdknhfjd',
      description: 'adfjd',
      priority: 'high'
    };

    /*return this.http.get('http://192.168.2.133:9000/get/all',{headers:jsonHeader}).map((response: any) => {
      this.extractData(response)
    });*/
    return this.http.post('http://localhost:9000/add',obj,
      {headers: jsonHeader}).map(data => {
        return this.extractData(data)}).catch(e => this.handleError(e));
  }

  extractData(res: any) {
    let body = res.json();
    alert(body);
    return body;
 }

 private handleError(error:any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      }
      else {
        errMsg = 'Something went wrong. Please try again later.';
      }
    }
      catch(e) {
        errMsg = 'Something went wrong. Please try again later.'
      }
      return Observable.throw(new Error(errMsg));
    }

}
