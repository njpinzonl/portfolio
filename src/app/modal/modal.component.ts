import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() template: TemplateRef<any>;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.modalRef = this.modalService.show(this.template, { backdrop: 'static', keyboard: false });
  }

}
