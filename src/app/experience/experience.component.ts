import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  markers = [];
  lat = 4.687975738733552;
  lng = -74.05721515417099;
  zoom = 11;
  title = '';
  description: any;
  duration: any;
  position: any;
  template: TemplateRef<any>;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.markers = [
      {
        lat: 4.702562 ,
        lng: -74.053795,
        label: 'S',
        draggable: false
      },
      {
        lat: 4.727989053380723,
        lng: -74.05272245407104,
        label: 'E',
        draggable: false
      }
    ];
  }

  showModal(ev, templates) {
    this.modalRef = this.modalService.show(templates, { backdrop: 'static', keyboard: false });
    if (ev === 0) {
      this.title = 'Stefanini Colombia';
      this.duration = 'Abril 2018 - Actualidad';
      this.position = 'Desarrollador Angular';
      this.description = 'Desarrollo del portal web de enfocado al reporte, revisión y declaracion de siniestros para la compañía de seguros Cardif, utilizando Angular 4+, Bootstrap (para el diseño responsive), HTML 5 y CSS3, haciendo uso de la herramienta Git para el versionamiento de código. Dentro del proyecto se hizo uso de la metodología de desarrollo SCRUM para la gestión del proyecto.';
    } else if (ev === 1) {
      this.title = 'Exsis Sorftware y Soluciones SAS';
      this.duration = 'Febrero 2015 – Abril 2018';
      this.position = 'Ingeniero Junior';
      this.description = 'Dentro de la empresa me desempeñé como desarrollador web front-end y tester en diferentes proyectos. Fui encargado del diseño de casos de uso, especificación de requerimientos y casos de prueba haciendo uso de Enterprise Architect de un proyecto interno. En los diferentes proyectos se hizo uso Javascript, CSS3 y HTML5, Angular JS 1.6 y JQuery, Adicionalmente, realicé soporte para inversiones comerciales San German donde desempeñe funciones para generación de reportes. Dentro de los proyectos se utilizó la metodología de desarrollo SCRUM.';
    }
  }
}

