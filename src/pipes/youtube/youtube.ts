import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
export class YoutubePipe implements PipeTransform {
  

constructor(private Dom : DomSanitizer){


}


  transform(value: string, ...args) {
    /*
    return value.toLowerCase();*/
return this.Dom.bypassSecurityTrustResourceUrl(value);

  }
}