import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroBanner = ({
  title = "RA Recycle Service Global Recycling Solutions for Your Business",
  subtitle = "Connecting sustainable recycling providers with global markets. Explore our trusted export-import services and eco-friendly solutions.",
  imageUrl = "/assets/images/products/export2.png",
  primaryButtonText = "Explore Products",
  primaryButtonLink = "/products",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
}: HeroBannerProps) => {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Export Business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link to={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
