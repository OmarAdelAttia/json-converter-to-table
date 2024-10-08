import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  logoImg = signal<string>("../../../assets/imgs/image.png");

}
