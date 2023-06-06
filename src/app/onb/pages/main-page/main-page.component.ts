import { Component, TestabilityRegistry } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OnbService } from '../../services/onb.service';

@Component({
  selector: 'app-onb-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private onbservice: OnbService){}

  get characters(): Character[] {
    return [...this.onbservice.characters]
  }

  onDeleteCharacter(id:string):void{
    this.onbservice.deleteCharacterById(id)
  }

  onAddCharacter(character:Character):void{
    this.onbservice.onNewCharacter2(character)
  }

}
