import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aru',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './aru.component.html',
  styleUrl: './aru.component.css'
})
export class AruComponent {
  ar=35;
}
