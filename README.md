# Rick Imai - Portfolio Site

A professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── resume/            # Resume page
│   ├── skills/            # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── AnimatedSection.tsx # Scroll animations
└── lib/                   # Utilities
public/                    # Static assets
```

## Customization

### Adding Your Resume

1. Export your resume as a PDF
2. Name it `rick-imai-resume.pdf`
3. Place it in the `public/` folder

### Adding Your Photo

1. Add your professional headshot to `public/`
2. Update the About page to use the image instead of the placeholder

### Updating Content

All content is defined directly in the page components. Key files to update:

- `src/app/page.tsx` - Home page stats and highlights
- `src/app/experience/page.tsx` - Work experience details
- `src/app/skills/page.tsx` - Skills and certifications
- `src/app/about/page.tsx` - Personal bio and values
- `src/components/Footer.tsx` - Social links

### Updating Colors

The primary color scheme can be modified in `tailwind.config.ts`:

```ts
colors: {
  primary: {
    // Adjust these values for a different accent color
    500: "#0ea5e9",
    // ...
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Environment Variables

For production deployment, you may want to add:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Contact form backend
CONTACT_API_URL=your-contact-form-api
```

## License

Private - All rights reserved.
