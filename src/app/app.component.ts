import { Component, OnInit } from '@angular/core';
import {Interns} from './interns';
import {AppService} from "./app.service";
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',

  styles: ['h1{ color: red }'],
  providers: [AppService]
})
export class AppComponent implements OnInit { name = 'Gitika';
  boolVariable: boolean = true
/*submit() {
  /*this.boolVariable = false*/
    /*alert(JSON.stringify(this.intern));
}*/
 /*interns: Interns[] = [{
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
   }
 ];

clickMe(param: string) {
  alert(param);
}

intern :Interns = new Interns();*/
 myInterns: Interns[];
 ngOnInit() {
   this.myInterns = this.service.interns;
 }
 constructor(private service: AppService){

 }
}
