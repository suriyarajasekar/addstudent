import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  constructor(private http: HttpClient) { }
  postStudent(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
    pipe(map((res: any) => {
      return res;
    }))
  }
}
