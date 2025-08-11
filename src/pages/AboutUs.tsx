import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/landing/Reveal";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container py-20 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
              About <span className="text-brand">ReadEasy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering readers of all ages and abilities with AI-powered text simplification technology 
              that makes complex content accessible and enjoyable for everyone.
            </p>
          </Reveal>
        </section>

        {/* Mission Section */}
        <section className="container py-16">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To break down reading barriers and make information accessible to everyone, 
                regardless of their reading level, age, or learning differences.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal className="animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">What We Do</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  ReadEasy uses advanced AI technology to transform complex texts into clear, 
                  easy-to-understand content. Whether you're a student struggling with academic 
                  material, a professional navigating industry jargon, or someone with reading 
                  difficulties, we're here to help.
                </p>
                <Button className="hover-scale">
                  Try ReadEasy Now
                </Button>
              </div>
            </Reveal>
            <Reveal className="animate-fade-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-elevated w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values Section */}
        <section className="container py-16">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal className="animate-fade-in">
              <Card className="text-center p-6 hover-scale">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Accessibility First</h3>
                  <p className="text-muted-foreground">
                    We believe reading should be accessible to everyone, regardless of age or reading level.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal className="animate-fade-in">
              <Card className="text-center p-6 hover-scale">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Constantly pushing the boundaries of what's possible with AI and language technology.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal className="animate-fade-in">
              <Card className="text-center p-6 hover-scale">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Building a supportive community where everyone can improve their reading experience.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal className="animate-fade-in">
              <Card className="text-center p-6 hover-scale">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Committed to delivering the highest quality tools and user experience.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* Team Section */}
        <section className="container py-16">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                The passionate individuals behind ReadEasy
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            <Reveal className="animate-fade-in">
              <Card className="text-center p-6 hover-scale">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://i.ibb.co/8D5wwCJ3/Whats-App-Image-2025-08-02-at-17-23-20.jpg" 
                      alt="Sharv Murgai" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sharv Murgai</h3>
                  <p className="text-brand font-medium mb-3">CEO & Founder</p>
                  <p className="text-muted-foreground text-sm">
                    Passionate about making education accessible to all through innovative technology.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to make reading easier?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users who are already transforming their reading experience with ReadEasy.
              </p>
              <Button size="xl" className="hover-scale">
                Get Started Today
              </Button>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;