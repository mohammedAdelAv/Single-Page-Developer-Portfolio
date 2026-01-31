import { Component, signal } from '@angular/core';
import { SinglePage } from './features/single-page/single-page';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SinglePage ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Single-page-developer-portfolio');
}
