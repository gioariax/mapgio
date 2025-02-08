import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActionBarComponent } from '../../components/action-bar/action-bar.component';
import { PricesComponent } from '../../components/prices/prices.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [PricesComponent, ActionBarComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export default class OverviewComponent {
  public form = new FormGroup({});
  public prices = {
    coverages: [
      {
        id: 1,
        name: 'Responsabilidad Civil obligatoria',
        detail: [
          {
            id: 11,
            name: 'Hasta 50.000.000€',
          },
          {
            id: 12,
            name: 'Hasta 100.000.000€',
          },
          {
            id: 13,
            name: 'Hasta 200.000.000€',
          },
        ],
      },
      {
        id: 2,
        name: 'Responsabilidad Civil suplementaria',
      },
      {
        id: 3,
        name: 'Defensa jurídica',
      },
      {
        id: 4,
        name: 'Seguro conductor',
      },
      {
        id: 5,
        name: 'Asistencia en viaje',
      },
    ],
    offers: [
      {
        id: 1,
        price: 100,
        name: 'Todo Riesgo',
        coverages: {
          1: {
            type: 'icon',
            value: 'Si',
          },
          2: {
            type: 'icon',
            value: 'Si',
          },
          3: {
            type: 'icon',
            value: 'Si',
          },
          4: {
            type: 'icon',
            value: 'Si',
          },
          5: {
            type: 'icon',
            value: 'Si',
          },
        },
        recommended: true,
      },
      {
        id: 2,
        price: 200,
        name: 'Terceros',
        coverages: {
          1: {
            type: 'icon',
            value: 'Si',
          },
          2: {
            type: 'icon',
            value: 'Si',
          },
          3: {
            type: 'icon',
            value: 'Si',
          },
        },
      },
      {
        id: 3,
        price: 300,
        name: 'Mínimo',
        coverages: {
          1: {
            type: 'icon',
            value: 'Si',
          },
          2: {
            type: 'icon',
            value: 'Si',
          },
        },
      },
    ],
  };
}
