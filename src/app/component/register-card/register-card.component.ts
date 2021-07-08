import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {
  nameIsValid?: boolean = undefined;
  emailIsValid?: boolean = undefined;
  emailConfirmationIsValid?: boolean = undefined;
  passwordIsValid?: boolean = undefined;
  passwordConfirmationIsValid?: boolean = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  checkName(event: Event): void {
    if ((event.target as HTMLInputElement).value.trim() === "") {
      this.nameIsValid = false;
    }
  }

}
