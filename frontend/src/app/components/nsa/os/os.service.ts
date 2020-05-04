import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Os } from './os.model';

@Injectable({
  providedIn: "root",
})
export class OsService {
  baseUrl = "http://localhost:3000/oss";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(Os: Os): Observable<Os> {
    return this.http.post<Os>(this.baseUrl, Os).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Os[]> {
    return this.http.get<Os[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Os> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Os>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(Os: Os): Observable<Os> {
    const url = `${this.baseUrl}/${Os.id}`;
    return this.http.put<Os>(url, Os).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Os> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Os>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
