import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component implements OnInit {

nomeClasse = 'pais'

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMaiusculo(palavra: string) {
    return palavra.toUpperCase();
  }

}
