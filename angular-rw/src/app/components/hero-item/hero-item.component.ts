import { Component,computed,input, output } from '@angular/core';
import { Hero, PowerStat } from '../../shared/interfaces/hero.interface';
import { HeroPowerstatsChange } from '../../shared/interfaces/hero-powerstats-change.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-item',
  imports:[CommonModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent {


  hero = input.required<Hero>(); /* el input he tenido quemeterlo en components sino da error */

  powerstatsChange=output<HeroPowerstatsChange>();

  isHeroVillain=  computed(()=>this.hero().alignment=== 'bad'); 

  decrementPowerStats(powerstat: PowerStat): void {

this.powerstatsChange.emit({hero: this.hero(),powerstat, value:-1})

    /* const value = this.hero().powerstats[powerstat];

    if (value > 0) {
      this.hero().powerstats[powerstat]--;
      
    } */
  }

  incrementPowerStats(powerstat:PowerStat):void{

this.powerstatsChange.emit({hero: this.hero(),powerstat,value: 1})
   /*  const value = this.hero().powerstats[powerstat];
    if (value<100) {
      this.hero().powerstats[powerstat]++; /* this.hero.powerstats[powerstat] = this.hero.powerstats[powerstat] + 1;  */
       
    }

 
  }
/* } */
