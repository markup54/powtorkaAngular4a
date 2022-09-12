import { Component, OnInit , Input} from '@angular/core';
import { Osoba } from '../osoba';
import { Szkolenia } from '../szkolenia';
import { Szkolenie } from '../szkolenie';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})
export class KursComponent implements OnInit {
  @Input() aktualny! :number;
  kursy:Szkolenie[] =Szkolenia.kursy;
  @Input() zmiennaImport!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
