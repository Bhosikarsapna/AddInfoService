import { Injectable } from '@angular/core';
import { Istd } from '../../models/interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
stdArray : Array<Istd> = [];
  constructor() { }

  addStdObj(stdObj : Istd){
    // api call to add to obj
    this.stdArray.push(stdObj)
  }

  

  getAllStds() : Array<Istd>{
    return this.stdArray
  }
}
