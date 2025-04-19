
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center size-20 bg-cleaner-lightPurple rounded-full mx-auto mb-4">
          <span className="text-cleaner-purple text-3xl">404</span>
        </div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-md">
          The cleaning tool you're looking for might have been moved or doesn't exist.
        </p>
        <Button asChild className="mt-4">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
