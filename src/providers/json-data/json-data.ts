import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/////import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the JsonDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonDataProvider {

  constructor(public http:  HttpClient) {
    console.log('Hello JsonDataProvider Provider');
  }

 /*-------------------------------api-romans----------------------------------*/
  apiUrl_romans = 'http://ebook.iptvmedia.me/Api/liste_romans.php';
 
 getromans(): Observable<{}> {
  return this.http.get(this.apiUrl_romans).pipe(
    map(this.extractData),
    catchError(this.handleError)
  );
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
/*------------------------------detail-romans----------------------------------*/

apiUrl_detail_romans= 'http://ebook.iptvmedia.me/Api/detail_romans.php';
 
getdetail_romans(id : String): Observable<{}> {
 return this.http.get(this.apiUrl_detail_romans+"?id="+id).pipe(
   map(this.extractDatafilter_detail_romans),
   catchError(this.handleErrorfilter_detail_romans)
 );
}

private extractDatafilter_detail_romans(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorfilter_detail_romans (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

apiUrl_liste_ingredients= 'http://cookmade.iptvmedia.me/Api/liste_ingredients.php';
 
getingredients(nom_recipes_ingredients : String): Observable<{}> {
 return this.http.get(this.apiUrl_liste_ingredients+"?nom_recipes="+nom_recipes_ingredients).pipe(
   map(this.extractDataingredients),
   catchError(this.handleErroringredients)
 );
}

private extractDataingredients(res: Response) {
 let body = res;
 return body || { };
}

private handleErroringredients (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

apiUrl_instrections= 'http://cookmade.iptvmedia.me/Api/liste_instrections.php';
 
getInstrections(nom_recipes_instrections : String): Observable<{}> {
 return this.http.get(this.apiUrl_instrections+"?nom_recipes="+nom_recipes_instrections).pipe(
   map(this.extractData_instrections),
   catchError(this.handleError_instrections)
 );
}

private extractData_instrections(res: Response) {
 let body = res;
 return body || { };
}

private handleError_instrections (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

apiUrl_profil= 'http://cookmade.iptvmedia.me/Api/profil.php';
 
getprofil(nom_recipes_profil: String): Observable<{}> {
 return this.http.get(this.apiUrl_profil+"?nom_recipes="+nom_recipes_profil).pipe(
   map(this.extractData_profil),
   catchError(this.handleError_profil)
 );
}

private extractData_profil(res: Response) {
 let body = res;
 return body || { };
}

private handleError_profil (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

apiUrl_search= 'http://cookmade.iptvmedia.me/Api/search.php';
 
getsearch(nom_recipes_search: String): Observable<{}> {
 return this.http.get(this.apiUrl_search+"?likes="+nom_recipes_search).pipe(
   map(this.extractData_search),
   catchError(this.handleError_search)
 );
}

private extractData_search(res: Response) {
 let body = res;
 return body || { };
}

private handleError_search (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/






  


}
