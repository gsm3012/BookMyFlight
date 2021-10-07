import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class flightsearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+[ ]?[a-zA-Z]+[ ]?[a-zA-Z]+[ ]?[a-zA-Z]+')]),
    userEmail : new FormControl('', [Validators.required, Validators.email]),
    userMobile : new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    userPassword : new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

}
