import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-teste',
  templateUrl: './componente-teste.component.html',
  styleUrls: ['./componente-teste.component.css']
})

export class ComponenteTesteComponent {
  conteudoTexto1: string = "Trabalhando com interpolação de dados dentro dos componentes. Conseguimos associar variável dentro do HTML do componente específico."

  nome: string = "Matheus"
  idade: number = 19

  conteudoTexto2: string = "Meu nome é " + this.nome + " e eu tenho " + this.idade + " anos de idade."
}
