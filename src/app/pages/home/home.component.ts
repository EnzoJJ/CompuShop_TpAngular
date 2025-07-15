import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor(private router: Router) {}

  filtrarCategoria(categoria: string) {
    this.router.navigate(['/productos'], { queryParams: { categoria } });
  }

}
