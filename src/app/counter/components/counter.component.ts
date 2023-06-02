import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h2>Counter: {{counter}}</h2>

<button (click)="increaseBy(1)">Agregar</button>
<button (click)="increaseBy(-1)">Disminuir</button>

<hr>

<button (click)="reset()">Reset</button>
    `
})

export class CounterComponent  {
    public counter:number = 10

    increaseBy(value:number):void{
      this.counter += value
    }
  
    reset():void{
      this.counter = 10
    }
}


