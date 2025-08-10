const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ReadEasy. All rights reserved.</p>
        <nav className="flex gap-6">
          <a href="#how" className="story-link">How it works</a>
          <a href="#proof" className="story-link">Recognition</a>
          <a href="#" className="story-link">Privacy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
