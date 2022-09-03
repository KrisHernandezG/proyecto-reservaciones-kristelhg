import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  title: string = 'Hazel Montengro Fotografia';
  slogan: string = "Inmortalizo momentos a través de narrativas visuales utilizando la fotografía para pintar retratos y paisajes.";
  text: string = "Podes reservar tu cita a la hora y dia que mejor te sirva";
  buttonText: string = "Reservá Aquí"
  name = '';
  phone = '';


  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {})
  }

  setName(value: string) {
    this.name = value;
  }

  setPhone(value: string) {
    this.phone = value;
  }

  ngOnInit(): void {
  }

}
