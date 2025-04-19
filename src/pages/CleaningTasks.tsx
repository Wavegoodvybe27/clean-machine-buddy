
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { HardDrive, Trash2, Cpu, FileText, RotateCw } from "lucide-react";

export default function CleaningTasks() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Cleaning Tasks</h2>
        <p className="text-muted-foreground">
          Optimize your system by completing these cleaning tasks
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Clean</CardTitle>
          <CardDescription>
            Remove temporary files, browser cache, and recycle bin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Checkbox id="temp-files" />
              <div className="space-y-1">
                <label
                  htmlFor="temp-files"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2 text-cleaner-purple" />
                  Temporary Files
                </label>
                <p className="text-sm text-muted-foreground">
                  Clear temporary files (2.1 GB)
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Checkbox id="browser-cache" />
              <div className="space-y-1">
                <label
                  htmlFor="browser-cache"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <Cpu className="h-4 w-4 mr-2 text-cleaner-blue" />
                  Browser Cache
                </label>
                <p className="text-sm text-muted-foreground">
                  Clear browser cache and cookies (1.3 GB)
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Checkbox id="recycle-bin" />
              <div className="space-y-1">
                <label
                  htmlFor="recycle-bin"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-2 text-cleaner-danger" />
                  Recycle Bin
                </label>
                <p className="text-sm text-muted-foreground">
                  Empty the recycle bin (3.4 GB)
                </p>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button variant="outline" className="mr-2">
                Select All
              </Button>
              <Button>
                Clean Selected
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Deep Clean</CardTitle>
          <CardDescription>
            Advanced cleaning operations for more thorough system maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Checkbox id="system-logs" />
              <div className="space-y-1">
                <label
                  htmlFor="system-logs"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2 text-cleaner-purple" />
                  System Logs
                </label>
                <p className="text-sm text-muted-foreground">
                  Clear old system logs (180 MB)
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Checkbox id="unused-apps" />
              <div className="space-y-1">
                <label
                  htmlFor="unused-apps"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <HardDrive className="h-4 w-4 mr-2 text-cleaner-blue" />
                  Unused Applications
                </label>
                <p className="text-sm text-muted-foreground">
                  Identify rarely used applications to uninstall
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Checkbox id="registry-clean" />
              <div className="space-y-1">
                <label
                  htmlFor="registry-clean"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <RotateCw className="h-4 w-4 mr-2 text-cleaner-warning" />
                  Registry Cleanup
                </label>
                <p className="text-sm text-muted-foreground">
                  Fix and optimize system registry (Advanced)
                </p>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button variant="outline" className="mr-2">
                Select All
              </Button>
              <Button>
                Run Deep Clean
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
