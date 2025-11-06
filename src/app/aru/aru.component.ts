import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aru',
  standalone: true,
  imports: [
    CurrencyPipe, 
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './aru.component.html',
  styleUrl: './aru.component.css'
})
export class AruComponent {
  ar=35;
  isAdmin = true;
  dateNow = new Date();

}
