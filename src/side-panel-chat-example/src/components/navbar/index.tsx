import { cn } from "@/lib/utils";
import { Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EchoAccount } from "@/components/echo-account-react";

export function NavBar() {
  return (
    <header className={cn("p-2 border-b flex items-center justify-between")}>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
        <Button variant="ghost" size="icon">
          <Plus />
        </Button>
      </div>
      <div>
        <EchoAccount />
      </div>
    </header>
  );
}
