import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category?: string;
  subcategory?: string;
  isNew?: boolean;
  onInquiry?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Product Name",
  description = "This is a sample product description showcasing the features and benefits of this export item.",
  image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  category = "General",
  subcategory,
  isNew = false,
  onInquiry = () => {},
}: ProductCardProps) => {
  return (
    <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg bg-white">
      <Link to={`/products/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          {isNew && (
            <Badge className="absolute top-2 right-2 z-10" variant="secondary">
              New
            </Badge>
          )}
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-1">
            <Badge variant="outline" className="text-xs">
              {subcategory || category}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold line-clamp-1 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
