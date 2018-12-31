import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {id: 1, name: 'Lazer', description: 'Cinema, Parques, Praia, etc'},
      {id: 2, name: 'Moradia', description: 'Despesas da Casas'},
      {id: 3, name: 'Salário', description: 'Recebimento de Salário'},
      {id: 4, name: 'Freelancer', description: 'Trabalhos Realizados freelancer'},
      {id: 5, name: 'Saúde', description: 'Planos de saúde'},
      {id: 6, name: 'Mercado', description: 'Gastos mercado'}
    ];

    return {categories};
  }
}
