import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { OsFather } from './os-father.model';

@Injectable({
  providedIn: "root",
})
export class OsFatherService {
  baseUrl = "http://localhost:3000/ossfather";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(OsFather: OsFather): Observable<OsFather> {
    return this.http.post<OsFather>(this.baseUrl, OsFather).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<OsFather[]> {
    return this.http.get<OsFather[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<OsFather> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<OsFather>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(OsFather: OsFather): Observable<OsFather> {
    const url = `${this.baseUrl}/${OsFather.id}`;
    return this.http.put<OsFather>(url, OsFather).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<OsFather> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<OsFather>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
