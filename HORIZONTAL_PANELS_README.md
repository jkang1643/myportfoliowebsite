# Apple-Inspired Horizontal Scrollable Panels

## Overview
This implementation creates a premium, Apple-inspired horizontal scrollable panel carousel for the home page, featuring smooth scroll snap behavior, touch/swipe support, and responsive design.

## Features Implemented

### ✅ Core Features
- **Horizontal scroll container** with Apple-style scroll snap (each panel locks in place when swiped)
- **Flat, minimal panels** with rounded corners and gradient backgrounds
- **Typography hierarchy** with bold headlines and light subtext
- **Full-bleed visuals** with custom content components
- **Smooth scroll behavior** with natural momentum

### ✅ Navigation
- **Swipe gestures** for mobile devices
- **Horizontal scroll** with mouse/trackpad for desktop
- **Pagination dots** below for position feedback
- **Arrow navigation** (hidden on mobile for cleaner look)
- **Keyboard navigation** (left/right arrow keys)

### ✅ Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Scalable typography** from mobile to desktop
- **Touch-optimized** interactions
- **Adaptive spacing** and content sizing

### ✅ Apple Design Cues
- **Flat, minimal cards** with no heavy borders or shadows
- **Generous whitespace** around text and images
- **Clean typography** with proper hierarchy
- **Smooth animations** and transitions
- **Focus on one message** per panel

## Components

### `HorizontalPanels` (`components/horizontal-panels.tsx`)
Main component that handles:
- Scroll snap behavior
- Touch/swipe detection
- Navigation controls
- Responsive layout
- Keyboard accessibility

### `PanelContent` (`components/panel-content.tsx`)
Custom content components for each panel:
- `MacScreenContent` - Mac interface mockup
- `NightWorkContent` - Laptop in dark environment
- `iPhoneContent` - iPhone app interface
- `AppIconsContent` - App icon grid

## Usage

```tsx
import { HorizontalPanels } from "@/components/horizontal-panels"
import { MacScreenContent, NightWorkContent, AppIconsContent, iPhoneContent } from "@/components/panel-content"

const panels = [
  {
    id: "intelligence",
    headline: "Easy to use. Easy to love.",
    subtext: "Apple Intelligence and macOS",
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    textColor: "#1a1a1a",
    content: <MacScreenContent />,
  },
  // ... more panels
]

<HorizontalPanels panels={panels} className="h-screen" />
```

## Panel Configuration

Each panel supports:
- `id`: Unique identifier
- `headline`: Main bold text
- `subtext`: Supporting description
- `background`: CSS background (gradient, color, etc.)
- `textColor`: Text color for the panel
- `content`: Custom React component
- `image`: Image URL (alternative to content)

## Styling

The component uses Tailwind CSS with custom scrollbar hiding and scroll snap behavior defined in `app/globals.css`:

```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-start {
  scroll-snap-align: start;
}
```

## Future Enhancements

- Subtle animations (fade-in text, parallax background)
- Auto-scroll with gentle easing
- Interactive elements (links, CTA buttons)
- Dark/light mode adjustments
- More sophisticated touch gestures
- Accessibility improvements (ARIA labels, screen reader support)

## Browser Support

- Modern browsers with CSS scroll snap support
- Touch devices with swipe gesture support
- Keyboard navigation support
- Responsive design for all screen sizes
