import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, BtnComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalShow = false;
  @Input() titulo = "generic";
  @Input() contenido = "generic content";
  @Input() clasBtnModal=""
  @Input() textBtnModal=""
  @Input() iconBtnModal=""

  @Output() onClose = new EventEmitter<void>();

  cerrarModal() {
    this.onClose.emit();
  }
}
