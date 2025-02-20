import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Coverage } from '../../../models/prices.interface';

@Component({
  selector: 'app-coverages',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './coverages.component.html',
  styleUrl: './coverages.component.scss',
})
export class CoveragesComponent {
  public coverages = input.required<Coverage[]>();
  public showDetail = output<Coverage>();

  showCoverageDetail(coverage: Coverage) {
    this.showDetail.emit(coverage);
  }
}
