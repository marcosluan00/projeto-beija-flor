import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NEWS_DATA } from '../../shared/data/news-data';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  newsList = NEWS_DATA;
}
