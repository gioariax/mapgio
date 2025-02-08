import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent {

  public form = input.required<FormGroup>();

}
