import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://195.234.122.131:8220/Controller/all_books');
  }

  addBook(queryParams: any) {
    return this.http.post(
      'http://195.234.122.131:8220/Controller/add_book',
      null,
      { params: queryParams }
    );
  }
}
