import { useState } from "react";
import { ResizableNavbar } from "@/components/ui/resizable-navbar";
import { GlowingGallery } from "@/components/ui/glowing-gallery";
import { TracingBeamModal } from "@/components/ui/tracing-beam-modal";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import images
import projectWebDesign from "@/assets/project-web-design.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import projectPhotography from "@/assets/project-photography.jpg";
import projectBranding from "@/assets/project-branding.jpg";

const Works = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: "CAMPAIGNS", href: "/#campaigns" },
    { label: "SERVICES", href: "/#services" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "/#contact" }
  ];

  const allWorks = {
    "Digital & Web Design": [
      { src: projectWebDesign, alt: "E-commerce Platform", title: "E-commerce Platform Redesign" },
      { src: projectWebDesign, alt: "Corporate Website", title: "Corporate Website Design" },
      { src: projectWebDesign, alt: "Portfolio Site", title: "Artist Portfolio Website" },
      { src: projectWebDesign, alt: "Landing Page", title: "Product Landing Page" }
    ],
    "Illustration": [
      { src: projectIllustration, alt: "Brand Illustration", title: "Brand Illustration Series" },
      { src: projectIllustration, alt: "Editorial Illustration", title: "Magazine Editorial Art" },
      { src: projectIllustration, alt: "Character Design", title: "Character Design Collection" },
      { src: projectIllustration, alt: "Infographic", title: "Data Visualization Design" }
    ],
    "Photography": [
      { src: projectPhotography, alt: "Product Photography", title: "Product Photography Campaign" },
      { src: projectPhotography, alt: "Fashion Photography", title: "Fashion Editorial Shoot" },
      { src: projectPhotography, alt: "Portrait Photography", title: "Corporate Portraits" },
      { src: projectPhotography, alt: "Event Photography", title: "Brand Event Coverage" }
    ],
    "Branding": [
      { src: projectBranding, alt: "Brand Identity", title: "Complete Brand Identity" },
      { src: projectBranding, alt: "Logo Design", title: "Logo Design Collection" },
      { src: projectBranding, alt: "Packaging", title: "Product Packaging Design" },
      { src: projectBranding, alt: "Brand Guidelines", title: "Brand Guidelines Manual" }
    ]
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar 
        items={navItems.map(item => ({
          ...item,
          href: "#",
          onClick: () => handleNavigation(item.href)
        }))} 
      />

      {/* Sticky Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-accent/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </button>
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-primary">Complete Works</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my comprehensive portfolio spanning digital design, illustration, 
                photography, and branding projects across various industries and creative disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {Object.entries(allWorks).map(([category, works]) => (
              <div key={category} className="space-y-8">
                <h2 className="text-3xl font-bold text-primary text-center">{category}</h2>
                <GlowingGallery 
                  images={works}
                  onImageClick={() => setSelectedProject(category)}
                  itemsPerSlide={3}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <TracingBeamModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject || ""}
        subtitle="Detailed project showcase and case study"
      >
        {selectedProject && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allWorks[selectedProject as keyof typeof allWorks]?.map((work, index) => (
                <img
                  key={index}
                  src={work.src}
                  alt={work.alt}
                  className="w-full h-48 object-cover rounded-lg glow-effect"
                />
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                This collection showcases the depth and variety of work in {selectedProject?.toLowerCase()}. 
                Each project represents a unique challenge and creative solution, demonstrating mastery 
                of both technical skills and artistic vision. From concept development to final execution, 
                these works exemplify innovative design thinking and attention to detail.
              </p>
            </div>
          </div>
        )}
      </TracingBeamModal>
    </div>
  );
};

export default Works;