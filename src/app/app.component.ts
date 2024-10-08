import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { JsonTableComponent } from "./components/json-table/json-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, JsonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'json-to-table-converter';
}
