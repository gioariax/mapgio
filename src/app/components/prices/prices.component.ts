import { Component, input, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Coverage, Offer, Prices } from '../../models/prices.interface';
import { CoveragesComponent } from './coverages/coverages.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferHeaderComponent } from './offer-header/offer-header.component';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CoveragesComponent, OfferHeaderComponent, OfferDetailComponent, MatRadioModule, ReactiveFormsModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
})
export class PricesComponent implements OnInit {
  public form = input.required<FormGroup>();
  public prices = input.required<Prices>();
  public readonly = input<boolean>(false);

  public coverages = signal<Coverage[]>([]);
  public offers = signal<Offer[]>([]);

  ngOnInit(): void {
    this.coverages.set(this.prices().coverages);
    this.offers.set(this.prices().offers);

    this.inializeForm();
  }

  inializeForm() {
    const selectedOffer = this.offers().find((offer) => offer.selected)?.id;
    this.form().addControl(
      'selectedOffer',
      new FormControl({ value: selectedOffer, disabled: this.readonly() }, Validators.required)
    );
  }

  selectOffer(offerSelected: Offer) {
    const newOffers = this.offers().map((offer) => ({
      ...offer,
      selected: offer.id === offerSelected.id,
    }));
    this.offers.set(newOffers);
  }
}
