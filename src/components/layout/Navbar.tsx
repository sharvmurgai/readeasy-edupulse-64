import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, User, Info, LayoutDashboard, LogIn, UserPlus, MessageSquare, FileText, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state - replace with real auth
  const [user] = useState({ name: "John Doe", email: "john@example.com", avatar: "" });

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

        {/* Right side - Auth */}
        <div className="flex items-center gap-2">
          
          {isLoggedIn ? (
            /* User Profile Dropdown */
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-primary/10">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                {/* Feedback Section */}
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                  My Activity
                </DropdownMenuLabel>
                <DropdownMenuItem className="cursor-pointer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>My Feedback</span>
                    <span className="text-xs text-muted-foreground">View submitted feedback</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <FileText className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>My Requests</span>
                    <span className="text-xs text-muted-foreground">Track your requests</span>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                {/* Settings & Logout */}
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer text-destructive focus:text-destructive"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            /* Auth Buttons for non-logged in users */
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
          )}
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