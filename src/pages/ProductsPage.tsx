import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Our Products</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
