

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      keyframes: {

        pulse: {
          // '0%', 
          '100%': {
            opacity: 1
          },
          '50%': {
            opacity: .5
          }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        // Chart
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '9999px', opacity: '1' },
        },
        accordionClose: {
          '0%': { maxHeight: '9999px', opacity: '1' },
          '100%': { maxHeight: '0', opacity: '0' },
        },
        // accordionOpen: {
        //   from: { height: "0px" },
        //   to: { height: "var(--radix-accordion-content-height)" },
        // },
        // accordionClose: {
        //   from: {
        //     height: "var(--radix-accordion-content-height)",
        //   },
        //   to: { height: "0px" },
        // },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(100%)" },
        },
      },

      // animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

      animation: {
        pulse: "2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade: "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade: "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Accordion
        // accordionOpen: "accordionOpen 1500ms cubic-bezier(0.87, 0, 0.13, 1)",
        // accordionClose: "accordionClose 1500ms cubic-bezier(0.87, 0, 0.13, 1)",
        accordionOpen: 'accordionOpen 0.5s ease-in-out',
        accordionClose: 'accordionClose 0.5s ease-in-out',
        // Dialog
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Drawer
        drawerSlideLeftAndFade:
          "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
      },      
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate') ],
};
export default config;


