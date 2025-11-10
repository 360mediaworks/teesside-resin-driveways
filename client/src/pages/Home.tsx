import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Droplets, Shield, Sparkles, Clock, MapPin, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SchemaMarkup />
      <div className="min-h-screen flex flex-col bg-background">
      {/* Fixed Header with Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dfvsaeiwl/image/upload/Teesside%20Driveways/Teesside_Driveways_Logo_350x180px_u43i1k.jpg"
                alt="Teesside Driveways"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("areas")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Service Areas
              </button>
              <Button
                onClick={() => window.open("https://lp.teessideresindriveways.co.uk/contact/", "_blank")}
                size="lg"
              >
                Get Free Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => scrollToSection("contact")}
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Your Driveway with Premium Resin Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Looking for resin driveways in Teesside? We specialize in durable, permeable resin bound and bonded driveways that enhance your property's curb appeal while providing long-lasting performance.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => window.open("https://lp.teessideresindriveways.co.uk/contact/", "_blank")}
              >
                Request Your Free Quote
              </Button>
            </div>
            <div className="relative">
              <img
                src="/resin-hero.jpg"
                alt="Beautiful resin bound driveway"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Looking for Resin Driveways in Teesside?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your driveway is one of the first things visitors notice about your home. A worn, cracked, or outdated driveway can detract from your property's appearance and value. Resin driveways offer a modern, elegant solution that combines stunning aesthetics with practical benefits. Whether you're dealing with drainage issues, weed growth, or simply want to upgrade your home's exterior, resin surfacing provides a durable, low-maintenance alternative to traditional materials like tarmac, concrete, or block paving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Droplets className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Fully Permeable</h3>
                <p className="text-muted-foreground">
                  Resin bound surfaces allow water to drain naturally, preventing puddles and reducing flood risk while being environmentally friendly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Incredibly Durable</h3>
                <p className="text-muted-foreground">
                  Built to last 15+ years with minimal maintenance. Resistant to cracking, UV damage, and heavy vehicle traffic.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Beautiful Finish</h3>
                <p className="text-muted-foreground">
                  Smooth, modern appearance with a wide range of colors and aggregate options to complement any property style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/resin-texture.jpg"
                alt="Resin driveway close-up texture"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4">
                <p className="text-background font-bold">Premium Quality Finish</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/resin-installation.jpg"
                alt="Professional resin driveway installation"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4">
                <p className="text-background font-bold">Expert Installation</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/resin-colors.jpg"
                alt="Various resin driveway colors"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4">
                <p className="text-background font-bold">Wide Color Range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resin Bound vs Bonded Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Resin Driveway Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer both resin bound and resin bonded solutions, each with unique characteristics to suit different needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Resin Bound */}
            <Card className="overflow-hidden">
              <img
                src="/resin-bound.jpg"
                alt="Resin bound driveway"
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Resin Bound Driveways</h3>
                <p className="text-muted-foreground mb-4">
                  Resin and aggregate are mixed together before being trowelled onto a prepared surface, creating a smooth, permeable finish. This is our most popular option for modern homes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fully permeable - water drains through the surface</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Smooth, modern finish with no loose stones</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>UV stable - won't fade or discolor</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weed resistant and low maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wide range of colors and finishes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Resin Bonded */}
            <Card className="overflow-hidden">
              <img
                src="/resin-bonded.jpg"
                alt="Resin bonded driveway"
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Resin Bonded Driveways</h3>
                <p className="text-muted-foreground mb-4">
                  Resin is applied to the surface first, then loose aggregate is scattered on top, creating a textured finish. Ideal for traditional properties or areas requiring extra grip.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Textured surface with excellent grip</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Traditional gravel appearance without loose stones</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ideal for sloped driveways and ramps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cost-effective solution</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quick installation process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Not sure which option is right for you? Our team can help you choose the perfect solution for your property.
            </p>
            <Button
              size="lg"
              onClick={() => window.open("https://lp.teessideresindriveways.co.uk/contact/", "_blank")}
            >
              Get Expert Advice
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our straightforward process ensures your new resin driveway is installed to the highest standards with minimal disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
              <p className="text-muted-foreground">
                Contact us to discuss your requirements. We'll assess your property and provide expert recommendations tailored to your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Quote</h3>
              <p className="text-muted-foreground">
                Receive a comprehensive, no-obligation quote outlining the scope of work, materials, timeline, and costs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
              <p className="text-muted-foreground">
                Our experienced team prepares the base, mixes and applies the resin system, ensuring a flawless finish that meets industry standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Enjoy Your New Driveway</h3>
              <p className="text-muted-foreground">
                After curing (typically 24 hours), your stunning new resin driveway is ready to use and will enhance your property for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="benefits" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Resin Driveway Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're committed to delivering exceptional results that transform your property and exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
                <p className="text-muted-foreground">
                  We use only premium, UV-stable resins and high-quality aggregates to ensure your driveway looks stunning and lasts for decades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Check className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
                <p className="text-muted-foreground">
                  Our skilled team has extensive experience in resin surfacing, following best practices to deliver flawless results every time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Most installations are completed in 1-2 days, minimizing disruption to your daily routine while maintaining the highest standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Based in Teesside, we understand local weather conditions and ground types, ensuring optimal performance for your driveway.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Droplets className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Eco-Friendly Solutions</h3>
                <p className="text-muted-foreground">
                  Our permeable resin bound systems support sustainable drainage, reducing surface water runoff and environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Stunning Results</h3>
                <p className="text-muted-foreground">
                  Transform your property's curb appeal with a beautiful, modern driveway that adds value and makes a lasting impression.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about resin driveways, installation, and maintenance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is the difference between resin bound and resin bonded driveways?
                </AccordionTrigger>
                <AccordionContent>
                  Resin bound driveways are created by mixing resin and aggregate together before trowelling onto a surface, resulting in a smooth, permeable finish. Resin bonded driveways involve applying resin first, then scattering aggregate on top, creating a textured surface. Resin bound is fully permeable and has a modern appearance, while resin bonded offers excellent grip and a more traditional look.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How long does a resin driveway last?
                </AccordionTrigger>
                <AccordionContent>
                  When installed correctly using quality materials, a resin bound driveway can last 15-25 years or more. The longevity depends on factors such as the quality of the base preparation, the resin and aggregate used, installation standards, and ongoing maintenance. UV-stable resins prevent discoloration and degradation over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Is a resin driveway permeable?
                </AccordionTrigger>
                <AccordionContent>
                  Resin bound driveways are fully permeable, allowing water to drain through the surface naturally. This helps prevent puddles, reduces flood risk, and complies with sustainable drainage regulations (SuDS). Resin bonded surfaces are not permeable, so proper drainage must be in place.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How much does a resin driveway cost?
                </AccordionTrigger>
                <AccordionContent>
                  The cost varies depending on the size of the area, the type of resin system (bound or bonded), the condition of the existing surface, and the aggregate chosen. Generally, resin driveways are competitively priced compared to other premium surfacing options. Contact us for a free, no-obligation quote tailored to your specific project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can a resin driveway be installed over my existing surface?
                </AccordionTrigger>
                <AccordionContent>
                  In many cases, yes. Resin can be applied over existing concrete, tarmac, or block paving, provided the surface is structurally sound, stable, and properly prepared. This can save on groundwork costs. However, if the existing surface is severely damaged or unstable, a new base may be required. We'll assess your surface during the consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  How long does installation take?
                </AccordionTrigger>
                <AccordionContent>
                  Most residential resin driveway installations are completed within 1-2 days, depending on the size and complexity of the project. The surface is typically ready for light foot traffic after 4-6 hours and vehicular use after 24 hours of curing time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  What maintenance does a resin driveway require?
                </AccordionTrigger>
                <AccordionContent>
                  Resin driveways are very low maintenance. Regular sweeping to remove debris and occasional washing with water (or a mild detergent for stubborn stains) is usually sufficient. Avoid using harsh chemicals or high-pressure washers that could damage the surface. Weeds are rare but can be easily removed if they appear.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Will my resin driveway crack or fade?
                </AccordionTrigger>
                <AccordionContent>
                  When installed with UV-stable resin and proper base preparation, resin driveways are highly resistant to cracking and fading. The flexibility of the resin allows it to accommodate minor ground movement, and UV stabilizers prevent color degradation from sunlight exposure. Quality materials and professional installation are key to long-term performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  Is a resin driveway slippery when wet?
                </AccordionTrigger>
                <AccordionContent>
                  No, resin driveways provide good grip even in wet conditions. The aggregate within the resin creates a textured surface that offers traction. Resin bonded surfaces are particularly slip-resistant due to their more pronounced texture. Both systems are suitable for sloped driveways and areas requiring disabled access.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  Do I need planning permission for a resin driveway?
                </AccordionTrigger>
                <AccordionContent>
                  In most cases, no planning permission is required for resin driveways, especially resin bound systems which are permeable. However, if your driveway is larger than 5 square meters and uses a non-permeable surface, you may need to ensure proper drainage to comply with regulations. We can advise on specific requirements for your property.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">
                  What colors and finishes are available?
                </AccordionTrigger>
                <AccordionContent>
                  Resin driveways offer a wide range of colors and aggregate options, from natural stone tones (greys, browns, golds) to more vibrant colors. You can also choose different aggregate sizes for varied textures. We'll show you samples and help you select a finish that complements your property's style.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left">
                  Can resin driveways be repaired if damaged?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, resin driveways can be repaired. Small areas of damage can be patched by removing the affected section and applying new resin and aggregate. While repairs are possible, proper installation and quality materials minimize the need for future fixes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left">
                  Are resin driveways suitable for heavy vehicles?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, when installed with a properly prepared base, resin driveways can support regular car traffic and even heavier vehicles. The key is ensuring the sub-base is adequately compacted and of sufficient depth to distribute the load. We'll assess your requirements and prepare the base accordingly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left">
                  How do I get a quote for my resin driveway?
                </AccordionTrigger>
                <AccordionContent>
                  Simply contact us through our website or give us a call. We'll arrange a free consultation to assess your property, discuss your preferences, and provide a detailed, no-obligation quote. We're available 24/7 to answer your questions and help you get started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className="text-left">
                  What areas in Teesside do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We provide resin driveway installation services throughout Teesside, including Middlesbrough, Stockton-on-Tees, Billingham, Redcar, Thornaby, Yarm, Eaglescliffe, Ingleby Barwick, and Wynyard. If you're in the surrounding areas, please contact us to confirm coverage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving Teesside & Surrounding Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're proud to provide premium resin driveway services across Teesside and the wider region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Middlesbrough", url: "https://middlesbroughresindriveways.co.uk" },
              { name: "Stockton-on-Tees", url: "https://stocktonresindriveways.co.uk" },
              { name: "Billingham", url: "https://billinghamresindriveways.co.uk" },
              { name: "Redcar", url: "https://redcarresindriveways.co.uk" },
              { name: "Thornaby", url: "https://thornabyresindriveways.co.uk" },
              { name: "Yarm", url: "https://yarmresindriveways.co.uk" },
              { name: "Eaglescliffe", url: "https://eaglesclifferesindriveways.co.uk" },
              { name: "Ingleby Barwick", url: "https://inglebybarwickresindriveways.co.uk" },
              { name: "Wynyard", url: "https://wynyardresindriveways.co.uk" },
            ].map((area) => (
              <a
                key={area.name}
                href={area.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6 pb-6">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                    <p className="font-bold text-lg">{area.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">Resin Driveways</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see your area listed? Contact us to check if we cover your location.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Driveway?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Get your free, no-obligation quote today. We're available 24/7 to discuss your project and answer any questions.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => window.open("https://lp.teessideresindriveways.co.uk/contact/", "_blank")}
          >
            Request Your Free Quote Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Teesside Driveways</h3>
              <p className="text-background/80 mb-4">
                Premium resin bound and bonded driveway specialists serving Teesside and surrounding areas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("areas")}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Service Areas
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-background/80 mb-2">Available 24/7</p>
              <Button
                variant="outline"
                className="mb-4"
                onClick={() => window.open("https://lp.teessideresindriveways.co.uk/contact/", "_blank")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col gap-4">
              <p className="text-background/80 text-sm text-center">
                © 2025 Teesside Driveways, Varsity House, 2 Falcon Court, Preston Farm Industrial Estate, Stockton-on-Tees, TS18 3TS. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a
                  href="https://lp.teessideresindriveways.co.uk/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://lp.teessideresindriveways.co.uk/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="https://lp.teessideresindriveways.co.uk/disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
