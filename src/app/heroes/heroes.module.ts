import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { HerosComponent } from './components/heros/heros.component';




@NgModule({
    imports: [],
    exports: [ListComponent, HerosComponent],
    declarations: [ListComponent, HerosComponent],
    providers: [],
})
export class HeroesModule { }
