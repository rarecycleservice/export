import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useProductFilters from "../hooks/useProductFilters";
import { useSearchParams } from "react-router-dom";


interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
  featured?: boolean;
}

interface ProductGridProps {
  products?: Product[];
  title?: string;
  showFilters?: boolean;
  showSubcategories?: boolean;
  maxItems?: number;
  featuredOnly?: boolean;
  category?: string;
  subcategory?: string;
}

export const ProductGrid = ({
  products = [],
  title = "Featured Products",
  showFilters = true,
  showSubcategories = false,
  maxItems,
  featuredOnly = false,
  category,
  subcategory,
}: ProductGridProps) => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    categories,
    subcategories,
    filteredProducts,
    resetFilters,
  } = useProductFilters({
    initialProducts: products,
    category,
    subcategory,
    featuredOnly,
    maxItems,
  });

   const [searchParams] = useSearchParams();
    const productName = searchParams.get("category");

    useEffect(() => { 
      if (productName) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setSelectedCategory(productName);
      }
    }, [productName]);

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        )}

        {showFilters && (
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="w-full sm:w-1/3">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-full sm:w-1/3">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-auto">
                <Button variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            </div>

            {showSubcategories && subcategories.length > 1 && (
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-4">
                <div className="w-full sm:w-1/3">
                  <Select
                    value={selectedSubcategory}
                    onValueChange={setSelectedSubcategory}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {subcategories.map((subcategory) => (
                        <SelectItem key={subcategory} value={subcategory}>
                          {subcategory}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                category={product.subcategory || product.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found matching your criteria.
            </p>
            <Button className="mt-4" onClick={resetFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
