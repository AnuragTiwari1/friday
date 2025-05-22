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
  Play
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

      {/* All Tasks */}
      <section className="w-full px-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[18px] font-semibold tracking-tight font-sans text-foreground">
            All Tasks
          </h2>
          <Button
            variant="link"
            className="text-[14px] font-medium text-primary"
          >
            See all
          </Button>
        </div>
        {/* Task Cards */}
        <div className="flex flex-col gap-4">
          {/* Task Card 1 */}
          <div
            className="rounded-2xl p-4 flex flex-row justify-between items-center bg-card text-foreground"
          >
            <div>
              <div className="text-[16px] font-semibold font-sans">
                3d Making Project
              </div>
              <div className="text-[14px] font-normal mb-2 font-sans text-muted-foreground">
                Team Project Working On Figma
              </div>
              <div className="flex items-center gap-2">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user1.png" />
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user2.png" />
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user3.png" />
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user4.png" />
                  </Avatar>
                </div>
                <span className="text-[12px] text-muted-foreground ml-2 font-sans">
                  10 participants
                </span>
              </div>
            </div>
            {/* Progress */}
            <div className="flex flex-col items-center">
              <div
                className="rounded-full border-2 border-primary w-14 h-14 flex items-center justify-center bg-card"
              >
                <span className="text-[16px] font-semibold text-primary">55%</span>
              </div>
            </div>
          </div>
          {/* Task Card 2 */}
          <div
            className="rounded-2xl p-4 flex flex-row justify-between items-center bg-card text-foreground"
          >
            <div>
              <div className="text-[16px] font-semibold font-sans">
                Illustration
              </div>
              <div className="text-[14px] font-normal mb-2 font-sans text-muted-foreground">
                Team Project Working On Figma
              </div>
              <div className="flex items-center gap-2">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user1.png" />
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user2.png" />
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user3.png" />
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-card">
                    <AvatarImage src="/user4.png" />
                  </Avatar>
                </div>
                <span className="text-[12px] text-muted-foreground ml-2 font-sans">
                  10 participants
                </span>
              </div>
            </div>
            {/* Progress */}
            <div className="flex flex-col items-center">
              <div
                className="rounded-full border-2 border-primary w-14 h-14 flex items-center justify-center bg-card"
              >
                <span className="text-[16px] font-semibold text-primary">17%</span>
              </div>
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
