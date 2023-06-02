import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = ["Yoda", "Anakin", "Obiwan", "R2D2", "C3PO"]
  public deletedHero?:string

  removeLastHero():void {

    this.deletedHero = this.heroNames.pop()
  }
}
