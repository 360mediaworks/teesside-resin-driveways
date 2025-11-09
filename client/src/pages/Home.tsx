import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, CheckCircle2, Shield, Clock, Award } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add schema markup to page
    const schemas = [
      // LocalBusiness Schema
      {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        "name": "Teesside Roofing Services",
        "description": "Professional roofing replacement and repair services in Teesside, UK",
        "areaServed": {
          "@type": "City",
          "name": "Teesside"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Teesside",
          "addressCountry": "UK"
        }
      },
      // Organization Schema
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Teesside Roofing Services",
        "description": "Quality roofing services in Teesside"
      },
      // Article Schema
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Professional Roofing Services in Teesside",
        "description": "Expert roof replacement and repair services for homes and businesses in Teesside, UK"
      },
      // FAQPage Schema
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does roof replacement cost in Teesside?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of roof replacement in Teesside varies depending on the size of your property, the materials chosen, and the complexity of the work. On average, homeowners can expect to pay between £5,000 and £15,000 for a complete roof replacement. We provide free, no-obligation quotes to give you an accurate estimate for your specific project."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a roof replacement take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential roof replacement projects in Teesside take between 3-7 days to complete, depending on the size of the roof, weather conditions, and the type of roofing material being installed. We'll provide you with a detailed timeline during your consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need planning permission for roof work in Teesside?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In most cases, replacing a roof with similar materials does not require planning permission in the UK. However, if you live in a conservation area or listed building, or if you're changing the roof structure significantly, you may need permission. We can advise you on the specific requirements for your property."
            }
          },
          {
            "@type": "Question",
            "name": "What areas of Teesside do you cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide roofing services throughout the entire Teesside area, including Middlesbrough, Stockton-on-Tees, Redcar, Hartlepool, and surrounding communities."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a cost to get a quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we provide completely free, no-obligation quotes for all roofing projects in Teesside. Simply fill out our contact form or give us a call to arrange a consultation."
            }
          }
        ]
      }
    ];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/20 py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Roofing Services in Teesside
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Quality Roof Replacement and Repair for Your Home
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={scrollToContact} className="text-lg">
                  Get a Free Estimate
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToContact}>
                  <Phone className="mr-2 h-5 w-5" />
                  Request a Call Back
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Free, No-Obligation Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Fast Response Time</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hero-roof.jpg"
                alt="Professional roofing services in Teesside"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Service Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Looking for Roofing Services in Teesside?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Your roof is one of the most important parts of your home, protecting you and your family from the elements. Whether you need a complete roof replacement, emergency repairs, or routine maintenance, finding the right roofing service in Teesside is essential for ensuring quality workmanship and long-lasting results.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            We connect homeowners throughout Teesside with experienced, qualified roofing professionals who can handle projects of any size. From minor leak repairs to full roof replacements, our network of trusted contractors delivers reliable service with competitive pricing and exceptional customer care.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Tell Us About Your Project</h3>
                <p className="text-muted-foreground">
                  Fill out the quick contact form with your details and describe your roofing needs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Get a Free Consultation</h3>
                <p className="text-muted-foreground">
                  Receive a no-obligation quote and expert advice from a qualified roofing professional.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Start Your Project</h3>
                <p className="text-muted-foreground">
                  Move forward with confidence knowing you're getting quality service at a fair price.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Roofing Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/roof-replacement.jpg"
                    alt="Roof replacement services in Teesside"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Roof Replacement</h3>
                <p className="text-muted-foreground mb-4">
                  Complete roof replacement services for residential and commercial properties. We work with all roofing materials including tiles, slates, felt, and metal roofing systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Full roof surveys and assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Wide range of roofing materials available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Professional installation to industry standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/roof-repair.jpg"
                    alt="Roof repair services in Teesside"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Roof Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  Fast and reliable roof repair services to fix leaks, damaged tiles, and structural issues. Emergency repairs available for urgent situations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Leak detection and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tile and slate replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Storm damage repairs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/roofer-working.jpg"
                    alt="Flat roofing services in Teesside"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Flat Roofing</h3>
                <p className="text-muted-foreground mb-4">
                  Specialist flat roofing services including installation, repairs, and maintenance for extensions, garages, and commercial buildings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>EPDM rubber roofing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>GRP fibreglass roofing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Felt roofing systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/hero-roof.jpg"
                    alt="Roofing maintenance services in Teesside"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Roof Maintenance</h3>
                <p className="text-muted-foreground mb-4">
                  Regular maintenance services to extend the life of your roof and prevent costly repairs down the line.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Annual roof inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Gutter cleaning and repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Preventative maintenance programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Roofing Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-primary-foreground/90">
                All work completed to the highest industry standards with attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-primary-foreground/90">
                Comprehensive insurance coverage for your peace of mind and protection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-primary-foreground/90">
                Deep understanding of Teesside weather conditions and building requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-primary-foreground/90">
                Efficient project completion without compromising on quality or safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How much does roof replacement cost in Teesside?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The cost of roof replacement in Teesside varies depending on the size of your property, the materials chosen, and the complexity of the work. On average, homeowners can expect to pay between £5,000 and £15,000 for a complete roof replacement. We provide free, no-obligation quotes to give you an accurate estimate for your specific project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How long does a roof replacement take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most residential roof replacement projects in Teesside take between 3-7 days to complete, depending on the size of the roof, weather conditions, and the type of roofing material being installed. We'll provide you with a detailed timeline during your consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What types of roofing materials are available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with a wide range of roofing materials to suit different budgets and aesthetic preferences. Popular options include concrete and clay tiles, natural slate, synthetic slate, felt roofing for flat roofs, EPDM rubber roofing, and GRP fibreglass. Each material has its own advantages in terms of durability, cost, and appearance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Do I need planning permission for roof work in Teesside?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                In most cases, replacing a roof with similar materials does not require planning permission in the UK. However, if you live in a conservation area or listed building, or if you're changing the roof structure significantly, you may need permission. We can advise you on the specific requirements for your property.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How do I know if I need a roof repair or full replacement?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Several factors determine whether repair or replacement is the best option: the age of your roof (most last 20-50 years depending on material), the extent of damage, recurring leak issues, visible sagging or structural problems, and missing or damaged tiles. A professional inspection will help determine the most cost-effective solution for your situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                What areas of Teesside do you cover?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We provide roofing services throughout the entire Teesside area, including Middlesbrough, Stockton-on-Tees, Redcar, Hartlepool, and surrounding communities. If you're unsure whether we cover your specific location, please get in touch and we'll be happy to confirm.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Is there a cost to get a quote?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, we provide completely free, no-obligation quotes for all roofing projects in Teesside. Simply fill out our contact form or give us a call to arrange a consultation. There's no pressure to proceed, and you can take your time to consider your options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Getting started is easy! Simply fill out the contact form below with details about your roofing project, or give us a call. We'll arrange a convenient time to assess your roof and provide you with a detailed, transparent quote. From there, you can decide if you'd like to proceed with the work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">
                What happens if it rains during my roof replacement?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Professional roofing contractors plan for weather conditions and take precautions to protect your home. Work may be paused during heavy rain for safety reasons, but temporary coverings and waterproofing measures are used to ensure your property remains protected throughout the project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">
                Do you offer emergency roofing repairs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, emergency roofing repairs are available for urgent situations such as storm damage, severe leaks, or structural issues that pose an immediate risk. Contact us as soon as possible if you have an emergency roofing situation, and we'll prioritize your case.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/40 to-primary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started on Your Roofing Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get your free, no-obligation quote today. Our team is ready to help you with all your roofing needs in Teesside.
          </p>
          <Button size="lg" onClick={scrollToContact} className="text-lg">
            Request Your Free Quote Now
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get Your Free Quote
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we'll get back to you as soon as possible with a free, no-obligation quote for your roofing project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">Available upon request</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">Via contact form</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-muted-foreground">All of Teesside and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert('This is a demo form. In production, this would submit to your CTA link.');
                }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="01234 567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Please describe your roofing needs..."
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Get My Free Quote Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Teesside Roofing Services</h3>
              <p className="text-background/80">
                Professional roofing replacement and repair services throughout Teesside.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-background">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Service Area</h4>
              <p className="text-background/80">
                Teesside, UK<br />
                Including Middlesbrough, Stockton-on-Tees,<br />
                Redcar, and Hartlepool
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/80">
            <p>&copy; {new Date().getFullYear()} Teesside Roofing Services | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
