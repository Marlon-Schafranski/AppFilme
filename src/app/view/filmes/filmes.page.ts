import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FilmesService, TiposDeBusca } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  resultados!: Observable<any>;
  termosBusca: string = '';
  tipo: TiposDeBusca = TiposDeBusca.all;

  constructor(private filmeService: FilmesService) { }

  ngOnInit() {
  }
 
  busca() {
        this.resultados =
        this.filmeService.buscarFilmes(this.termosBusca, this.tipo)
        .pipe(map(results => results['Search']));
    
  }


}
