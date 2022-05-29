import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
  registrazioneForm: FormGroup 
  constructor(private fb:FormBuilder) {
    this.registrazioneForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.pattern, Validators.minLength(4)]],
      email: ["", [Validators.email,Validators.required]],
    })
   }

  ngOnInit() {
  }

}
