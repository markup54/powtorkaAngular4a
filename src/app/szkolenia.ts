import { Osoba } from "./osoba";
import { Szkolenie } from "./szkolenie";
export
class Szkolenia{
public static kursy:Szkolenie [] =[
    new Szkolenie ("Programowanie w JS", 
                  "Kurs dla początkujących w www",
                  new Osoba("Jan","Rzepa")),
    new Szkolenie ("Algorytmy i struktury danych", 
                  "Kurs dla początkujących w algorytmach",
                  new Osoba("Edyta","Nowak")),
    new Szkolenie("Angular SPA", "dla osób już programujących",
                new Osoba("Genowefa","Pigwa")),

  ];
}