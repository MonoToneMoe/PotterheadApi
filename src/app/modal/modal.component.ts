import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() character?: ICharacter;
  @Output() closeModal = new EventEmitter<void>();

  placeholder = 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png';

  onClose() {
    this.closeModal.emit();
  }
}
