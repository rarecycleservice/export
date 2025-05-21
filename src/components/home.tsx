import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import ProductGrid from "./ProductGrid";
import CompanyHighlights from "./CompanyHighlights";

function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />

      <main>
        <HeroBanner />

        <div id="products" className="py-16">
          <ProductGrid
            title="Featured Products"
            showFilters={false}
            maxItems={9}
            featuredOnly={true}
          />
        </div>

        <CompanyHighlights />

        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Expand Your Business Globally?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact our team today to discuss your export needs and
              opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-11 px-8"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
