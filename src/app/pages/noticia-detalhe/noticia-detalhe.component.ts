import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NEWS_DATA, NewsItem } from '../../shared/data/news-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './noticia-detalhe.component.html',
  styleUrl: './noticia-detalhe.component.css'
})
export class NoticiaDetalheComponent implements OnInit {
  news: NewsItem | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.news = NEWS_DATA.find(item => item.id === id);
    }
  }
}
