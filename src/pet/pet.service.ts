import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { Ipet } from './pet.interface';

@Injectable()
export class PetService {
  async getPets() {
    const petUrl = 'https://bsl1.herokuapp.com/pet';
    const categoriesUrl = 'https://bsl1.herokuapp.com/pet/categories';

    const pets = await fetch(petUrl, { method: 'GET' });
    const petsData = await pets.json();
    const categories = await fetch(categoriesUrl, { method: 'GET' });
    const categoriesData = await categories.json();

    // creating ODT
    const petsODT: Ipet[] = [];

    petsData.forEach((pet) => {
      const name: string = pet.name;
      const category: string = PetService.categoryMap(
        pet.category,
        categoriesData.categories,
      );
      petsODT.push({ name, category });
    });

    return petsODT;
  }

  private static categoryMap(
    petCategoryId: number,
    categoryArray: { id: number; name: string }[],
  ): string {
    const category = categoryArray.find((c) => c.id === petCategoryId);
    return category ? category.name : 'not found';
  }
}
