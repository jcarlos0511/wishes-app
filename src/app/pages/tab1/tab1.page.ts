import { Component } from '@angular/core';
import { WhishesService } from 'src/app/services/wishes.service';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  

  constructor( public whishesService: WhishesService) {
    
    
  }

}
