"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Plus,
  Circle,
  Home,
  MoreHorizontal,
  Play,
  CheckCircle
} from "lucide-react";

export default function HomeScreen() {
  const router = useRouter();
  const [detailsToggled, setDetailsToggled] = useState(false);

  return (
    <main
      className="flex flex-col items-center bg-background min-h-screen font-sans p-0"
    >
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 py-4 bg-background">
        <Avatar className="w-10 h-10 border-2 border-card">
          <AvatarImage src="/logo.jpg" alt="Friday" />
        </Avatar>
        <Button variant="ghost" size="icon" className="rounded-full border border-border w-10 h-10">
          <Search className="w-5 h-5 text-foreground" />
        </Button>
      </div>

      {/* Date & Week */}
      <div className="w-full flex flex-col items-center mt-2 mb-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full border border-border w-8 h-8">
            <span className="sr-only">Previous</span>
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </Button>
          <span className="text-[14px] text-muted-foreground font-normal font-sans">
            Monday, April 26
          </span>
          <Button variant="ghost" size="icon" className="rounded-full border border-border w-8 h-8">
            <span className="sr-only">Next</span>
            <ChevronRight className="w-4 h-4 text-foreground" />
          </Button>
        </div>
        <h1 className="text-[20px] font-bold tracking-tight mt-2 font-sans text-foreground">
          This Week
        </h1>
      </div>

      {/* Featured Project Card */}
      <section
        className="mx-4 rounded-2xl p-6 mb-6 flex flex-row justify-between items-stretch bg-primary text-primary-foreground self-stretch"
      >
        <div>
          <div className="text-[18px] font-semibold tracking-tight mb-1 font-sans">
            App Design
          </div>
          <div className="text-[12px] font-normal mb-4 font-sans opacity-85">
            Task manager ui kit
          </div>
          <div className="flex items-center gap-4">
            <Switch
              checked={detailsToggled}
              onCheckedChange={(checked) => {
                setDetailsToggled(checked);
                if (checked) {
                  router.push("/details");
                }
              }}
              label="Details"
              thumbClassName="size-9 data-[state=checked]:rotate-180"
              className="data-[state=checked]:bg-secondary data-[state=unchecked]:bg-background/50 h-9"
              labelClassName="text-[14px] font-medium data-[state=checked]:text-secondary"
              id="details-toggle"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 justify-end">
          <Button
            variant="accent"
            size="icon"
            className="rounded-full w-8 h-8 mt-2 bg-accent text-accent-foreground"
          >
            <Play className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section className="w-full px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] font-semibold tracking-tight font-sans text-foreground">
            Today's Tasks
          </h2>
          <span className="text-[12px] text-muted-foreground font-sans">
            Total: 09:38:03
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {/* Task 1 */}
          <div className="group py-4 px-4 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="flex items-center gap-4 mb-2">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[16px] font-semibold text-foreground">Reading books</span>
                  <span className="text-[14px] font-medium text-primary">02:24:50</span>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-[12px] text-muted-foreground">2 subtasks</span>
                  <div className="flex -space-x-2">
                    <Avatar className="h-4 w-4 border border-background">
                      <AvatarImage src="/user1.jpg" />
                    </Avatar>
                    <Avatar className="h-4 w-4 border border-background">
                      <AvatarImage src="/user2.jpg" />
                    </Avatar>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 h-8 rounded-full px-2"
              >
                <Play className="h-4 w-4 mr-2" />
                <span className="text-[14px]">Resume</span>
              </Button>
            </div>
            <div className="ml-6 space-y-2">
              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Steve Jobs Biography</span>
                </div>
                <span className="text-[12px] tabular-nums">01:24:30</span>
              </div>
              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Design Patterns</span>
                </div>
                <span className="text-[12px] tabular-nums">01:00:20</span>
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div className="group py-4 px-4 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[16px] font-semibold text-foreground">Work - office</span>
                  <span className="text-[14px] font-medium text-primary">06:14:24</span>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-[12px] text-muted-foreground">In progress</span>
                  <div className="h-1 flex-1 bg-muted rounded-full">
                    <div className="h-full w-[65%] bg-primary rounded-full" />
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 h-8 rounded-full px-2"
              >
                <Play className="h-4 w-4 mr-2" />
                <span className="text-[14px]">Resume</span>
              </Button>
            </div>
          </div>

          {/* Task 3 */}
          <div className="group py-4 px-4 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[16px] font-semibold text-foreground">Work</span>
                  <span className="text-[14px] font-medium text-primary">00:58:49</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-[14px] text-muted-foreground">Daily meeting</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 h-8 rounded-full px-2"
              >
                <Play className="h-4 w-4 mr-2" />
                <span className="text-[14px]">Start</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-card rounded-2xl flex justify-around items-center py-3 shadow-lg">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
          <Circle className="w-6 h-6 text-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-primary">
          <Home className="w-6 h-6 text-primary-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
          <MoreHorizontal className="w-6 h-6 text-foreground" />
        </Button>
      </nav>
    </main>
  );
}
