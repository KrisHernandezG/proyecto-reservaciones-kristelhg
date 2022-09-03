import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}
