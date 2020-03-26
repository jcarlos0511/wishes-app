import { Component, OnInit, Input } from '@angular/core';
import { WhishesService } from 'src/app/services/wishes.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(public wishesService: WhishesService, private router: Router) { }

  ngOnInit() {}

  listaSeleccionada( lista : Lista ) {
    //console.log(lista);

    if (this.terminada) {
      
      this.router. navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);

    } else{
      this.router. navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrarLista( lista: Lista ){

    this.wishesService.borrarLista( lista );

  }

}
