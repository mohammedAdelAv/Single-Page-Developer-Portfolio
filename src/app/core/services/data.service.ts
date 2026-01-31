import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataUrl = 'http://localhost:3005/projects';

  constructor(private http: HttpClient) { }

  // get data
  get(): Observable<Projects> {
    return this.http.get<Projects>(this.dataUrl);
  }
}
