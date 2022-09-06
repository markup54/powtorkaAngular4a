import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})
export class KursComponent implements OnInit {

  @Input() zmiennaImport!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
