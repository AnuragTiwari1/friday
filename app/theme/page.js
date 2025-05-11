import React from "react";
import { cva } from "cva";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Color box variant
const colorBox = cva(
  "w-10 h-10 rounded-lg border border-gray-200 mb-1",
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        accent: "",
        neutral: "",
      },
      shade: {
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
        950: "",
      },
    },
    compoundVariants: [
      { color: "primary", shade: "50", className: "bg-primary-50" },
      { color: "primary", shade: "100", className: "bg-primary-100" },
      { color: "primary", shade: "200", className: "bg-primary-200" },
      { color: "primary", shade: "300", className: "bg-primary-300" },
      { color: "primary", shade: "400", className: "bg-primary-400" },
      { color: "primary", shade: "500", className: "bg-primary-500" },
      { color: "primary", shade: "600", className: "bg-primary-600" },
      { color: "primary", shade: "700", className: "bg-primary-700" },
      { color: "primary", shade: "800", className: "bg-primary-800" },
      { color: "primary", shade: "900", className: "bg-primary-900" },
      { color: "primary", shade: "950", className: "bg-primary-950" },

      { color: "secondary", shade: "50", className: "bg-secondary-50" },
      { color: "secondary", shade: "100", className: "bg-secondary-100" },
      { color: "secondary", shade: "200", className: "bg-secondary-200" },
      { color: "secondary", shade: "300", className: "bg-secondary-300" },
      { color: "secondary", shade: "400", className: "bg-secondary-400" },
      { color: "secondary", shade: "500", className: "bg-secondary-500" },
      { color: "secondary", shade: "600", className: "bg-secondary-600" },
      { color: "secondary", shade: "700", className: "bg-secondary-700" },
      { color: "secondary", shade: "800", className: "bg-secondary-800" },
      { color: "secondary", shade: "900", className: "bg-secondary-900" },
      { color: "secondary", shade: "950", className: "bg-secondary-950" },

      { color: "accent", shade: "50", className: "bg-accent-50" },
      { color: "accent", shade: "100", className: "bg-accent-100" },
      { color: "accent", shade: "200", className: "bg-accent-200" },
      { color: "accent", shade: "300", className: "bg-accent-300" },
      { color: "accent", shade: "400", className: "bg-accent-400" },
      { color: "accent", shade: "500", className: "bg-accent-500" },
      { color: "accent", shade: "600", className: "bg-accent-600" },
      { color: "accent", shade: "700", className: "bg-accent-700" },
      { color: "accent", shade: "800", className: "bg-accent-800" },
      { color: "accent", shade: "900", className: "bg-accent-900" },
      { color: "accent", shade: "950", className: "bg-accent-950" },

      { color: "neutral", shade: "50", className: "bg-neutral-50" },
      { color: "neutral", shade: "100", className: "bg-neutral-100" },
      { color: "neutral", shade: "200", className: "bg-neutral-200" },
      { color: "neutral", shade: "300", className: "bg-neutral-300" },
      { color: "neutral", shade: "400", className: "bg-neutral-400" },
      { color: "neutral", shade: "500", className: "bg-neutral-500" },
      { color: "neutral", shade: "600", className: "bg-neutral-600" },
      { color: "neutral", shade: "700", className: "bg-neutral-700" },
      { color: "neutral", shade: "800", className: "bg-neutral-800" },
      { color: "neutral", shade: "900", className: "bg-neutral-900" },
      { color: "neutral", shade: "950", className: "bg-neutral-950" },
    ],
    defaultVariants: {
      color: "primary",
      shade: "500",
    },
  }
);

// Subtle, modern, familiar typography using only Inter (font-sans)
const typography = cva(
  "rounded px-3 py-1 border border-neutral-200 bg-neutral-50",
  {
    variants: {
      type: {
        display: "text-xl font-bold tracking-tight font-sans",         // ~20px
        heading1: "text-lg font-semibold tracking-tight font-sans",     // ~18px
        heading2: "text-base font-semibold font-sans",                  // ~16px
        heading3: "text-sm font-medium font-sans",                      // ~14px
        body: "text-sm font-normal font-sans",                          // ~14px
        button: "text-sm font-medium font-sans",                        // ~14px, subtle emphasis
        caption: "text-xs font-normal text-neutral-500 font-sans",      // ~12px
        mono: "text-xs font-mono bg-neutral-100 px-2 py-1 rounded",     // ~12px
      },
    },
    defaultVariants: {
      type: "body",
    },
  }
);

