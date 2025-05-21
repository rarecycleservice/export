import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import productsData from "@/data/products.json";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
  featured?: boolean;
}

const ProductListingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
 

  useEffect(() => {
    // Load products from JSON file
    let loadedProducts = productsData.products as Product[];

   
    setProducts(loadedProducts);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Our Recycling Products
        </h1>

        <div className="mb-8">
          <ProductGrid
            products={products}
            title="All Products"
            showFilters={true}
            showSubcategories={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
