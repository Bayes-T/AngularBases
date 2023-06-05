import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character:Character = {
    name: "",
    power: 0
  }

  emitCharacter():void{

    if(this.character.name.length === 0 || this.character.power <= 0) return
    this.onNewCharacter.emit(this.character)

    this.character = {name: "", power:0}
  }
}
