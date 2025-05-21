import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Share2,
  Heart,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import productsData from "@/data/products.json";

interface ProductDetailPageProps {
  product?: {
    id: string;
    name: string;
    description: string;
    images: string[];
    price?: string;
    category: string;
    subcategory?: string;
    specifications?: Record<string, string>;
    features?: string[];
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product: propProduct,
}) => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState<ProductDetailPageProps["product"]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If product is provided via props, use it
    if (propProduct) {
      setProduct(propProduct);
      setLoading(false);
      return;
    }

    // Otherwise fetch from JSON data
    try {
      const foundProduct = (productsData as any).products.find(
        (p: any) => p.id === productId,
      );

      if (foundProduct) {
        // Transform the product data to match our component's expected format
        const transformedProduct = {
          ...foundProduct,
          // Ensure we have an array of images
          images: foundProduct.image
            ? [foundProduct.image, ...Array(3).fill(foundProduct.image)]
            : [
                "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
                "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=800&q=80",
                "https://images.unsplash.com/photo-1583744946564-b52d01e7f922?w=800&q=80",
              ],
          // Add default specifications if none exist
          specifications: foundProduct.specifications || {
            Material: foundProduct.subcategory || foundProduct.category,
            Weight: "Varies by order",
            "Minimum Order": "To be discussed",
            "Lead Time": "15-20 days",
            Certification: "ISO 9001",
          },
          // Add default features if none exist
          features: foundProduct.features || [
            "High quality recycled material",
            "Eco-friendly processing",
            "Consistent supply available",
            "Competitive pricing",
            "Customizable specifications available",
            "Global shipping available",
          ],
        };

        setProduct(transformedProduct);
      } else {
        setError("Product not found");
      }
    } catch (err) {
      setError("Error loading product data");
      console.error("Error loading product:", err);
    } finally {
      setLoading(false);
    }
  }, [productId, propProduct]);

  // Contact form component (inline since we're having import issues)
  const ContactFormSection = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      product: product?.name || "",
      message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        setError("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      try {
        // Create FormData object for submission
        const submitData = new FormData();

        // Add access token
        submitData.append("access_key", "41ff0c50-016b-41e8-aad3-e86ade8e7b40");

        // Add form fields
        Object.entries(formData).forEach(([key, value]) => {
          if (value) submitData.append(key, value);
        });

        // Add subject
        submitData.append(
          "subject",
          `Product Inquiry: ${product?.name || "Product"}`,
        );

        // Send to Web3Forms API
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: submitData,
        });

        const result = await response.json();

        if (result.success) {
          console.log("Form submitted successfully", result);
          setIsSubmitted(true);

          // Reset form after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              product: product?.id || "",
              message: "",
            });
          }, 5000);
        } else {
          console.error("Form submission failed", result);
          setError("Form submission failed. Please try again.");
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        setError("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Send us your inquiry</h3>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md flex items-start gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <p>
              Thank you for your inquiry! We will get back to you as soon as
              possible.
            </p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product
              </label>
              <select
                id="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                {(productsData as any).products.map((p: any) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                placeholder="Please include any specific requirements or questions"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {error || "Product not found"}
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't find the product you're looking for.
            </p>
            <Link to="/products">
              <Button className="flex items-center gap-2">
                <ArrowLeft size={18} />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header with navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/products">
          <Button variant="ghost" className="flex items-center gap-2 mb-6">
            <ArrowLeft size={18} />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border bg-gray-50">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              {product.subcategory && (
                <Badge variant="outline" className="ml-2 mb-2">
                  {product.subcategory}
                </Badge>
              )}
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              {product.price && (
                <p className="text-xl font-semibold text-blue-700 mb-4">
                  Price: {product.price}
                </p>
              )}
              <p className="text-gray-600">{product.description}</p>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-2 gap-4 mb-6">
              {product.specifications &&
                Object.entries(product.specifications)
                  .slice(0, 4)
                  .map(([key, value]) => (
                    <div key={key} className="border rounded-md p-3">
                      <p className="text-sm text-gray-500">{key}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="inquiry">Make an Inquiry</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Product Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications &&
                Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="features" className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Product Features</h2>
            <ul className="space-y-2">
              {product.features &&
                product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
          </TabsContent>
          <TabsContent value="inquiry" className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Inquire About This Product
            </h2>
            <ContactFormSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default function ProductDetailPageWithLayout() {
  return (
    <>
      <Header />
      <ProductDetailPage />
      <Footer />
    </>
  );
}
