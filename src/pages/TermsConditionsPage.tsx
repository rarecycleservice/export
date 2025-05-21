import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function TermsConditionsPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            1. Introduction
          </h2>
          <p className="text-muted-foreground mb-4">
            Welcome to R A Recycle Service. These Terms & Conditions govern your
            use of our website and services. By accessing or using our website,
            you agree to be bound by these Terms. If you disagree with any part
            of these terms, please do not use our website or services.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            2. Use of Our Services
          </h2>
          <p className="text-muted-foreground mb-4">
            Our website provides information about our recycling services,
            including Non-Ferrous, Stainless Steel, and Ferrous Scrap. You may
            browse our website, contact us for inquiries, and request quotes for
            our services.
          </p>
          <p className="text-muted-foreground mb-4">
            You agree to use our website and services only for lawful purposes
            and in a way that does not infringe upon the rights of others or
            restrict their use of the website.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-muted-foreground mb-4">
            All content on this website, including text, graphics, logos,
            images, and software, is the property of R A Recycle Service and is
            protected by international copyright laws. Unauthorized use,
            reproduction, or distribution of any content from our website is
            strictly prohibited.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-muted-foreground mb-4">
            R A Recycle Service makes no warranties or representations about the
            accuracy or completeness of the website's content. We shall not be
            liable for any direct, indirect, special, or consequential damages
            resulting from your use or inability to use our website or services.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            5. Changes to Terms
          </h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right to modify these Terms & Conditions at any time.
            Changes will be effective immediately upon posting on our website.
            Your continued use of our website after any changes indicates your
            acceptance of the modified Terms.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            6. Contact Information
          </h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms & Conditions, please
            contact us at:
          </p>
          <p className="text-muted-foreground">
            R A Recycle Service
            <br />
            Block 7, Subh Laxmi Nagar, Town Kuchera,
            <br />
            Rajasthan - 341024, India
            <br />
            Email: info@rarecycleservice.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TermsConditionsPageWithLayout() {
  return (
    <>
      <Header />
      <TermsConditionsPage />
      <Footer />
    </>
  );
}
