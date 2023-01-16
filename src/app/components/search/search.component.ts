import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  textSearch: string = '';

  constructor(private router: Router) {}

  searchPolemon() {
    if (this.textSearch.trim().length === 0) {
      return;
    }

    this.router.navigate(['/detail', this.textSearch.trim().toLowerCase()]);

    this.textSearch = '';
  }
}
