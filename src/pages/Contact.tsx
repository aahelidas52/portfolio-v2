import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, MapPin } from "lucide-react";
import useSectionFocus from "@/hooks/useSectionFocus";

const Contact = () => {
  const { sectionRef, isFocused } = useSectionFocus();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Contact Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm always interested in new opportunities, collaborations, and conversations 
              about biomedical engineering and research.
            </p>
            <div className="w-16 h-0.5 bg-accent rounded-full mt-8" />
          </div>

          <section
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`section-focusable ${isFocused ? 'section-focused' : ''}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="flat-card rounded-2xl p-6 lg:p-8 border">
                  <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-xl font-bold text-foreground mb-6">Get in Touch</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a question about my projects, want to discuss potential 
                  collaboration opportunities, or just want to say hello, I'd love to hear from you.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:aaheli.das2003@gmail.com"
                    className="block group"
                  >
                    <div className="flat-card rounded-2xl p-5 border hover:border-accent/30 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary-light group-hover:scale-110 transition-transform">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                          <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                            aaheli.das2003@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/aaheli-das-990247265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flat-card rounded-2xl p-5 border hover:border-accent/30 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary-light group-hover:scale-110 transition-transform">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">LinkedIn</p>
                          <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                            linkedin.com/in/aaheli-das-990247265
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Connect with me!
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flat-card rounded-2xl p-5 border">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                        <p className="text-foreground font-medium">
                          San Jose, California
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Open to remote and on-site opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;