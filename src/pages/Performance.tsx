
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Gauge, LineChart, PieChart, BarChart3 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Performance() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Performance</h2>
        <p className="text-muted-foreground">
          Track your system's performance improvements over time
        </p>
      </div>
      
      <div className="grid gap-4 grid-cols-3">
        <Card className="col-span-3 sm:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
            <Gauge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 flex items-center justify-center">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="stroke-muted-foreground/20"
                    cx="50"
                    cy="50"
                    r="40"
                    pathLength="100"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    className="stroke-cleaner-purple transition-all duration-1000 ease-in-out"
                    cx="50"
                    cy="50"
                    r="40"
                    pathLength="100"
                    strokeWidth="10"
                    strokeDasharray="100"
                    strokeDashoffset="22"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                  78
                </div>
              </div>
              <span className="text-md font-medium mt-2">Good</span>
              <span className="text-xs text-muted-foreground">+12% from last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 sm:col-span-2">
          <CardHeader>
            <CardTitle>Performance History</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center">
            <div className="h-48 w-full bg-cleaner-lightPurple/30 rounded-md flex items-center justify-center">
              <LineChart className="h-8 w-8 text-cleaner-purple opacity-50" />
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Performance score history (simulated chart)
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="system" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="memory">Memory</TabsTrigger>
        </TabsList>
        <TabsContent value="system" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>System Performance Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Boot Time</h4>
                  <div className="flex items-center">
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cleaner-purple rounded-full" 
                        style={{ width: '22%' }} 
                      />
                    </div>
                    <span className="ml-2 text-sm">22s</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    8s faster than average
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Application Launch Speed</h4>
                  <div className="flex items-center">
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cleaner-blue rounded-full" 
                        style={{ width: '85%' }} 
                      />
                    </div>
                    <span className="ml-2 text-sm">Fast</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Optimized launch times
                  </p>
                </div>
              </div>
              
              <div className="h-48 mt-6 bg-cleaner-lightBlue/30 rounded-md flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-cleaner-blue opacity-50" />
              </div>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Performance metrics (simulated chart)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="storage" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Storage Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 mt-2 bg-cleaner-lightPurple/30 rounded-md flex items-center justify-center">
                <PieChart className="h-8 w-8 text-cleaner-purple opacity-50" />
              </div>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Disk usage metrics (simulated chart)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="memory" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Memory Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 mt-2 bg-cleaner-lightBlue/30 rounded-md flex items-center justify-center">
                <AreaChart className="h-8 w-8 text-cleaner-blue opacity-50" />
              </div>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Memory usage trends (simulated chart)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-center">
        <Button size="lg" variant="outline" className="mt-6">
          Export Performance Report
        </Button>
      </div>
    </div>
  );
}
