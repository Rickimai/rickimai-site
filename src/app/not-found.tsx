"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center pt-16">
      <div className="container-custom">
        <div className="mx-auto max-w-md text-center">
          <div className="text-8xl font-bold text-neutral-800">404</div>
          <h1 className="mt-4 text-2xl font-bold text-white">Page Not Found</h1>
          <p className="mt-2 text-neutral-400">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
