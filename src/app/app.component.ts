import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'calc';
  Num1Input: number = 1;
  Num2Input: number = 2;
  Num3Input: number = 3;
  Num4Input: number = 4;
  Num5Input: number = 5;
  Num6Input: number = 6;
  Num7Input: number = 7;
  Num8Input: number = 8;
  Num9Input: number = 9;
  Num0Input: number = 0;
  displayedDigits: number[] = [0];
/*      REMOVE COMMENT IF THE NEXT ATTEMPT DOESN'T WORK
  setProperty(event: Event){
    let target = event.target as HTMLInputElement
    let property: string = target.id
    switch(property){
      case "Num1Input":
        this.displayedDigits.push(this.Num1Input);
        break;
      case "Num2Input":
        this.displayedDigits.push(this.Num1Input);
        break;

    }
        */
setProperty(event: Event) {
  const buttonValue = (event.target as HTMLButtonElement).textContent;
  if (buttonValue){
    const digit = parseInt(buttonValue, 10);
    this.displayedDigits.push(digit);
  }
}
}

