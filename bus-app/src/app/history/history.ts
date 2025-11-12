import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './history.html',
  styleUrls: ['./history.css']  // added to apply CSS
})
export class HistoryComponent implements OnInit {
  bookings: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId')!;
    this.api.getBookings(userId).subscribe((res: any) => {
      this.bookings = res;
    });
  }
}
