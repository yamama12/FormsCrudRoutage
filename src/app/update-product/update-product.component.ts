import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productToUpdate: Product = {
    id: 0,
    brand: '',
    category: '',
    quantity: 0,
    launchDate: '',
    status: '',
    
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!; // Récupérer l'ID du produit à partir de l'URL
    this.productService.getProductById(productId).subscribe((product) => {
      this.productToUpdate = product;
    });
  }

  onSubmit(): void {
    this.productService.updateProduct(this.productToUpdate).subscribe(() => {
      this.router.navigate(['/product-list']); // Redirige vers la liste des produits après mise à jour
    });
  }

  onCancel(): void {
    this.router.navigate(['/product-list']); // Annuler et revenir à la liste des produits
  }
}
