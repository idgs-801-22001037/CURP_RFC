import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { LabelComponent } from '../../components/label/label.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputComponent,
    LabelComponent,
    BtnComponent,
    ModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  curp: string = '';
  rfc: string = '';
  showModal = false;

  btnTypeModal: string = 'btn-primary';
  btnTextModal: string = 'Aceptar';
  btnIconModal: string = 'bi bi-patch-check';
  tituloModal: string = 'Validación';
  contenidoModal: string = '';

  validarCurp() {
    const regexCurp = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
    const curp = this.curp.toUpperCase();
    this.curp = curp;

    if (regexCurp.test(curp)) {
      this.mostrarModal('CURP válida', 'btn-success', 'bi bi-check-circle-fill');
    } else {
      this.mostrarModal('CURP inválida', 'btn-danger', 'bi bi-x-circle-fill');
    }
  }

  validarRfc() {
    const regexRfc = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/;
    const rfc = this.rfc.toUpperCase();
    this.rfc = rfc;

    if (regexRfc.test(rfc)) {
      this.mostrarModal('RFC válido', 'btn-success', 'bi bi-check-circle-fill');
    } else {
      this.mostrarModal('RFC inválido', 'btn-danger', 'bi bi-x-circle-fill');
    }
  }

  compararCurpRfc() {
    const curp10 = this.curp.slice(0, 10).toUpperCase();
    const rfc10 = this.rfc.slice(0, 10).toUpperCase();

    if (curp10 === rfc10) {
      this.mostrarModal('Los primeros 10 caracteres coinciden', 'btn-success', 'bi bi-check-circle-fill');
    } else {
      this.mostrarModal('No coinciden los primeros 10 caracteres', 'btn-danger', 'bi bi-x-circle-fill');
    }
  }

  mostrarModal(mensaje: string, tipoBtn: string, icono: string) {
    this.contenidoModal = mensaje;
    this.btnTypeModal = tipoBtn;
    this.btnIconModal = icono;
    this.showModal = true;
  }
}
