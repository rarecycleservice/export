import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            About Our Company
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about our history, vision, and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Our History
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2025, our export business began with a simple mission:
              to connect quality manufacturers with global markets. What started
              as a small operation has grown into a trusted international trade
              partner with clients across five continents.
              <br />
              <b>R A Recycle Service</b>, based in Kuchera, Rajasthan, India, is
              a growing name in the world of scrap recycling. Inspired by the
              values and legacy of our beloved <b>Roshan Bano</b>, our company
              stands as a tribute to her strength and memory. As Indenting
              Agents and Traders for Non-Ferrous, Stainless Steel, and Ferrous
              Scrap, we are committed to building a business based on trust,
              integrity, and enduring relationships.
            </p>
            <p className="text-muted-foreground">
              While we are a new name, our roots run deep. Our co-founders{" "}
              <b>Abbash Ali, julfikar, Jumma and Kasam Ali</b> bring forward a
              clear vision—to establish R A Recycle Service as a reliable and
              quality-driven recycling company in the scrap industry. With
              passion and purpose, we aim to contribute meaningfully to the
              recycling ecosystem, both in India and internationally.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4">
              At R A Recycle Service, our mission is to become a leading global
              recycling company by providing sustainable waste management
              solutions that contribute to environmental conservation while
              delivering exceptional value to our partners and clients.
            </p>
            <p className="text-muted-foreground mb-4">
              We are committed to promoting responsible recycling practices,
              reducing landfill waste, and conserving natural resources through
              efficient recovery and processing of recyclable materials.
            </p>

            <h2 className="text-2xl font-semibold text-card-foreground mb-4 mt-6">
              Our Vision
            </h2>
            <p className="text-muted-foreground mb-4">
              We envision a world where waste is transformed into valuable
              resources, creating a circular economy that benefits both
              businesses and the environment. We aim to be at the forefront of
              this transformation by leveraging innovative technologies and
              sustainable practices.
            </p>
            <p className="text-muted-foreground">
              We have established partnerships with yards and traders from the
              UK, South America, Europe, the Middle East (UAE, Bahrain, Saudi
              Arabia, and Iraq), and the Far East. On the domestic front, our
              network of importers across India are known for their
              professionalism and credibility. Our growth is guided by
              responsibility and a commitment to outperform expectations in
              service and quality.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4 text-center">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div className="border border-border rounded-md p-4 text-center">
             
              <img
    src="/assets/images/products/ISO_9001-2015.png" // <- Replace with actual path
    alt="MSME Logo"
    className="w-16 h-auto mx-auto mb-2"
  />
              <h3 className="font-medium mb-1">ISO 9001:2015</h3>
              <h3 className="font-medium mb-1">UACB/R2502/104</h3>
              <p className="text-sm text-muted-foreground">
                Quality Management System
              </p>
            </div>

            <div className="border border-border rounded-md p-4 text-center">
            <img
    src="/assets/images/products/One-Tax-One-Nation.png" // <- Replace with actual path
    alt="MSME Logo"
    className="w-16 h-auto mx-auto mb-2"
  />
              
              <h3 className="font-medium mb-1">IGST</h3>
              <h3 className="font-medium mb-1">08DVBPR7915G1Z9</h3>
              <p className="text-sm text-muted-foreground">
                Integrated Goods and Services Tax
              </p>
            </div>

            <div className="border border-border rounded-md p-4 text-center">
             
  <img
    src="/assets/images/products/msme-seeklogo.png" // <- Replace with actual path
    alt="MSME Logo"
    className="w-16 h-auto mx-auto mb-2"
  />
              <h3 className="font-medium mb-1">MSME</h3>
              <h3 className="font-medium mb-1">UDYAM-RJ-25-0089913</h3>
              <p className="text-sm text-muted-foreground">
                Micro, Small & Medium Enterprises
              </p>
            </div>

           

          

            <div className="border border-border rounded-md p-4 text-center">
            <img
    src="/assets/images/products/rspcb.png" // <- Replace with actual path
    alt="MSME Logo"
    className="w-16 h-auto mx-auto mb-2"
  />
              <h3 className="font-medium mb-1">RPCB</h3>
              <h3 className="font-medium mb-1">Rajasthan Pollution Control Board</h3>
              <p className="text-sm text-muted-foreground">
              (Environmental Compliance)
              </p>
            </div>

            <div className="border border-border rounded-md p-4 text-center">
            <img
    src="/assets/images/products/environment agency logo.png"
    alt="Environment Agency Logo"
    className="w-16 h-auto mx-auto mb-2"
  />
              <h3 className="font-medium mb-1">Environment Agency</h3>
              <h3 className="font-medium mb-1">CBDL613392</h3>
              <p className="text-sm text-muted-foreground">
              Waste Carrier Registration
              </p>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPageWithLayout() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
}
