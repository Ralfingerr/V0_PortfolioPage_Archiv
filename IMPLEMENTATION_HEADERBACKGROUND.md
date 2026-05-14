# Implementation Plan: Floating Glassmorphism Orbs

This plan outlines the steps to replace the current particle-based header background with a high-end "Glassmorphism Orbs" effect. This will create a more premium, deep, and atmospheric feel that aligns with the AI and Scaling themes.

## 1. Concept Overview
- **Visuals**: Large, soft-edged spheres with vibrant gradients and heavy blurs.
- **Motion**: Slow, organic drifting across the screen with subtle scaling and opacity shifts.
- **Interactivity**: Subtle parallax effect where the orbs react slightly to mouse movement.
- **Aesthetics**: Premium copper/gold tones paired with deep ambient shadows to create depth.

## 2. Technical Strategy
- **Framework**: Use `framer-motion` for orchestration of complex, multi-layered animations.
- **Rendering**: Use standard HTML/CSS elements (DIVs) instead of Canvas to leverage CSS `blur` and `backdrop-filter` for superior visual quality.
- **Responsiveness**: Implement dynamic sizing to ensure orbs don't clutter smaller viewports.

## 3. Implementation Steps

### Step 1: Update `HeaderBackground` Component
- Modify `components/header-background.tsx` to transition from Canvas to a Motion-based DIV structure.
- Define a set of orb configurations (size, initial position, color, animation duration).

### Step 2: Styling & Gradients
- Implement `radial-gradient` backgrounds for each orb.
- Use `blur-[100px]` to `blur-[150px]` for the "atmosphere" effect.
- Add a subtle noise overlay to prevent color banding in gradients.

### Step 3: Animation Logic
- Apply `animate` props for floating movement (X, Y, Scale).
- Implement `useScroll` or `useSpring` for mouse-parallax interaction.

### Step 4: Refine Background Grid
- Keep the subtle grid but make it more translucent to sit behind/between the orbs for added depth.

## 4. Verification & Polish
- Ensure the contrast with the foreground text remains high.
- Verify smooth performance across different device types.
- Check z-index stacking to ensure orbs stay behind the hero content.
