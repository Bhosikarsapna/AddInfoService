import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Istd } from '../../models/interface';

@Component({
  selector: 'app-std-info',
  templateUrl: './std-info.component.html',
  styleUrls: ['./std-info.component.scss']
})
export class StdInfoComponent implements OnInit {
stdInfo : Array<Istd> = [] 
  constructor(
    private _stdService : StudentsService
  ) { }

  ngOnInit(): void {
    this.stdInfo = this._stdService.getAllStds()
  }

}
