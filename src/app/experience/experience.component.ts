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
      this.title = 'title 0';
      this.description = 'description 0, Lorem ipsum dolor sit amet consectetur adipiscing elit eget class, feugiat eleifend ad felis tellus hac neque nam, lobortis commodo vulputate accumsan at vel mauris primis. Pellentesque nunc nisi netus himenaeos massa magnis augue, quis cursus elementum phasellus feugiat habitant torquent, semper parturient viverra neque ornare porta. Ornare cras leo gravida condimentum mattis proin et euismod duis sociis tempor, himenaeos nascetur morbi metus odio inceptos velit fames nostra eu';
    } else if (ev === 1) {
      this.title = 'title 1';
      this.description = 'description 0, Lorem ipsum dolor sit amet consectetur adipiscing elit eget class, feugiat eleifend ad felis tellus hac neque nam, lobortis commodo vulputate accumsan at vel mauris primis. Pellentesque nunc nisi netus himenaeos massa magnis augue, quis cursus elementum phasellus feugiat habitant torquent, semper parturient viverra neque ornare porta. Ornare cras leo gravida condimentum mattis proin et euismod duis sociis tempor, himenaeos nascetur morbi metus odio inceptos velit fames nostra eu';
    }
  }
}
