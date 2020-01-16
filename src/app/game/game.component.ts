import { Component, OnInit } from '@angular/core';
import { PutovService } from '../putov-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  service: PutovService;
  number: Observable<number>;


  constructor(service: PutovService) {
    this.service = service;
  }


  ngOnInit() {
     this.number = this.service.getSomeNumber();
  }

}
