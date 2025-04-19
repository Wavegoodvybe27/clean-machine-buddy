
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  HardDrive, 
  Trash2, 
  Cpu, 
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your system's health and recommended cleaning tasks
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Storage Usage</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <Progress value={76} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              120.5 GB used of 158 GB
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <Trash2 className="mr-2 h-4 w-4" />
              Optimize Storage
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Memory Health</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <div className="flex items-center mt-4">
              <div className="w-3 h-3 rounded-full bg-cleaner-success mr-2"></div>
              <p className="text-xs text-muted-foreground">
                4.2 GB available of 16 GB
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <CheckCircle className="mr-2 h-4 w-4" />
              Memory Optimizer
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Last Cleanup</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14 days ago</div>
            <div className="flex items-center mt-4">
              <div className="w-3 h-3 rounded-full bg-cleaner-warning mr-2"></div>
              <p className="text-xs text-muted-foreground">
                Recommended: Weekly cleaning
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <Clock className="mr-2 h-4 w-4" />
              Schedule Cleanup
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Recommended Actions</h3>
      
      <div className="space-y-4">
        <Card className="border-cleaner-warning border-l-4">
          <CardHeader className="flex flex-row items-center pb-2">
            <AlertTriangle className="h-5 w-5 text-cleaner-warning mr-2" />
            <div>
              <CardTitle className="text-base">Temporary files need cleaning</CardTitle>
              <CardDescription>
                3.2 GB of temporary files can be removed to free up space
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end py-2">
            <Button variant="ghost" size="sm">
              Ignore
            </Button>
            <Button size="sm" className="ml-2">
              Clean Now
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="border-cleaner-warning border-l-4">
          <CardHeader className="flex flex-row items-center pb-2">
            <AlertTriangle className="h-5 w-5 text-cleaner-warning mr-2" />
            <div>
              <CardTitle className="text-base">Browser cache is large</CardTitle>
              <CardDescription>
                1.8 GB of browser cache can be cleared
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end py-2">
            <Button variant="ghost" size="sm">
              Ignore
            </Button>
            <Button size="sm" className="ml-2">
              Clean Now
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Performance graph visualization</p>
              <p className="text-sm text-muted-foreground mt-2">(Graph placeholder)</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Cleaning Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Temp Files Cleanup</p>
                  <p className="text-sm text-muted-foreground">Scheduled weekly</p>
                </div>
                <Button size="sm" variant="outline">
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">System Scan</p>
                  <p className="text-sm text-muted-foreground">Scheduled monthly</p>
                </div>
                <Button size="sm" variant="outline">
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Manage Schedule
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
