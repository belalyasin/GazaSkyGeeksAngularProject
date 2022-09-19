import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiLink: string ='https://reqres.in/api/users';
  constructor(private http: HttpClient) { }
  getAll(page:number,perPage:number): Observable<User[]>{
    let params = new HttpParams();
    params=params.append('page',page);
    params=params.append('per_page',perPage);
    return this.http.get<User[]>(this.apiLink,{
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      observe:'body',
      params:params
    })
  }
  getById(id:string): Observable<User>{
    return this.http.get<User>(`${this.apiLink}/${id}`,{
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      observe:'body'
    }).pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }
  add(user:User): Observable<User> {
    return this.http.post<User>(this.apiLink,user,{
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      observe:'body'
    }
    )
  }
  update(id:number,user:User){
    return this.http.patch<User>(`${this.apiLink}/${id}`,user,{
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      observe:'body',
    }
    )
  }
  delete(id:number):Observable<any>{
    return this.http.delete<User>(`${this.apiLink}/${id}`,{
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      observe:'body'
    })
  }
}