// Surface/Card variant
const surface = cva("w-24 h-12 rounded-lg mb-1 border", {
  variants: {
    type: {
      background: "bg-[var(--background)]",
      foreground: "bg-[var(--foreground)]",
      card: "bg-[var(--card)]",
      cardForeground: "bg-[var(--card-foreground)]",
      popover: "bg-[var(--popover)]",
      popoverForeground: "bg-[var(--popover-foreground)]",
      primary: "bg-[var(--primary)]",
      primaryForeground: "bg-[var(--primary-foreground)]",
      secondary: "bg-[var(--secondary)]",
      secondaryForeground: "bg-[var(--secondary-foreground)]",
      muted: "bg-[var(--muted)]",
      mutedForeground: "bg-[var(--muted-foreground)]",
      accent: "bg-[var(--accent)]",
      accentForeground: "bg-[var(--accent-foreground)]",
      destructive: "bg-[var(--destructive)]",
      border: "bg-[var(--border)]",
      input: "bg-[var(--input)]",
      ring: "bg-[var(--ring)]",
    },
  },
  defaultVariants: {
    type: "background",
  },
});

// Spacing variant (keep as utility, but visual will be custom below)
const spacing = cva("bg-neutral-200 rounded mb-1", {
  variants: {
    size: {
      spacing2: "h-3",   // 2px
      spacing4: "h-3",   // 4px
      spacing8: "h-3",   // 8px
      spacing12: "h-3",  // 12px
      spacing16: "h-3",  // 16px
      spacing20: "h-3",  // 20px
      spacing24: "h-3",  // 24px
      spacing32: "h-3",  // 32px
    },
  },
  defaultVariants: {
    size: "spacing16",
  },
});

