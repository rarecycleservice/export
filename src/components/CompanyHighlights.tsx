import React from "react";
import { Globe, Award, TrendingUp, Users } from "lucide-react";

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CompanyHighlightsProps {
  title?: string;
  subtitle?: string;
  highlights?: HighlightItem[];
}

const CompanyHighlights = ({
  title = "Why Choose Us",
  subtitle = "We pride ourselves on delivering exceptional service and products to our global clients",
  highlights = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Reach",
      description:
        "Operating in over 50 countries with a network of trusted partners worldwide.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description:
        "All products undergo rigorous quality control to meet international standards.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Market Expertise",
      description:
        "Deep understanding of international markets and regulatory requirements.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Dedicated Support",
      description:
        "Personalized customer service and support throughout the export process.",
    },
  ],
}: CompanyHighlightsProps) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyHighlights;
