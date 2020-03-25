import { Component, OnInit } from '@angular/core';
import { WhishesService } from 'src/app/services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

lista: Lista;
nombreItem = '';

  constructor( private wishesService: WhishesService, private route: ActivatedRoute ) { 

    

    const listaId = this.route.snapshot.paramMap.get('listaId');
    //console.log(listaId);

    this.lista = this.wishesService.obtenerLista( listaId);
    //console.log(this.lista);

   }

  ngOnInit() {
  }

  agregarItem(){
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);

    this.lista.items.push( nuevoItem);

    this.nombreItem = '';
    
    this.wishesService.guardarStorage();
  }

  cambioCheck( item: ListaItem ){
    //console.log(item);
    const pendientes = this.lista.items.filter( itemData => !itemData.completado ).length;

    console.log(pendientes);

    this.wishesService.guardarStorage();
  }

}
