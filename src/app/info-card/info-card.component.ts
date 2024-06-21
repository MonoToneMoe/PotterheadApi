import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() item?: ICharacter;

  placeholder = 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png';
}
