import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.scss']
})
export class SectionServicesComponent implements OnInit {
  titulo: string = 'Servicios';
  services = [
    {
      title: "Servicio 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend dui quis tortor eleifend, ultricies tincidunt tellus semper. Morbi tempus cursus est non luctus."
    },

    {
      title: "Servicio 2",
      description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sodales ut est sit amet euismod. Nam at varius lectus."
    },

    {
      title: "Servicio 3",
      description: " Donec sit amet arcu ac leo porta scelerisque eget nec arcu. Integer lobortis, quam quis tempor volutpat, orci velit sollicitudin urna, vel suscipit enim quam nec nibh."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
