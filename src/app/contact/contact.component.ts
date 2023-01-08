import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  datos: FormGroup;

  constructor(
    private http: HttpClient,
    private _translationLoaderService: TranslationLoaderService
  ) {
    this._translationLoaderService.loadTranslations(english, french);

    this.datos = new FormGroup({
      identite: new FormControl('', Validators.required),
      // email: new FormControl('', Validators.required),
      // object: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void { }

  envioCorreo() {
    let params = {
      identite: this.datos.value.identite,
      // email: this.datos.value.email,
      email: 'stivengarcia1855@gmail.com',
      // object: this.datos.value.object,
      comment: this.datos.value.comment,
    }

    this.http.post('http://localhost:3000/envio', params).subscribe(resp => {
      console.log(resp)
    })
  }
}
