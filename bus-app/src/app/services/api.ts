import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  base = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  login(data: any) {
    return this.http.post(`${this.base}/login`, data);
  }

  getWallet(userId: string) {
    return this.http.get(`${this.base}/wallet/${userId}`, this.getHeaders());
  }

  getBuses() {
    return this.http.get(`${this.base}/buses`, this.getHeaders());
  }

  book(data: any) {
    return this.http.post(`${this.base}/book`, data, this.getHeaders());
  }

  getBookings(userId: string) {
    return this.http.get(`${this.base}/bookings/${userId}`, this.getHeaders());
  }
}
