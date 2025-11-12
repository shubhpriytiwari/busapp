import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']   // added to apply styling
})
export class DashboardComponent implements OnInit {
  wallet = 0;
  buses: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId')!;

    this.api.getWallet(userId).subscribe((res: any) => {
      this.wallet = res.walletBalance;
    });

    this.api.getBuses().subscribe((res: any) => {
      this.buses = res;
    });
  }

  book(bus: any) {
    this.router.navigate(['/booking'], { state: { bus } });
  }
}
