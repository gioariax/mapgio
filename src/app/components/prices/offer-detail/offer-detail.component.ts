import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Coverage, Offer } from '../../../models/prices.interface';

@Component({
  selector: 'app-offer-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './offer-detail.component.html',
  styleUrl: './offer-detail.component.scss',
})
export class OfferDetailComponent {
  public offer = input.required<Offer>();
  public coverages = input.required<Coverage[]>();
  public form = input.required<FormGroup>();

  isSelected() {
    return this.offer().id === this.form().get('selectedOffer')?.value;
  }
}
