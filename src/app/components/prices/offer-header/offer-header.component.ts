import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Offer } from '../../../models/prices.interface';

@Component({
  selector: 'app-offer-header',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './offer-header.component.html',
  styleUrl: './offer-header.component.scss',
})
export class OfferHeaderComponent {
  public form = input.required<FormGroup>();
  public offer = input.required<Offer>();

  isSelected() {
    return this.offer().id === this.form().get('selectedOffer')?.value;
  }
}
