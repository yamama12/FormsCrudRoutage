import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'], // Assurez-vous que ce fichier CSS existe
  standalone: true,
  imports: [CommonModule, RouterModule], // Importez les modules nécessaires
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

  onUpdate(productId: number) {
    // Navigation vers le formulaire de mise à jour
    this.router.navigate(['/update-product', productId]);
    
  }

  onDelete(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      // Filtrer les produits après suppression
      this.products = this.products.filter((p) => p.id !== productId);
    });
  }
}
