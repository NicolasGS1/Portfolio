import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'

declare var VANTA: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnDestroy{
  private vantaEffect: any;
  ngAfterViewInit(): void {setTimeout(() => {
      if (typeof VANTA !== 'undefined') {
        this.vantaEffect = VANTA.GLOBE({
          el: document.getElementById('VANTA'),
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffffff,
          backgroundColor: 0x000000
        });
      } else {
        console.error('VANTA is not defined');
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}

