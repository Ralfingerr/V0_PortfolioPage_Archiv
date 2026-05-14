# Implementation Plan: Copy Update & Services Section

This plan outlines the updates to the website copy and the addition of a comprehensive "Services" section to better align with the business's focus on AI Automation and Content for E-Commerce.

## 1. Hero Section Updates (`hero.tsx`)
- **Headline (H1)**: Change to "AI Automation + Content for E-Commerce businesses".
- **Subheading**: Change to "I help Shopify and DTC brands to eliminate manual tasks, scale content production, and increase revenue through AI and automation systems."
- **CTA Button**: Update text to "Let's work together".
- **New Content Block**: Add a secondary content area below the CTA that outlines "Instead of hiring more people..." and the list of specific service examples.

## 2. New Services Component (`components/services.tsx`)
Create a new section component with a structured layout for the three core service areas:
- **Service 1: AI Content Systems**: Detailed breakdown of pipelines, SEO, and social media workflows.
- **Service 2: Shopify & E-Commerce Automation**: Focus on workflow reduction, inventory, and API integrations.
- **Service 3: Email Marketing Automation**: Focus on retention, abandoned carts, and Klaviyo/AI copy.

## 3. Page Integration (`app/page.tsx`)
- Import the new `Services` component.
- Insert it into the main landing page flow (suggested: after the `About` section or replacing the current `About` services blocks).

## 4. Visual Styling
- Use the existing design system (Glass cards, premium gradients, and subtle animations).
- Ensure the "Instead of hiring..." list has clear bullet points or icons for readability.

## 5. Navigation Update (`components/navigation.tsx`)
- Ensure "Services" is properly linked in the navigation menu.
