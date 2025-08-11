import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    text: "",
    title: "",
    targetAge: "",
    language: "english",
    file: null as File | null
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.text && !formData.file) {
      toast({
        title: "Input Required",
        description: "Please enter text or upload a file to process",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Processing Complete!",
        description: "Your text has been successfully simplified."
      });
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navbar />
      
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">ReadEasy</h1>
              <p className="text-lg text-muted-foreground">
                Transform complex text into easy-to-read content
              </p>
            </div>

            <Card className="shadow-lg border-0 bg-card/80 backdrop-blur">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Text Simplification Tool</CardTitle>
                <CardDescription>
                  Choose one input method below to process your content
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Input Options Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Choose Your Input Method</h3>
                    <p className="text-sm text-muted-foreground">You can either type your text or upload an image</p>
                  </div>

                  {/* Option 1: Text Input */}
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                      <h4 className="font-semibold text-foreground">Type Your Text</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="text" className="text-base font-medium">
                          Enter the text you want to simplify:
                        </Label>
                        <Textarea
                          id="text"
                          placeholder="Enter your text here..."
                          value={formData.text}
                          onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
                          className="min-h-[120px] resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-base font-medium">
                          Enter the title of the text (optional):
                        </Label>
                        <Input
                          id="title"
                          placeholder="Enter the title here..."
                          value={formData.title}
                          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* OR Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-muted-foreground/20"></span>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-background px-4 text-muted-foreground font-medium">OR</span>
                    </div>
                  </div>

                  {/* Option 2: File Upload */}
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                      <h4 className="font-semibold text-foreground">Upload an Image</h4>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-base font-medium">
                        Upload an image with text to simplify:
                      </Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
                        <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <Label 
                          htmlFor="file-upload" 
                          className="cursor-pointer text-sm text-muted-foreground hover:text-foreground"
                        >
                          {formData.file ? formData.file.name : "Choose Image File | No file chosen"}
                        </Label>
                        <Input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <p className="text-xs text-muted-foreground mt-2">Supports: JPG, PNG</p>
                      </div>
                    </div>
                  </div>

                {/* Target Age */}
                <div className="space-y-2">
                  <Label htmlFor="target-age" className="text-base font-medium">
                    Enter your target age:
                  </Label>
                  <Input
                    id="target-age"
                    placeholder="Enter your target age here."
                    value={formData.targetAge}
                    onChange={(e) => setFormData(prev => ({ ...prev, targetAge: e.target.value }))}
                  />
                </div>

                {/* Language Selection */}
                <div className="space-y-2">
                  <Label className="text-base font-medium">
                    Select output language:
                  </Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-background border shadow-lg">
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="assamese">Assamese</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="bodo">Bodo</SelectItem>
                      <SelectItem value="dogri">Dogri</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                      <SelectItem value="kashmiri">Kashmiri</SelectItem>
                      <SelectItem value="konkani">Konkani</SelectItem>
                      <SelectItem value="maithili">Maithili</SelectItem>
                      <SelectItem value="malayalam">Malayalam</SelectItem>
                      <SelectItem value="manipuri">Manipuri</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="nepali">Nepali</SelectItem>
                      <SelectItem value="odia">Odia</SelectItem>
                      <SelectItem value="punjabi">Punjabi</SelectItem>
                      <SelectItem value="sanskrit">Sanskrit</SelectItem>
                      <SelectItem value="santali">Santali</SelectItem>
                      <SelectItem value="sindhi">Sindhi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Process Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full py-3 text-lg font-medium bg-primary hover:bg-primary/90"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Process"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;