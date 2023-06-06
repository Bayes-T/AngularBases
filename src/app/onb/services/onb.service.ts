import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class OnbService {

    public characters:Character[] = [
        {id: uuid(), name: "Tastye", power:500}, 
        {id: uuid(), name: "Piper", power: 100},
        {id: uuid(), name: "Suzzane", power:1200}
      ]
    
      onNewCharacter2(character: Character):void {

        const newCharacter = {id: uuid(), ...character}
        this.characters.push(newCharacter)
      }
    
      deleteCharacterById(id:string):void{
        this.characters = this.characters.filter (character => character.id !== id)
      }
    
}