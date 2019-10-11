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
  apiUrl_romans = 'http://mylivre.appmofix.com/Api/liste_romans.php';
 
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

apiUrl_detail_romans= 'http://mylivre.appmofix.com/Api/detail_romans.php';
 
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
/*---------------------------------liste-audio-romans------------------------------*/

apiUrl_liste_audio= 'http://mylivre.appmofix.com/Api/liste_audio.php';
 
getaudio(): Observable<{}> {
 return this.http.get(this.apiUrl_liste_audio).pipe(
   map(this.extractDataaudio),
   catchError(this.handleErroraudio)
 );
}

private extractDataaudio(res: Response) {
 let body = res;
 return body || { };
}

private handleErroraudio (error: Response | any) {
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
/*---------------------------------------http://mylivre.appmofix.com/--------------------------*/
/*---------------------------------detail-audio-------------------------------*/

apiUrl_detail_audio= 'http://mylivre.appmofix.com/Api/detail_audio.php';
 
getdetail_audio(num : Number): Observable<{}> {
 return this.http.get(this.apiUrl_detail_audio+"?num="+num).pipe(
   map(this.extractData_detail_audio),
   catchError(this.handleError_detail_audio)
 );
}

private extractData_detail_audio(res: Response) {
 let body = res;
 return body || { };
}

private handleError_detail_audio (error: Response | any) {
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
/*------------------------------profil-audio----------------------------------*/

apiUrl_profil= 'http://mylivre.appmofix.com/Api/info_audio.php';
 
getprofil(num: Number): Observable<{}> {
 return this.http.get(this.apiUrl_profil+"?num="+num).pipe(
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
/*-------------------------------search-pdf---------------------------------*/

apiUrl_searchpdf= 'http://mylivre.appmofix.com/Api/search_pdf.php';
 
getsearchpdf(title_pdf: String): Observable<{}> {
 return this.http.get(this.apiUrl_searchpdf+"?pdfs="+title_pdf).pipe(
   map(this.extractData_searchpdf),
   catchError(this.handleError_searchpdf)
 );
}

private extractData_searchpdf(res: Response) {
 let body = res;
 return body || { };
}

private handleError_searchpdf (error: Response | any) {
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
/*-------------------------------search-audio---------------------------------*/

apiUrl_searchaudio= 'http://mylivre.appmofix.com/Api/search_audio.php';
 
getsearchaudio(title_audio: String): Observable<{}> {
 return this.http.get(this.apiUrl_searchaudio+"?audios="+title_audio).pipe(
   map(this.extractData_searchaudio),
   catchError(this.handleError_searchaudio)
 );
}

private extractData_searchaudio(res: Response) {
 let body = res;
 return body || { };
}

private handleError_searchaudio (error: Response | any) {
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
