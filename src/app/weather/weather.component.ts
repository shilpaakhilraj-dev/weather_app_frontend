import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})

export class WeatherComponent {

  @ViewChild('resultsSection') resultsSection!: ElementRef;

  city = '';

  units = 'metric';

  data: any;

  isLoading: boolean = false; 

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    this.isLoading = true; 
    this.weatherService.getWeather(this.city, this.units)
      .subscribe({
        next: (res) => {
          this.data = res;
          this.isLoading = false; 
          this.scrollToResults();
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false; 
        }
    });
  }

  scrollToResults() {
    // We use setTimeout to give Angular a split-second to render the *ngIf block 
    // into the DOM before we try to scroll to it.
    setTimeout(() => {
      if (this.resultsSection) {
        this.resultsSection.nativeElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' // 'nearest' prevents scrolling too far down
        });
      }
    }, 100);
  }
}
