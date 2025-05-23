"use client";

import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Plus, ListTodo, Clock, CheckCircle2, ChevronLeft, ArrowLeft, ArrowRight, Calendar, Edit2, Play, Pause, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function DetailsScreen() {
  const [activeMode, setActiveMode] = useState("planner");
  const [activeStatus, setActiveStatus] = useState("tasks");
  const [projectColor, setProjectColor] = useState("primary");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [todoCollapsed, setTodoCollapsed] = useState(false);
  const [progressCollapsed, setProgressCollapsed] = useState(false);

  const tasks = [
    {
      id: 1,
      title: "Design Color Palette",
      status: "tasks",
      tags: ["Design", "Sprint-1", "Important"]
    },
    {
      id: 2,
      title: "Login Flow",
      status: "progress",
      tags: ["Frontend", "Sprint-1"]
    },
    {
      id: 3,
      title: "User Schema",
      status: "done",
      tags: ["Backend", "Critical"]
    },
    {
      id: 4,
      title: "Button Component",
      status: "progress",
      tags: ["Frontend", "UI", "Low"]
    },
  ];

  const updateTaskStatus = (id, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  // Add this helper function to get unique tags
  const getAllTags = () => {
    const tagSet = new Set();
    tasks.forEach(task => {
      task.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  };

  // Add this sample time entry data
  const timeEntries = [
    {
      date: 'Mon 12, 05, 2006',
      sessions: [
        {
          activity: 'Designing for button component',
          duration: '2h 15m',
          completed: true
        },
        {
          activity: 'Auth screens figma designs',
          duration: '1h 30m',
          completed: false
        }
      ]
    },
    {
      date: 'Tue 13, 05, 2006',
      sessions: [
        {
          activity: 'Navigation implementation',
          duration: '3h 45m',
          completed: true
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-[100dvh] bg-background text-foreground">
      {/* Header */}
      <div className="flex items-center h-12 px-4 border-b">
        <Button variant="ghost" size="icon" className="mr-4">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-lg font-semibold tracking-tight">Project Details</h1>
      </div>

      {/* Only show project info in planner mode */}
      {activeMode === "planner" && (
        <div className="px-4 py-4 border-b space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">App Design</h2>
              <p className="text-muted-foreground">Friday Time Tracker App design project</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Due Aug 24</span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex">
        <Tabs
          defaultValue="planner"
          className="flex flex-col w-full"
          value={activeMode}
          onValueChange={setActiveMode}
        >
          <div className="border-b bg-muted/40">
            <TabsList className="h-8 w-full bg-transparent">
              <TabsTrigger
                value="planner"
                className="text-sm data-[state=active]:bg-background data-[state=active]:shadow-none h-8 flex-1"
              >
                Planner
              </TabsTrigger>
              <TabsTrigger
                value="worker"
                className="text-sm data-[state=active]:bg-background data-[state=active]:shadow-none h-8 flex-1"
              >
                Worker
              </TabsTrigger>
              <TabsTrigger
                value="auditor"
                className="text-sm data-[state=active]:bg-background data-[state=active]:shadow-none h-8 flex-1"
              >
                Auditor
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="planner" className="flex-1 m-0 border-none p-0">
            <Tabs
              defaultValue="tasks"
              className="flex w-full"
              orientation="vertical"
              onValueChange={setActiveStatus}
            >
              {/* Status Tabs - Left Side */}
              <div className="relative w-16 border-r bg-muted top-[250px]">
                <TabsList className="flex flex-col h-full bg-transparent space-y-2 p-2 absolute">
                  <TabsTrigger
                    value="tasks"
                    className="flex flex-col items-center justify-center p-2 h-20 data-[state=active]:bg-background data-[state=active]:shadow-md rounded-lg group relative text-red-500"
                  >
                    <ListTodo className="h-4 w-4 mb-2" />
                    <span className="text-[10px] opacity-0 group-data-[state=active]:opacity-100">Tasks</span>
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 h-4 min-w-4 flex items-center justify-center text-[10px] px-1"
                    >
                      {tasks.filter(t => t.status === "tasks").length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="progress"
                    className="flex flex-col items-center justify-center p-2 h-20 data-[state=active]:bg-background data-[state=active]:shadow-md rounded-lg group relative text-yellow-500"
                  >
                    <Clock className="h-4 w-4 mb-2" />
                    <span className="text-[10px] opacity-0 group-data-[state=active]:opacity-100">Active</span>
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 h-4 min-w-4 flex items-center justify-center text-[10px] px-1"
                    >
                      {tasks.filter(t => t.status === "progress").length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="done"
                    className="flex flex-col items-center justify-center p-2 h-20 data-[state=active]:bg-background data-[state=active]:shadow-md rounded-lg group relative text-green-500"
                  >
                    <CheckCircle2 className="h-4 w-4 mb-2" />
                    <span className="text-[10px] opacity-0 group-data-[state=active]:opacity-100">Done</span>
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 h-4 min-w-4 flex items-center justify-center text-[10px] px-1"
                    >
                      {tasks.filter(t => t.status === "done").length}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tasks Content */}
              <div className="flex-1 p-4 relative">
                <TabsContent value="tasks" className="mt-0 space-y-2 h-full">
                  {tasks.filter(t => t.status === "tasks").map(task => (
                    <SwipeableTask
                      key={task.id}
                      task={task}
                      onSwipeLeft={() => updateTaskStatus(task.id, "progress")}
                    />
                  ))}
                </TabsContent>
                <TabsContent value="progress" className="mt-0 space-y-2 h-full">
                  {tasks.filter(t => t.status === "progress").map(task => (
                    <SwipeableTask
                      key={task.id}
                      task={task}
                      onSwipeLeft={() => updateTaskStatus(task.id, "done")}
                      onSwipeRight={() => updateTaskStatus(task.id, "tasks")}
                    />
                  ))}
                </TabsContent>
                <TabsContent value="done" className="mt-0 space-y-2 h-full">
                  {tasks.filter(t => t.status === "done").map(task => (
                    <SwipeableTask
                      key={task.id}
                      task={task}
                      onSwipeRight={() => updateTaskStatus(task.id, "progress")}
                    />
                  ))}
                </TabsContent>

                {/* Floating Action Button */}
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full fixed bottom-24 right-4 shadow-lg"
                >
                  <Plus className="h-6 w-6" />
                </Button>
              </div>
            </Tabs>
          </TabsContent>

          <TabsContent value="worker" className="flex-1 p-4 m-0">
            <div className="flex flex-col h-full gap-4">
              {/* Timer Section */}
              <div className="flex items-center justify-center gap-4 p-4 border rounded-lg bg-card">
                <div className="text-3xl font-mono">
                  {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsRunning(!isRunning)}
                >
                  {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </div>

              {/* Tasks Section - Vertical Stack */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Todo Box */}
                <div className="border rounded-lg bg-card">
                  <button
                    className="w-full p-4 flex items-center justify-between"
                    onClick={() => setTodoCollapsed(!todoCollapsed)}
                  >
                    <h3 className="font-medium flex items-center gap-2">
                      <ListTodo className="h-4 w-4" />
                      To Do
                      <Badge variant="secondary" className="ml-2">
                        {tasks.filter(t => t.status === "tasks").length}
                      </Badge>
                    </h3>
                    {todoCollapsed ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                  {!todoCollapsed && (
                    <div className="p-4 pt-0 space-y-2">
                      {tasks.filter(t => t.status === "tasks").map(task => (
                        <div
                          key={task.id}
                          className="p-2 border rounded bg-background cursor-pointer hover:bg-muted/50"
                          onClick={() => setActiveTask(task.id)}
                        >
                          <span className="line-clamp-1">{task.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* In Progress Box */}
                <div className="border rounded-lg bg-card">
                  <button
                    className="w-full p-4 flex items-center justify-between"
                    onClick={() => setProgressCollapsed(!progressCollapsed)}
                  >
                    <h3 className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      In Progress
                      <Badge variant="secondary" className="ml-2">
                        {tasks.filter(t => t.status === "progress").length}
                      </Badge>
                    </h3>
                    {progressCollapsed ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                  {!progressCollapsed && (
                    <div className="p-4 pt-0 space-y-2">
                      {tasks.filter(t => t.status === "progress").map(task => (
                        <div
                          key={task.id}
                          className={`p-2 border rounded bg-background ${
                            activeTask === task.id ? "border-primary" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id={`task-${task.id}`}
                              onClick={() => updateTaskStatus(task.id, "done")}
                            />
                            <label
                              htmlFor={`task-${task.id}`}
                              className="flex-1 cursor-pointer line-clamp-1"
                              onClick={() => setActiveTask(task.id)}
                            >
                              {task.title}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="auditor" className="flex-1 p-4 m-0">
            <div className="h-full flex flex-col gap-4">
              {/* Duration Filter Tabs */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                  {["1M", "3M", "6M", "1Y", "ALL"].map((period) => (
                    <Button
                      key={period}
                      variant={period === "1M" ? "secondary" : "ghost"}
                      size="sm"
                      className="text-xs h-8"
                    >
                      {period}
                    </Button>
                  ))}
                </div>

                {/* Day/Week Toggle */}
                <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs h-8"
                  >
                    Day
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="text-xs h-8"
                  >
                    Week
                  </Button>
                </div>
              </div>

              {/* Duration Display */}
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg bg-card">
                <span className="text-sm text-muted-foreground">Dec 3 - 9</span>
                <div className="text-4xl font-mono tracking-tight">
                  06:33:33
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>HRS</span>
                  <span>MIN</span>
                  <span>SEC</span>
                </div>
              </div>

              {/* Graph View */}
              <div className="flex-1 border rounded-lg bg-card p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { name: 'Jun', hours: 1 },
                      { name: 'Jul', hours: 2 },
                      { name: 'Aug', hours: 3.5 },
                      { name: 'Sep', hours: 2 },
                      { name: 'Oct', hours: 4 },
                      { name: 'Nov', hours: 5 },
                      { name: 'Dec', hours: 7 },
                    ]}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                      domain={[0, 7]}
                      ticks={[0, 4, 7]}
                    />
                    <Area
                      type="monotone"
                      dataKey="hours"
                      stroke="var(--primary)"
                      fill="var(--primary)"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* List View (can be toggled) */}
              <div className="border rounded-lg bg-card">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Activity Log</h3>
                </div>
                <ScrollArea className="h-[300px]">
                  <div className="divide-y">
                    {timeEntries.map((entry, index) => (
                      <div key={index} className="p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{entry.date}</span>
                        </div>
                        <div className="space-y-2 pl-6">
                          {entry.sessions.map((session, sessionIndex) => (
                            <div
                              key={sessionIndex}
                              className="flex items-start justify-between gap-4 text-sm"
                            >
                              <div className="flex items-start gap-2">
                                <div className={`mt-1 h-2 w-2 rounded-full ${session.completed ? 'bg-primary' : 'bg-muted-foreground'}`} />
                                <span className={session.completed ? 'line-through text-muted-foreground' : ''}>
                                  {session.activity}
                                </span>
                              </div>
                              <span className="text-muted-foreground shrink-0">
                                {session.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Bar - Only show in planner mode */}
      {activeMode === "planner" && (
        <div className="sticky bottom-0 border-t bg-background p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2 items-center">
              {getAllTags().slice(0, 3).map(tag => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
              <span className="text-xs text-muted-foreground">
                +{Math.max(0, getAllTags().length - 3)} more
              </span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function SwipeableTask({ task, onSwipeLeft, onSwipeRight }) {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // Get background element based on status and direction
  const getSwipeBackground = () => {
    if (task.status === 'tasks') {
      return (
        <div className="absolute inset-0 bg-primary/20 transition-opacity duration-200 flex items-center justify-end px-4"
          style={{ opacity: x.to(x => x < 0 ? Math.min(Math.abs(x) / 100, 1) : 0) }}>
          <Clock className="h-4 w-4 text-primary" />
        </div>
      );
    } else if (task.status === 'progress') {
      return (
        <>
          <div className="absolute inset-0 bg-destructive/20 transition-opacity duration-200 flex items-center px-4"
            style={{ opacity: x.to(x => x > 0 ? Math.min(Math.abs(x) / 100, 1) : 0) }}>
            <ListTodo className="h-4 w-4 text-destructive" />
          </div>
          <div className="absolute inset-0 bg-success/20 transition-opacity duration-200 flex items-center justify-end px-4"
            style={{ opacity: x.to(x => x < 0 ? Math.min(Math.abs(x) / 100, 1) : 0) }}>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </div>
        </>
      );
    } else if (task.status === 'done') {
      return (
        <div className="absolute inset-0 bg-primary/20 transition-opacity duration-200 flex items-center px-4"
          style={{ opacity: x.to(x => x > 0 ? Math.min(Math.abs(x) / 100, 1) : 0) }}>
          <Clock className="h-4 w-4 text-primary" />
        </div>
      );
    }
  };

  const bind = useDrag(({ movement: [mx], down, velocity }) => {
    const trigger = velocity > 0.2;
    const clampedX = Math.max(Math.min(mx, 100), -100);

    if (!down) {
      if (trigger) {
        if (mx > 50 && onSwipeRight) onSwipeRight();
        if (mx < -50 && onSwipeLeft) onSwipeLeft();
      }
      api.start({ x: 0, immediate: false });
    } else {
      api.start({ x: clampedX, immediate: true });
    }
  }, { axis: 'x', bounds: { left: -100, right: 100 } });

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Background color layer */}
      {getSwipeBackground()}

      {/* Card content */}
      <animated.div
        {...bind()}
        style={{ x, touchAction: 'none' }}
        className="relative z-10 bg-card border rounded-lg"
      >
        <div className="flex items-center p-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate mb-2">{task.title}</h3>
            <div className="flex flex-wrap gap-2">
              {task.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}