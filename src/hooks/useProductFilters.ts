import { useState, useEffect } from "react";
import productsData from "../data/products.json";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
  featured?: boolean;
}

interface UseProductFiltersProps {
  initialProducts?: Product[];
  category?: string;
  subcategory?: string;
  featuredOnly?: boolean;
  maxItems?: number;
}

export const useProductFilters = ({
  initialProducts = [],
  category,
  subcategory,
  featuredOnly = false,
  maxItems,
}: UseProductFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [subcategories, setSubcategories] = useState<string[]>(["All"]);

  // Load products from JSON file or props
  useEffect(() => {
    // If products are provided as props, use them
    if (initialProducts && initialProducts.length > 0) {
      setAllProducts(initialProducts);
    } else {
      // Otherwise, load from JSON
      let loadedProducts = productsData.products as Product[];

      // Apply category filter if provided
      if (category) {
        loadedProducts = loadedProducts.filter((p) => p.category === category);
      }

      // Apply subcategory filter if provided
      if (subcategory) {
        loadedProducts = loadedProducts.filter(
          (p) => p.subcategory === subcategory,
        );
      }

      // Apply featured filter if requested
      if (featuredOnly) {
        loadedProducts = loadedProducts.filter((p) => p.featured);
      }

      setAllProducts(loadedProducts);
    }
  }, [initialProducts, category, subcategory, featuredOnly]);

  // Extract unique categories from products
  const categories = [
    "All",
    ...new Set(allProducts.map((product) => product.category)),
  ];

  // Update subcategories when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setSubcategories(["All"]);
    } else {
      const filteredSubcategories = [
        "All",
        ...new Set(
          allProducts
            .filter((product) => product.category === selectedCategory)
            .map((product) => product.subcategory || "Other"),
        ),
      ];
      setSubcategories(filteredSubcategories);
      setSelectedSubcategory("All");
    }
  }, [selectedCategory, allProducts]);

  // Filter products based on search term, category, and subcategory
  const filteredProducts = allProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory,
    )
    .filter(
      (product) =>
        selectedSubcategory === "All" ||
        (product.subcategory || "Other") === selectedSubcategory,
    )
    .slice(0, maxItems || allProducts.length);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedSubcategory("All");
  };

  return {
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
  };
};

export default useProductFilters;
