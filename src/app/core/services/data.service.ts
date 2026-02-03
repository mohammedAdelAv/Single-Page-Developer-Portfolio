import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataUrl = 'http://localhost:3005/projects';
  private messagesUrl = 'http://localhost:3005/massages';

  constructor(private http: HttpClient) { }

  // get data
  get(): Observable<Projects> {
    return this.http.get<Projects>(this.dataUrl);
  }

  //---------------------------------------------------------------------

  // post message form data
  post(objForm: Message): Observable<Message> {
    return this.http.post<Message>(this.messagesUrl, objForm);
  }

}
