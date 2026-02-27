# Beauty by Chloe – Luxury Salon & Spa

A high-performance, cinematic, scroll-driven immersive website for a luxury salon brand, built as an assignment submission. Designed with an ultra-premium aesthetic inspired by leading luxury brands and high-end hospitality.

## 🌟 Live Demo
*(Run `npm run dev` to view locally at `http://localhost:3000`)*

## 🛠 Technology Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS custom configurations
* **Animations & Interaction**:
  * [GSAP (GreenSock)](https://gsap.com/) (Core animations & ScrollTrigger precision)
  * [Lenis](https://studiofreight.github.io/lenis/) (Frame-perfect smooth scrolling tied to requestAnimationFrame)

## ✨ Key Features & Technical Highlights

* **Cinematic Scroll Architecture**: Uses Lenis smooth scrolling synced directly to GSAP's ticker, ensuring that heavy DOM manipulation and parallax scrubs render flawlessly at 60fps without judder.
* **Complex Animation Sequencing**: 
  * Custom preloader with particle effects and an eased branding reveal.
  * Intersection-based multi-timeline reveals (character staggering, clip-path image masks, typography 3D rotations).
* **Advanced Parallax & Depth**: Utilizes GSAP ScrollTrigger to move nested image elements at offset speeds to their masks, creating an illusion of deep 3D space.
* **Performance Enhancements**: 
  * Strict adherence to using `transform` and `opacity` for animations resulting in zero layout-thrashing.
  * Extensively optimized `IntersectionObserver` hooks to unmount non-visible logic.
  * `will-change` hints strategically placed on primary moving layers.
* **"Quiet Luxury" UI/UX**: 
  * Custom Glassmorphism styling (`backdrop-filter`) for floating modals and responsive navigation.
  * High-end typography pairing (Cormorant Garamond & Inter).
  * An ultra-refined muted Bronze (`#CBAA81`) and Espresso/Obsidian (`#110e0d`) palette.

## 🚀 Getting Started

### Prerequisites
* Node.js 18.x or later installed.
* npm or yarn.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/razaalikarimi/Beauty-by-Chloe.git
   cd Beauty-by-Chloe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure highlights

* `src/components/animations/` - Core animation providers (Lenis Smooth Scroll wrapper) and reusable GSAP/CSS wrappers (Parallax lines, Preloader).
* `src/components/ui/` - Reusable interface components (Glassmorphism modals, Navbar, Footer, Booking forms).
* `src/components/sections/` - Major page segments (Hero, Testimonials, About, and dynamically mapped Room components).
* `src/data/services.ts` - Master configuration array acting as a localized database for dynamically rendering the treatments, pricing, and visual color profiles of each salon room.
* `src/hooks/` - Custom utility hooks for cleanly managing intersections and scroll progress listeners outside of hot-paths.

## 🧑‍💻 Author
**Raza Ali Karimi**
