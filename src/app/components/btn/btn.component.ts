import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
@Input() textBtn:string="btnGeneric"
@Input() clasExtra:string=""
@Input() iconBtn:string="bi bi-shuffle"

}
