import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {

  public name:string = "Ironman"
  public age:number = 45

  get capitalizeName():string {
    return this.name.toUpperCase()
  }

  heroDescription():string{
    return `${this.name} tiene ${this.age} años`
  }

  changeHero():void {
    this.name = "Yoda"
  }

  changeAge():void {
    this.age = 1000
  }

  reset():void{
    this.name = "Ironman"
    this.age = 45
  }
}
