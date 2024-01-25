import { Component } from '@angular/core';

@Component({
  selector: 'app--heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;
  public cahngeName: boolean = true;
  public changeAgeb: boolean=true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero(value:string):void {
    this.name= value;
    this.cahngeName = false;
  }

  changeAge(value:number): void {
    this.age=value;
    this.changeAgeb=false
  }
}
