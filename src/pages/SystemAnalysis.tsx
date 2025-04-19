
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HardDrive, Cpu, Database, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SystemAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">System Analysis</h2>
        <p className="text-muted-foreground">
          Detailed analysis of your system's performance and health
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <Progress value={42} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">RAM Usage</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67%</div>
            <Progress value={67} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Disk C:</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <Progress value={76} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Health Status</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">Fair</div>
            <div className="flex items-center mt-2">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
              <p className="text-xs text-muted-foreground">Some issues found</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Operating System</p>
                  <p>Windows 11 Pro</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Processor</p>
                  <p>Intel Core i7-10700K</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total RAM</p>
                  <p>16 GB DDR4</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Storage</p>
                  <p>512 GB SSD + 1 TB HDD</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Resource Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cleaner-lightPurple rounded flex items-center justify-center mr-3">
                    <span className="text-cleaner-purple font-medium">B</span>
                  </div>
                  <div>
                    <p className="font-medium">Browser</p>
                    <p className="text-sm text-muted-foreground">Chrome</p>
                  </div>
                </div>
                <div className="text-sm">1.8 GB</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cleaner-lightBlue rounded flex items-center justify-center mr-3">
                    <span className="text-cleaner-blue font-medium">V</span>
                  </div>
                  <div>
                    <p className="font-medium">Visual Studio Code</p>
                    <p className="text-sm text-muted-foreground">IDE</p>
                  </div>
                </div>
                <div className="text-sm">1.2 GB</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-100 rounded flex items-center justify-center mr-3">
                    <span className="text-amber-500 font-medium">S</span>
                  </div>
                  <div>
                    <p className="font-medium">Spotify</p>
                    <p className="text-sm text-muted-foreground">Music</p>
                  </div>
                </div>
                <div className="text-sm">0.6 GB</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-center">
        <Button size="lg" className="mt-6">
          Run Deep System Analysis
        </Button>
      </div>
    </div>
  );
}
