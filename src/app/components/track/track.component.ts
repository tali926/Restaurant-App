import { Component } from '@angular/core';
import { BagServiceService } from '../../services/bag-service.service';
import { DocumentModel } from '../../models/document-model';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

 
export class TrackComponent {

  documentItems: DocumentModel[] = [];
constructor(private serviceBag: BagServiceService)
{
   this. documentItems = this.serviceBag.getDocumentItems();
}
  
}
