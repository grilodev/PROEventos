import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;
  public eventosFiltrados: any;
  filtroBuscar = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {

    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => {this.eventos = response, this.eventosFiltrados = response},
      error => console.log(error)
    );
  }

  public buscaChange(value: string): void {
    this.eventosFiltrados = this.eventos.filter((x: any) => x.tema.indexOf(value) != -1);
  };

}
