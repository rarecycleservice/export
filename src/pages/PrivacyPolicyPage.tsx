import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            1. Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            At R A Recycle Service, we collect information that you provide
            directly to us when you:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Contact us through our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a quote or information about our services</li>
            <li>Engage with us for business purposes</li>
          </ul>
          <p className="text-muted-foreground">
            This information may include your name, email address, phone number,
            company name, and any other information you choose to provide.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Process and fulfill your requests for our services</li>
            <li>Send you updates about our company and services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            3. Information Sharing
          </h2>
          <p className="text-muted-foreground mb-4">
            We value your privacy and do not sell or rent your personal
            information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Service providers who assist us in operating our business</li>
            <li>
              Business partners with whom we jointly offer products or services
            </li>
            <li>Legal authorities when required by law</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            4. Data Security
          </h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet or
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            5. Your Rights
          </h2>
          <p className="text-muted-foreground mb-4">
            You have the right to access, correct, or delete your personal
            information. If you wish to exercise these rights or have any
            questions about our privacy practices, please contact us using the
            information provided below.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            6. Contact Information
          </h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
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

export default function PrivacyPolicyPageWithLayout() {
  return (
    <>
      <Header />
      <PrivacyPolicyPage />
      <Footer />
    </>
  );
}
