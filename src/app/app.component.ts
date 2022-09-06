import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'powtorzenie';
  kursyProgramowania = ['JS', "Python", "PHP", "node.js"];
  urlZdj1: string = "assets/images/zdj1.jpg";
  urlZdj2: string = "assets/images/zdj2.jpg";
  brak: string = "assets/images/brak.jpg";
  aktywne: boolean = true;
  licznik: number = 1;
  zwieksz(): void {
    this.licznik++;
  }
  zmiana(): void {
    this.aktywne = !this.aktywne;
  }
  kolory: string[] = [
    "red",
    "blue",
    "green",
    "yellow"
  ]
  wybrany: number = 0;
  formatuj(): void {
    this.wybrany++;
    if (this.wybrany >= this.kolory.length) {
      this.wybrany = 0;

    }
  }
  wybranyKurs:number=0;
}
