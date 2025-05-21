import React from "react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for inquiries and support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-card rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-card-foreground mb-6">
                Our Office
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">
                      Block 7, Subh Laxmi Nagar, Town Kuchera,
                      <br />
                      Rajasthan - 341024
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Abbash Ali: +91 9680196707</p>
                      <p>Julfikar: +44 7432226497</p>
                      <p>Kasam: +91 8619084829</p>
                      <p>Jumma: +91 9149737191</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      info@rarecycleservice.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14222.797791432167!2d73.96327027515059!3d26.9764155416291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a599f2a57dd87%3A0x1d9c15170b679ff!2sR%20A%20recycle%20service!5e0!3m2!1sen!2sin!4v1744811481574!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <ContactForm
              title="Send Us a Message"
              description="Fill out the form below and our team will get back to you as soon as possible."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPageWithLayout() {
  return (
    <>
      <Header />
      <ContactPage />
      <Footer />
    </>
  );
}
