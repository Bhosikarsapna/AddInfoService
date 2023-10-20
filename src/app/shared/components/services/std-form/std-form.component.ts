import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../uuid-service.service';
import { Istd } from 'src/app/shared/models/interface';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
stdForm !: FormGroup
  constructor(
    private _uuidService : UuidService,
    private _stdServices : StudentsService
  ) { }

  ngOnInit(): void {
    this.createStdForm()
  }


  createStdForm(){
    this.stdForm = new FormGroup({
      fname : new FormControl(null, [Validators.required]),
      lname : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      contact : new FormControl(null, [Validators.required]),
    
    })
  }

onStdAdd(){
  if(this.stdForm.valid){
    console.log(this.stdForm.value);
    let stdObj : Istd  = {...this.stdForm.value, stdId : this._uuidService.uuid()};
    console.log(stdObj);
    this._stdServices.addStdObj(stdObj);
    this.stdForm.reset()
  }
}


}
