import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList:Character[] = [
    {id:"", name:"", power:0}
  ]

  deleteCharacter(id:string):void {
    this.onDeleteCharacter.emit(id)
  }
}
