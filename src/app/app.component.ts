import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCardComponent } from './info-card/info-card.component';
import { ICharacter } from './interfaces';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoCardComponent, ModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PotterheadApi';
  characters: ICharacter[] = [];
  selectedCharacter: ICharacter | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCharacters().subscribe((data: ICharacter[]) => {
      this.characters = data;
    });
    initFlowbite();
  }

  openModal(character: ICharacter): void {
    this.selectedCharacter = character;
  }

  closeModal(): void {
    this.selectedCharacter = undefined;
  }
}
