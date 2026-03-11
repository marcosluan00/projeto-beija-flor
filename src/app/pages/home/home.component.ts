import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Carousel logic
  carouselImages = [
    { url: 'beija-flor-junina-apresentacao-2025-sim-02.png', title: 'As Cores do Amor', subtitle: 'Campeã 2025' },
    { url: 'beija-flor-junina-apresentacao-2024-sim-01.png', title: 'Água Fonte da Vida', subtitle: 'Espetáculo 2024' },
    { url: 'me-beija-2024-folioes-sim-01.png', title: 'Bloco Me Beija', subtitle: 'Carnaval 2024' }
  ];
  
  currentSlide = signal(0);
  private carouselInterval: any;

  // History Clock logic
  foundationDate = new Date('2005-03-05T00:00:00');
  currentTime = signal(new Date());
  
  years = computed(() => {
    const diff = this.currentTime().getTime() - this.foundationDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  });

  days = computed(() => {
    const diff = this.currentTime().getTime() - this.foundationDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  });

  ngOnInit() {
    // Auto-advance carousel every 5 seconds
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);

    // Update clock every second
    setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    this.currentSlide.update(val => (val + 1) % this.carouselImages.length);
  }

  prevSlide() {
    this.currentSlide.update(val => (val - 1 + this.carouselImages.length) % this.carouselImages.length);
  }

  setSlide(index: number) {
    this.currentSlide.set(index);
  }
}