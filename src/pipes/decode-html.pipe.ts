import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'decodeHtml', pure: false })
export class DecodeHtml implements PipeTransform {

  transform(content) {
    var txt = document.createElement("textarea");
    txt.innerHTML = content;
    return txt.value;
  }
}