export default function Theme() {
  const colorNames = ["primary", "secondary", "accent", "neutral"];
  const colorLabels = {
    primary: "Brand Primary",
    secondary: "Brand Secondary",
    accent: "Accent",
    neutral: "Neutral",
  };
  const shades = ["50","100","200","300","400","500","600","700","800","900","950"];
  const typographyTypes = [
    { key: "display", label: "Display" },
    { key: "heading1", label: "Heading 1" },
    { key: "heading2", label: "Heading 2" },
    { key: "heading3", label: "Heading 3" },
    { key: "body", label: "Body" },
    { key: "button", label: "Button" },
    { key: "caption", label: "Caption" },
    { key: "mono", label: "Mono" },
  ];
  const surfaceTypes = [
    { key: "background", label: "Background", varName: "--background" },
    { key: "foreground", label: "Foreground", varName: "--foreground" },
    { key: "card", label: "Card", varName: "--card" },
    { key: "cardForeground", label: "Card Foreground", varName: "--card-foreground" },
    { key: "popover", label: "Popover", varName: "--popover" },
    { key: "popoverForeground", label: "Popover Foreground", varName: "--popover-foreground" },
    { key: "primary", label: "Primary", varName: "--primary" },
    { key: "primaryForeground", label: "Primary Foreground", varName: "--primary-foreground" },
    { key: "secondary", label: "Secondary", varName: "--secondary" },
    { key: "secondaryForeground", label: "Secondary Foreground", varName: "--secondary-foreground" },
    { key: "muted", label: "Muted", varName: "--muted" },
    { key: "mutedForeground", label: "Muted Foreground", varName: "--muted-foreground" },
    { key: "accent", label: "Accent", varName: "--accent" },
    { key: "accentForeground", label: "Accent Foreground", varName: "--accent-foreground" },
    { key: "destructive", label: "Destructive", varName: "--destructive" },
    { key: "border", label: "Border", varName: "--border" },
    { key: "input", label: "Input", varName: "--input" },
    { key: "ring", label: "Ring", varName: "--ring" },
  ];
  const spacingTypes = [
    { key: "spacing2", label: "Spacing 2", value: 2 },
    { key: "spacing4", label: "Spacing 4", value: 4 },
    { key: "spacing8", label: "Spacing 8", value: 8 },
    { key: "spacing12", label: "Spacing 12", value: 12 },
    { key: "spacing16", label: "Spacing 16", value: 16 },
    { key: "spacing20", label: "Spacing 20", value: 20 },
    { key: "spacing24", label: "Spacing 24", value: 24 },
    { key: "spacing32", label: "Spacing 32", value: 32 },
  ];

  return (
    <div className="font-sans p-8 bg-white text-neutral-900 min-h-screen">
      {/* Demo Area */}
      <div className="max-w-4xl mx-auto mb-10">
        <Card className="p-8 flex flex-col md:flex-row gap-8 items-center justify-between bg-neutral-50 border border-neutral-200 shadow-sm">
          <div>
            <h1 className="text-3xl font-bold mb-2">Theme Demo</h1>
            <p className="mb-4 max-w-md text-neutral-700">
              This is a live demo of your theme using shadcn/ui and Tailwind grid. Explore the color palette, typography, surfaces, and spacing below.
            </p>
            <button className="px-4 py-2 rounded bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition">Primary Action</button>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-lg bg-primary-500" />
            <div className="w-12 h-12 rounded-lg bg-secondary-500" />
            <div className="w-12 h-12 rounded-lg bg-accent-500" />
          </div>
        </Card>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Color Palette */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Color Palette</h2>
          <p className="mb-4 text-neutral-700">Core color palette for use in marketing, app, and website. Use these Tailwind classes for consistent colors.</p>
          <Separator className="mb-4" />
          <div className="flex flex-col gap-6">
            {colorNames.map((color) => (
              <div key={color}>
                <div className="font-semibold mb-2">{colorLabels[color]}</div>
                <div className="grid grid-cols-5 gap-2">
                  {shades.map((shade) => (
                    <div key={shade} className="flex flex-col items-center">
                      <div
                        className={twMerge(
                          colorBox({ color, shade }),
                          `bg-${color}-${shade}`
                        )}
                      />
                      <div className="font-mono text-xs text-gray-600">{shade}</div>
                    </div>
                  ))}
                </div>
                <div className="font-mono text-xs mt-1 text-gray-500">{color}</div>
              </div>
            ))}
          </div>
        </Card>
        {/* Typography */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Typography</h2>
          <p className="mb-4 text-neutral-700">
            Modern, highly legible font styles for productivity and clarity.
          </p>
          <Separator className="mb-4" />
          <div className="flex flex-col gap-4">
            {typographyTypes.map((typo) => (
              <div key={typo.key} className="flex items-center gap-4">
                <span className={twMerge(typography({ type: typo.key }))}>
                  {typo.label === "Mono"
                    ? "0123456789 abcDEF"
                    : typo.label}
                </span>
              </div>
            ))}
          </div>
        </Card>
        {/* Surface & Card */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Surface & Card</h2>
          <p className="mb-4 text-neutral-700">Surface and card tokens for backgrounds and containers, mapped to root variables.</p>
          <Separator className="mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {surfaceTypes.map((surf) => (
              <div key={surf.key} className="flex flex-col items-center">
                <div className={twMerge(surface({ type: surf.key }))} />
                <div className="font-mono text-xs text-gray-600">{surf.label}</div>
                <div className="font-mono text-[10px] text-gray-400">{surf.varName}</div>
              </div>
            ))}
          </div>
        </Card>
        {/* Spacing */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Spacing</h2>
          <p className="mb-4 text-neutral-700">Spacing tokens for mobile UI, shown as horizontal bars with their pixel value.</p>
          <Separator className="mb-4" />
          <div className="flex flex-col gap-4">
            {spacingTypes.map((sp) => (
              <div key={sp.key} className="flex items-center gap-4">
                <div
                  className="bg-neutral-200 rounded"
                  style={{
                    width: `${sp.value}px`,
                    height: "16px",
                    minWidth: "2px",
                    maxWidth: "160px"
                  }}
                />
                <span className="font-mono text-xs text-gray-600 w-20">{sp.label}</span>
                <span className="font-mono text-xs text-gray-400">{sp.value}px</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}