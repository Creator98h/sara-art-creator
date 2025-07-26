import { useState } from "react";
import { ResizableNavbar } from "@/components/ui/resizable-navbar";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { Timeline } from "@/components/ui/timeline";
import { GlowingGallery } from "@/components/ui/glowing-gallery";
import { TracingBeamModal } from "@/components/ui/tracing-beam-modal";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  MapPin,
  Palette,
  Lightbulb,
  PenTool,
  Target,
  ChevronRight
} from "lucide-react";

// Import images
import saraPortrait from "@/assets/sara-portrait.jpg";
import projectWebDesign from "@/assets/project-web-design.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import projectPhotography from "@/assets/project-photography.jpg";
import projectBranding from "@/assets/project-branding.jpg";
import campaignMarketing from "@/assets/campaign-marketing.jpg";
import campaignSocial from "@/assets/campaign-social.jpg";
import brand1 from "@/assets/brand-1.png";
import brand2 from "@/assets/brand-2.png";
import brand3 from "@/assets/brand-3.png";
import brand4 from "@/assets/brand-4.png";

const Portfolio = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [workModalOpen, setWorkModalOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "WORKS", href: "#works" },
    { label: "CAMPAIGNS", href: "#campaigns" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" }
  ];

  const educationTimeline = [
    {
      title: "Master of Fine Arts",
      date: "2018-2020",
      description: "Digital Art & Design, University of Tehran. Specialized in contemporary digital media and visual storytelling.",
    },
    {
      title: "Bachelor of Arts",
      date: "2014-2018", 
      description: "Graphic Design, Art University. Foundation in traditional and digital design principles.",
    },
    {
      title: "Professional Certification",
      date: "2020",
      description: "Advanced Creative Direction, Adobe Certified Expert in Creative Suite applications.",
    }
  ];

  const experienceTimeline = [
    {
      title: "Senior Art Director",
      date: "2022-Present",
      description: "Leading creative direction for major brand campaigns at Creative Agency Tehran. Managing teams of 12+ designers and overseeing 50+ projects annually.",
    },
    {
      title: "Art Director", 
      date: "2020-2022",
      description: "Developed visual concepts for digital campaigns with 200% engagement increase. Specialized in social media and web design.",
    },
    {
      title: "Senior Graphic Designer",
      date: "2018-2020",
      description: "Created compelling visuals for print and digital media. Won 3 design awards for innovative branding solutions.",
    }
  ];

  const featuredWorks = [
    {
      src: projectWebDesign,
      alt: "Digital Web Design",
      title: "E-commerce Platform Redesign"
    },
    {
      src: projectIllustration, 
      alt: "Creative Illustration",
      title: "Brand Illustration Series"
    },
    {
      src: projectPhotography,
      alt: "Professional Photography",
      title: "Product Photography Campaign"
    }
  ];

  const campaigns = [
    {
      id: "luxury-brand",
      title: "Luxury Brand Campaign",
      image: campaignMarketing,
      subtitle: "Premium fashion brand visual identity and campaign development",
      description: "Developed a comprehensive visual identity system for a luxury fashion brand, including logo design, brand guidelines, packaging design, and a full-scale advertising campaign. The project resulted in a 150% increase in brand recognition and 300% boost in sales during the launch quarter. The campaign was featured in multiple design publications and won the Iranian Design Award 2023.",
      socialDescription: "Extended the campaign across all social media platforms with custom content strategies, resulting in 500K+ engagement and 2M+ reach across platforms."
    },
    {
      id: "tech-startup",
      title: "Tech Startup Branding", 
      image: campaignSocial,
      subtitle: "Complete brand identity for innovative fintech startup",
      description: "Created complete brand identity for a revolutionary fintech startup, from conceptual sketches to final brand guidelines. Designed user interface elements, marketing materials, and digital campaign assets. The rebrand helped secure $5M in Series A funding and establish market presence against major competitors. The project showcased innovative use of AI-generated elements combined with traditional design principles.",
      socialDescription: "Social media strategy included LinkedIn thought leadership content, Instagram visual storytelling, and Twitter engagement campaigns that grew follower base by 400% in 6 months."
    }
  ];

  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Art Direction",
      description: "Strategic visual leadership for campaigns, brands, and creative projects with focus on innovative storytelling."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Visual Concept Development", 
      description: "Transform abstract ideas into compelling visual narratives that resonate with target audiences."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Illustration",
      description: "Custom illustrations, digital art, and graphic elements that enhance brand identity and messaging."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Branding Consultancy",
      description: "Comprehensive brand strategy, identity design, and implementation across all touchpoints."
    }
  ];

  const skills = [
    "Adobe Photoshop", "Adobe Illustrator", "After Effects", "3DS Max", 
    "Adobe InDesign", "Figma", "Sketch", "Procreate", "Cinema 4D", 
    "Brand Strategy", "Creative Direction", "Team Leadership"
  ];

  const partnerBrands = [
    { name: "TechCorp", src: brand1 },
    { name: "LuxuryFashion", src: brand2 },
    { name: "CreativeStudio", src: brand3 },
    { name: "BusinessSolutions", src: brand4 },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar items={navItems} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 opacity-50"></div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Sara Ali<br />
                <span className="gradient-text">Mohammadi</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground tracking-wider">
                ART DIRECTOR
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Creating compelling visual narratives that bridge creativity and strategy. 
              Transforming ideas into impactful designs that resonate with audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MovingBorderButton variant="accent">
                <Download className="h-4 w-4 mr-2" />
                Download Portfolio
              </MovingBorderButton>
              <MovingBorderButton variant="golden" onClick={scrollToContact}>
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </MovingBorderButton>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={saraPortrait}
                alt="Sara Ali Mohammadi - Art Director"
                className="relative z-10 w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 6 years of experience in visual communication and art direction, 
                  I specialize in creating compelling narratives through innovative design solutions. 
                  My work spans across digital platforms, traditional media, and brand experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of visual storytelling to connect, inspire, and drive meaningful 
                  change. Each project is an opportunity to push creative boundaries while delivering 
                  exceptional results for clients and their audiences.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Digital Illustration", "Travel Photography", "Culinary Arts", "NGO Volunteer Work"].map((interest) => (
                      <Badge key={interest} variant="outline" className="text-accent border-accent">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl font-semibold text-center text-primary">Education & Journey</h3>
              <Timeline items={educationTimeline} />
            </div>
          </div>
        </div>
      </section>

      {/* Works Preview Section */}
      <section id="works" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-primary">Featured Works</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of recent projects spanning digital design, illustration, and photography.
            </p>
            
            <GlowingGallery 
              images={featuredWorks}
              onImageClick={() => setWorkModalOpen(true)}
            />
            
            <MovingBorderButton 
              variant="accent"
              onClick={() => setWorkModalOpen(true)}
            >
              See All Works
              <ChevronRight className="h-4 w-4 ml-2" />
            </MovingBorderButton>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="campaigns" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Campaigns</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaigns.map((campaign) => (
                <Card 
                  key={campaign.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-accent glow-effect"
                  onClick={() => setSelectedCampaign(campaign.id)}
                >
                  <CardContent className="p-0">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                        {campaign.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Services & Expertise</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="text-center group hover:shadow-accent transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-primary">Trusted by Leading Brands</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with innovative companies to create impactful visual experiences 
              that drive engagement and deliver results.
            </p>
            
            <div className="py-8">
              <LogoCarousel logos={partnerBrands} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Experience & Resume</h2>
            
            <Timeline items={experienceTimeline} />
            
            <div className="text-center mt-12">
              <MovingBorderButton variant="golden">
                <Download className="h-4 w-4 mr-2" />
                Download Full Resume
              </MovingBorderButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-primary">Let's Create Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? I'm here to help create compelling visual 
              experiences that resonate with your audience and drive results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-muted-foreground">+98 912 345 6789</p>
                  <p className="text-muted-foreground">+98 021 8765 4321</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-muted-foreground">sara@artdirection.com</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Location</h3>
                  <p className="text-muted-foreground">Tehran, Iran</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="p-3 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-medium">Sara Ali Mohammadi</p>
              <p className="text-sm opacity-80">Art Director & Visual Storyteller</p>
            </div>
            <div className="flex space-x-6 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="text-sm opacity-80">
              © 2024 Sara Ali Mohammadi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Campaign Modal */}
      <TracingBeamModal
        isOpen={!!selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        title={campaigns.find(c => c.id === selectedCampaign)?.title || ""}
        subtitle={campaigns.find(c => c.id === selectedCampaign)?.subtitle}
      >
{selectedCampaign && (
          <div className="space-y-8">
            <img
              src={campaigns.find(c => c.id === selectedCampaign)?.image}
              alt={campaigns.find(c => c.id === selectedCampaign)?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {campaigns.find(c => c.id === selectedCampaign)?.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Social Media Extension</h3>
              <p className="text-muted-foreground leading-relaxed">
                {campaigns.find(c => c.id === selectedCampaign)?.socialDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src={campaigns.find(c => c.id === selectedCampaign)?.image}
                alt="Campaign detail 1"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src={campaigns.find(c => c.id === selectedCampaign)?.image}
                alt="Campaign detail 2"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </TracingBeamModal>

      {/* Works Modal */}
      <TracingBeamModal
        isOpen={workModalOpen}
        onClose={() => setWorkModalOpen(false)}
        title="Complete Works Portfolio"
        subtitle="Comprehensive showcase of projects across all categories"
      >
        <div className="space-y-12">
          {[
            { title: "Digital & Web Design", image: projectWebDesign },
            { title: "Illustration", image: projectIllustration },
            { title: "Photography", image: projectPhotography },
            { title: "Branding", image: projectBranding }
          ].map((category, index) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover rounded-lg glow-effect cursor-pointer"
                />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover rounded-lg glow-effect cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </TracingBeamModal>
    </div>
  );
};

export default Portfolio;