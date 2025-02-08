import { Component, input } from '@angular/core';
import { Coverage } from '../../../models/prices.interface';

@Component({
  selector: 'app-coverages',
  standalone: true,
  imports: [],
  templateUrl: './coverages.component.html',
  styleUrl: './coverages.component.scss'
})
export class CoveragesComponent {

  public coverages = input.required<Coverage[]>();
  
}
