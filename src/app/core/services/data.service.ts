import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, map } from 'rxjs';
import { Projects } from '../models/projects';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //  private dataUrl = 'http://localhost:3005/projects';
  // private messagesUrl = 'http://localhost:3005/messages';

  // get data
  // get(): Observable<Projects> {
  //   return this.http.get<Projects>(this.dataUrl);
  // }

  // post message form data
  // post(objForm: Message): Observable<Message> {
  //   return this.http.post<Message>(this.messagesUrl, objForm);
  // }

  //---------------------------------------------------------------------
  //-------------------------------------------------------------------------------

  constructor(private http: HttpClient) { }

  private binId = '699f3342ae596e708f4960c7';
  private apiKey = '$2a$10$7V8dWyAEsWZL7MvywynC7OOOGBSVNX2JDV.YJvj9yFKn63sG/jtDG';
  private baseUrl = `https://api.jsonbin.io/v3/b/${this.binId}`;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Master-Key': this.apiKey
  });



  // 🔹 GET projects
  get(): Observable<Projects[]> {
    return this.http.get<any>(this.baseUrl, { headers: this.headers })
      .pipe(
        map(res => res.record.projects)
      );
  }

  // 🔹 POST message (بنجيب الداتا ونضيف عليها ثم نعمل PUT)
  post(objForm: Message): Observable<any> {
    return this.http.get<any>(this.baseUrl, { headers: this.headers }).pipe(
      switchMap(res => {
        const data = res.record;
        data.messages.push(objForm);

        return this.http.put(this.baseUrl, data, { headers: this.headers });
      })
    );
  }
}

