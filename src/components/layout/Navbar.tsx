import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, User, Info, LayoutDashboard, LogIn, UserPlus } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/aboutus", label: "About Us", icon: Info },
  ];

  const authItems = [
    { path: "/login", label: "Login", icon: LogIn },
    { path: "/signup", label: "Sign Up", icon: UserPlus },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          <img src="/lovable-uploads/8233bf9a-6f37-4969-b726-46839411f587.png" alt="ReadEasy" className="h-8 w-8" />
          ReadEasy
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Button
              key={path}
              variant={isActive(path) ? "default" : "ghost"}
              size="sm"
              onClick={() => navigate(path)}
              className="gap-2"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Right side - Auth & Theme */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-1">
            {authItems.map(({ path, label, icon: Icon }) => (
              <Button
                key={path}
                variant={isActive(path) ? "default" : "outline"}
                size="sm"
                onClick={() => navigate(path)}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;