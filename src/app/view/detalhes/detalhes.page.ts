import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  informacao: any;
  constructor(private activatedRoute: ActivatedRoute, private filmesService: FilmesService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmesService.pegarDetalhes(id).subscribe(result => {
      this.informacao = result;
    });
  }

  abrirSite() {
    window.open(this.informacao.Website, '_blank');
  }

}