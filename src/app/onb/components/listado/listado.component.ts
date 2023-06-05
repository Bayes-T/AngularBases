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
  onDeleteCharacter: EventEmitter<number> = new EventEmitter()

  @Input()
  public characterList:Character[] = [
    {name:"", power:0}
  ]



  deleteCharacter(index:number):void {
    this.onDeleteCharacter.emit(index)

    index = 0
    
  }
}
