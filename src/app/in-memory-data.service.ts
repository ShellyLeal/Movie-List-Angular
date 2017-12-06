import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
	  { id: 11, name: 'O Poderoso Chefão (1972)' },
	  { id: 12, name: 'O Mágico de Oz (1939)' },
	  { id: 13, name: 'Cidadão Kane (1941)' },
	  { id: 14, name: 'Um Sonho de Liberdade (1994)' },
	  { id: 15, name: 'Pulp Fiction – Tempo de Violência (1994)' },
	  { id: 16, name: 'Casablanca (1942)' },
	  { id: 17, name: 'O Poderoso Chefão 2 (1974)' },
	  { id: 18, name: 'E.T. – O Extraterrestre (1982)' },
	  { id: 19, name: '2001: Uma Odisseia no Espaço (1968)' },
	  { id: 20, name: ' A Lista de Schindler (1993)' }
    ];
    return {movies};
  }
}
