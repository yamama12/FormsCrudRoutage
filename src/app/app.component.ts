import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Attention au nom (styleUrls au pluriel)
  standalone: true,
  imports: [RouterOutlet], // Ajoutez les modules nécessaires ici
})
export class AppComponent {
  title = 'MAKE_UP';
}
