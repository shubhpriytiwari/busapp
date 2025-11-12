import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']  // added to apply styling
})
export class BookingComponent {
  bus: any;

  constructor(private router: Router, private api: ApiService) {
    this.bus = history.state.bus;
  }

  bookNow() {
    const userId = localStorage.getItem('userId')!;
    this.api.book({ userId, busId: this.bus.busId }).subscribe(
      () => {
        alert('Booking Successful');
        this.router.navigate(['/history']);
      },
      () => alert('Insufficient Balance')
    );
  }
}
