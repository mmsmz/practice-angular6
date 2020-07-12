import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbas',
  templateUrl: './appbas.component.html',
  styleUrls: ['./appbas.component.css']
})
export class AppbasComponent implements OnInit {
  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDeatils(){
     this.showSecret = !this.showSecret;
     //this.log.push(this.log.length + 1);
     this.log.push(new Date());
  }

}