import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
  {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mas, o contador de palavras também é bastante interessante para contabilizar textos menores. Ele é uma boa opção para contar as palavras, por exemplo, de legendas em redes sociais, descrições de páginas, comentários e anúncios.Em relação às redes sociais, é importante contar as palavras, porque algumas delas têm limite de caracteres por postagem. E, mesmo que o limite seja extenso ou não haja uma quantidade máxima de caracteres, é bom checar a quantidade de palavras, já que nem sempre as pessoas têm paciência para ler conteúdos longos nas mídias sociais.Essa ferramenta ainda pode ser usada por empreendedores e colaboradores de negócios que estão começando a investir no marketing de conteúdo. Nesse cenário, ela ajuda os profissionais a entenderem qual é o tamanho de um texto de 500, 1000 ou 2000 palavras.Isso é importante, porque ninguém lê a quantidade de palavras que há em uma página, legenda ou em um comentário quando está navegando na internet. Sendo assim, muitas vezes as pessoas que não trabalham com a produção de textos têm dificuldade de visualizar as opções de tamanho dos conteúdos.',
      autoria: 'Componente Filho',
      modelo: 'modelo1'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
