
import { Bot, Zap, BrainCircuit, Code, Camera, MessageSquare, Mic, Image } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import NeuralFlowAgent from '../ai/NeuralFlowAgent';

const services = [
  {
    icon: BrainCircuit,
    title: 'Intelligent Process Automation (IPA)',
    description: 'Advanced AI-powered business process automation that learns, adapts, and optimizes workflows automatically. Reduce manual tasks by 90% with our intelligent automation solutions.',
    keywords: 'intelligent process automation, IPA, business process automation, AI workflow automation'
  },
  {
    icon: Zap,
    title: 'AI Workflow Optimization',
    description: 'Transform inefficient processes with AI workflow optimization tools. Our solutions identify bottlenecks, streamline operations, and boost productivity by 300%.',
    keywords: 'AI workflow optimization, workflow automation tools, process optimization, business efficiency'
  },
  {
    icon: Bot,
    title: 'Custom AI Agent Development',
    description: 'Bespoke AI agents designed for your specific business needs. From customer service to data analysis, our AI agents work 24/7 to drive results.',
    keywords: 'custom AI agents, AI agent development, business AI solutions, automated AI assistants'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI that handles customer support, lead qualification, and user engagement. Improve customer satisfaction while reducing support costs.',
    keywords: 'AI chatbots, virtual assistants, conversational AI, customer service automation'
  },
  {
    icon: Code,
    title: 'Enterprise AI Automation Systems',
    description: 'Large-scale intelligent automation systems for enterprises. Integrate AI across departments for seamless operations and data-driven decision making.',
    keywords: 'enterprise AI automation, intelligent automation systems, AI integration, business automation'
  },
  {
    icon: Camera,
    title: 'AI-Powered Content Automation',
    description: 'Automate content creation, image processing, and media production with advanced AI. Generate high-quality content at scale for marketing and operations.',
    keywords: 'AI content automation, automated content creation, AI image processing, content generation'
  },
  {
    icon: Mic,
    title: 'Voice & Document AI Processing',
    description: 'Advanced AI for voice recognition, document processing, and data extraction. Automate data entry and document workflows with 99% accuracy.',
    keywords: 'voice AI processing, document automation, AI data extraction, automated data entry'
  },
  {
    icon: Image,
    title: 'AI Business Intelligence & Analytics',
    description: 'Transform raw data into actionable insights with AI-powered analytics. Predictive modeling and automated reporting for smarter business decisions.',
    keywords: 'AI business intelligence, automated analytics, predictive AI, business intelligence automation'
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section ref={sectionRef} id="services-section" className="py-20 relative overflow-hidden section-transition">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient animate-gradient-shift">AI Business Automation Services</h2>
            <h3 className="text-xl md:text-2xl text-accent-blue mt-2 font-semibold">Intelligent Process Automation • Workflow Optimization • Custom AI Solutions</h3>
            <p className="text-base md:text-lg text-foreground/70 mt-4 animate-slide-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Transform your business operations with our proven <strong>AI automation solutions</strong>. We help companies boost efficiency by 300%, reduce operational costs by 60%, and accelerate growth through <strong>intelligent process automation</strong> and <strong>AI workflow optimization</strong>. Our comprehensive suite includes custom AI agents, automated workflows, and enterprise-grade solutions.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full border border-accent-blue/30">🚀 Proven ROI in 30 Days</span>
              <span className="bg-accent-pink/10 text-accent-pink px-3 py-1 rounded-full border border-accent-pink/30">⚡ 90% Task Automation</span>
              <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/30">💰 60% Cost Reduction</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-6 md:p-8 text-center flex flex-col items-center scroll-reveal animate-float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${6 + index * 0.5}s`
                }}
              >
                <div className="bg-light-purple p-4 rounded-full mb-6 border border-white/10 animate-pulse-glow">
                  <service.icon className="h-6 w-6 md:h-8 md:w-8 text-accent-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-foreground/60 mb-6 flex-grow">{service.description}</p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 hover:text-accent-blue w-full"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center scroll-reveal">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/90 text-black font-bold px-8 py-6 text-lg button-3d"
              >
                Book a Free Demo
              </Button>
              <Button
                onClick={() => setIsAgentOpen(true)}
                size="lg"
                variant="outline"
                className="border-accent-pink/50 text-accent-pink hover:bg-accent-pink/10 hover:text-accent-pink px-8 py-6 text-lg button-3d"
              >
                Talk to Our AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      <NeuralFlowAgent 
        isOpen={isAgentOpen} 
        onClose={() => setIsAgentOpen(false)} 
      />
    </>
  );
};

export default ServicesSection;
