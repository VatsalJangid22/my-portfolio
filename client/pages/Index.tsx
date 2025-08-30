import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiGit,
  SiGithub,
  SiDocker,
  SiJavascript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  Code2,
  Database,
  Server,
  FileCode,
  Monitor,
  Cpu,
  Globe,
  Smartphone,
  Coffee,
  Zap,
  MousePointer,
  Star,
  Briefcase,
  User,
  FolderOpen,
  ArrowRight,
  Play,
  Download,
  BrainCircuit,
  HardDriveUpload,
} from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      name: "JavaScript",
      category: "Language",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: SiTypescript,
      color: "#3178C6",
    },
    { name: "ReactJS", category: "Frontend", icon: SiReact, color: "#61DAFB" },
    { name: "NextJS", category: "Frontend and Backend", icon: RiNextjsFill },
    {
      name: "Node.js",
      category: "Backend",
      icon: SiNodedotjs,
      color: "#339933",
    },
    { name: "Express", category: "Backend", icon: SiExpress, color: "#68217A" },
    {
      name: "MongoDB",
      category: "Database",
      icon: SiMongodb,
      color: "#47A248",
    },
    { name: "MySQL", category: "Database", icon: SiMysql, color: "#2596be" },
    { name: "PHP", category: "Language", icon: SiPhp, color: "#777ab2" },
    { name: "Laravel", category: "Backend", icon: SiLaravel, color: "#f43002" },
    { name: "Git", category: "Tool", icon: SiGit, color: "#F05032" },
    { name: "GitHub", category: "Tool", icon: SiGithub },
    { name: "Docker", category: "Tool", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", category: "Cloud", icon: FaAws, color: "#FF9900" },
    { name: "REST APIs", category: "Backend", icon: Zap, color: "#00D9FF" },
  ];

  const projects = [
    {
      title: "Social Media Platform",
      description:
        "A full-stack social media app built with the MERN stack, featuring user authentication, profile management, post creation with image uploads, likes, comments, bookmarks, follow/unfollow, and real-time messaging with Socket.io.",
      tech: ["React", "Node.js", "MongoDB(mongoose)", "Redux", "TailwindCSS", "Express.js", "Socket.io"],
      github: "https://github.com/VatsalJangid22/social-media-project",
      demo: "https://social-media-project-v2n6.onrender.com/",
      image:
        "https://i.postimg.cc/rmhytjr0/Screenshot-2025-08-30-163210.png",
      status: "Live",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Login and Payment Gateway Integration Plugin",
      description:
        "A custom WordPress plugin that integrates seamless social login options (Google, Facebook) and secure payment gateways (Razorpay, Stripe). It allows users to easily sign up or log in using their social accounts while providing businesses with flexible and reliable payment processing directly on their WordPress site.",
      tech: ["PHP", "Wordpress", "SQL", "Plugin Development"],
    //   github: "https://github.com/VatsalJangid22/social-media-project",
    //   demo: "https://social-media-project-v2n6.onrender.com/",
      image:
        "https://i.postimg.cc/zG3NfG9J/Gemini-Generated-Image-n34nvln34nvln34n.png",
    //   status: "Live",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    emailjs
      .send(
        "service_dc137ig",
        "template_4z6j91h",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          title: "Portfolio Contact",
          time: new Date().toLocaleString(),
        },
        "Ru2d7a4JMAB_mUUEM"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setError("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-lg">
              <span className="text-primary">Vatsal</span>
              <span className="text-muted-foreground ml-1">Jangid</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Work", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Available for work
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Full Stack</span>
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  I craft digital experiences with modern technologies. 8
                  months of building production-grade applications that users
                  love.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 group shadow-lg hover:shadow-xl transition-all"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Let's work together
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                size="lg"
                  variant="outline"
                  className="group border-border hover:bg-accent/10 hover:border-accent"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Vatsal_Jangid_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div
              className={`relative ${
                isVisible ? "slide-in-right" : "opacity-0"
              }`}
            >
              <div className="relative flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/sfL4xzvH/erasebg-transformed1.png"
                  alt="Developer workspace"
                  className="rounded-2xl w-full h-auto object-contain shadow-lg"
                />

                {/* 1.5+ Years Card */}
                <div className="absolute top-2 left-2 bg-card border border-border rounded-2xl p-3 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Code2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">8+ Months</div>
                      <div className="text-xs text-muted-foreground">
                        Experience
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10+ Projects Card */}
                <div className="absolute top-2 right-2 bg-card border border-border rounded-2xl p-3 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">10+ Projects</div>
                      <div className="text-xs text-muted-foreground">
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Skills/Tiles */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: Code2,
                  title: "Frontend Development",
                  desc: "Creating beautiful, responsive interfaces with React, TypeScript, and modern CSS.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Server,
                  title: "Backend Development",
                  desc: "Building robust APIs and server logic with Node.js, Express, and PHP/Laravel.",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Database,
                  title: "Database Design",
                  desc: "Designing efficient database schemas with MongoDB, MySQL, and PostgreSQL.",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: HardDriveUpload,
                  title: "Application Deployment",
                  desc: "Deploying applications with Docker, CI/CD pipelines, and cloud platforms like AWS, Vercel, and DigitalOcean.",
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  icon: BrainCircuit,
                  title: "AI Integration",
                  desc: "Integrating AI solutions.",
                  color: "from-pink-500 to-rose-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border shadow-sm bg-card"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right side - About Me */}
            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    About Me
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Full Stack Developer with 1.5 years of
                    experience creating digital solutions that make a
                    difference. My journey began with curiosity about how things
                    work on the web.
                  </p>
                  <p>
                    I specialize in the MERN stack and have extensive experience
                    with PHP/Laravel. I believe in writing clean, maintainable
                    code and creating experiences that users genuinely enjoy.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open source, or sharing
                    knowledge with the community.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6" id="work">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I use modern tools and technologies to build scalable,
              maintainable applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:px-6 md:px-10 lg:px-14 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border shadow-sm bg-card"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <skill.icon
                      className="h-8 w-8 mx-auto text-muted-foreground group-hover:scale-110 transition-transform"
                      style={{
                        color: skill.color || undefined, // Always show color if defined
                      }}
                    />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {skill.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work building modern web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border shadow-lg hover:shadow-xl transition-all duration-500 bg-card"
              >
                <div className="relative aspect-video overflow-hidden bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>

                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "Live"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      } text-white border-0`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="shadow-lg bg-card/90 backdrop-blur-sm"
                        onClick={() => window.open(project.github, "_blank")}
                        aria-label="View GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="shadow-lg bg-card/90 backdrop-blur-sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        aria-label="View Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's create
              something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      text: "vatsal22.11.2002@gmail.com",
                      href: "mailto:vatsal22.11.2002@gmail.com",
                    },
                    {
                      icon: Github,
                      text: "GitHub ",
                      href: "https://github.com/VatsalJangid22",
                    },
                    {
                      icon: Linkedin,
                      text: "Linkedin",
                      href: "https://www.linkedin.com/in/vatsal-jangid-30b041223/",
                    },
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {contact.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Card className="border-border shadow-lg bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Name
                        </label>
                        <Input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="border-border focus:border-primary bg-background"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="border-border focus:border-primary bg-background"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="border-border focus:border-primary bg-background"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 group"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    {success && <div className="text-green-600">{success}</div>}
                    {error && <div className="text-red-600">{error}</div>}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              © 2025 Vatsal Jangid. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              Built with passion using React & Tailwind CSS
              <Zap className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
