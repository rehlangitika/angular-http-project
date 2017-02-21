import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Interns} from "../interns";
import {AppService} from "../app.service";

@Component({
  selector: 'login',
  templateUrl: './app/login/login.component.html',
  styleUrls: ['']
})
export class LoginComponent implements OnInit{
  index: number;
  intern: Interns;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: AppService) {}

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = +data.id;
      this.intern = this.service.interns.filter((intern: Interns) => intern.id === this.index)[0];
      /*this.service.addTask().subscribe(data => {
        alert(JSON.stringify(data))
      }, error => {
        alert(error)
      })
    }, err =>{
      console.error(err)
    });*/

    this.service.showTask().subscribe(data => {
      alert(JSON.stringify(data))
    }, error => {
      alert(error)
    })
  }, err =>{
  console.error(err)
});
      /*this.service.getData().then(data => {
        alert(JSON.stringify(data))
      }, error => {
        alert(error)
      })*/
      //this.service.addTask();
  }

  goToHome() {
    this.router.navigate(['home'])
  }
}
