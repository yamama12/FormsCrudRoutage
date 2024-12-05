import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';  // Assurez-vous que ProductService est correctement importé
import { Product } from '../model/product.model';  // Assurez-vous que le modèle Product est bien défini dans votre projet
import { HttpErrorResponse } from '@angular/common/http';  // Importer HttpErrorResponse pour le type d'erreur

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private productService: ProductService) {}

  onSubmit(event: Event): void {
    event.preventDefault(); // Empêcher l'envoi du formulaire classique

    // Récupérer les valeurs des champs
    const category = (document.getElementById('category') as HTMLInputElement).value;
    const brand = (document.getElementById('brand') as HTMLInputElement).value;
    const quantity = (document.getElementById('qt') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const status = (document.getElementById('status') as HTMLSelectElement).value;

    // Créer un objet Product avec les données récupérées
    const newProduct: Product = {
      id: new Date().getTime(), // Générer un ID basé sur l'horodatage (pour l'exemple)
      category,
      brand,
      quantity: parseInt(quantity, 10), // Conversion en nombre entier
      launchDate: date,
      status
    };

    // Appel du service pour ajouter le produit
    this.productService.addProduct(newProduct)
      .subscribe(
        (response: Product) => {  // Typage explicite de la réponse
          console.log('Product added successfully', response);
        },
        (error: HttpErrorResponse) => {  // Typage explicite de l'erreur
          console.error('Error adding product', error);
        }
      );

    // Réinitialiser le formulaire après soumission
    this.resetForm();
  }

  // Méthode pour réinitialiser les champs du formulaire
  resetForm(): void {
    (document.getElementById('category') as HTMLInputElement).value = '';
    (document.getElementById('brand') as HTMLInputElement).value = '';
    (document.getElementById('qt') as HTMLInputElement).value = '';
    (document.getElementById('date') as HTMLInputElement).value = '';
    (document.getElementById('status') as HTMLSelectElement).value = '';
  }
}
