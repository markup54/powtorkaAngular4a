import { Osoba } from "./osoba";

export class Szkolenie{
    private tytul:String ;
    private tresc:String;
    private prowadzacy :Osoba ;

    constructor (tytul:string, tresc:string, prowadzacy:Osoba){
        this.tytul = tytul;
        this.tresc = tresc;
        this.prowadzacy = prowadzacy;
    }
    getTytul(){
        return this.tytul;
    }
    setTytul(wartosc:string){
        this.tytul = wartosc;
    }
    getTresc (){
        return this.tresc;
    }
    getProwadzący(){
        return this.prowadzacy;
    }

}