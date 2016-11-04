import { Component } from '@angular/core';

import {
  SkyFileItem,
  SkyFileDropChange,
  SkyFileLink
} from '../../../core';

@Component({
  selector: 'sky-fileattachments-demo',
  templateUrl: './fileattachments-demo.component.html'
})
export class SkyFileattachmentsDemoComponent {
  public filesToUpload: SkyFileItem[];

  public allItems: (SkyFileItem | SkyFileLink)[];

  public linksToUpload: SkyFileLink[];

  public rejectedFiles: SkyFileItem[];

  public maxFileSize: number = 4000000;

  public acceptedTypes: string[];

  constructor() {
    this.filesToUpload = [];
    this.rejectedFiles = [];
    this.allItems = [];
    this.linksToUpload = [];
  }

  public filesUpdated(result: SkyFileDropChange) {
    this.filesToUpload = this.filesToUpload.concat(result.files);
    this.rejectedFiles = this.rejectedFiles.concat(result.rejectedFiles);
    this.allItems = this.allItems.concat(result.files);
  }

  public linkAdded(result: SkyFileLink) {
    this.linksToUpload = this.linksToUpload.concat(result);
    this.allItems = this.allItems.concat(result);
  }

  public validateFile(file: SkyFileItem) {
    if (file.file.name.indexOf('a') === 0) {
      return 'You may not upload a file that begins with the letter "a."';
    }
  }

  public deleteFile(file: SkyFileItem | SkyFileLink) {
    this.removeFromArray(this.allItems, file);
    this.removeFromArray(this.filesToUpload, file);
    this.removeFromArray(this.linksToUpload, file);
  }

  private removeFromArray(items: any[], obj: SkyFileItem | SkyFileLink) {
    let i: number,
      n: number;

    if (items) {
      for (i = 0, n = items.length; i < n; i++) {
        if (items[i] === obj) {
          items.splice(i, 1);
          break;
        }
      }
    }
  }
}