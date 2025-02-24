import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wekex.com'),
  title: "Wekex Technologies - Leading IT Solutions & Services Company in India",
  description: "Wekex Technologies provides comprehensive IT solutions including web development, mobile apps, IoT solutions, and e-commerce platforms. 12+ years of excellence in delivering innovative technology solutions.",
  keywords: "IT solutions, web development, mobile app development, IoT solutions, e-commerce development, software development company, IT services India",
  authors: [{ name: "Wekex Technologies" }],
  creator: "Wekex Technologies",
  publisher: "Wekex Technologies",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: 'https://wekex.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://wekex.com',
    title: 'Wekex Technologies - Leading IT Solutions & Services',
    description: 'Comprehensive IT solutions including web development, mobile apps, IoT solutions, and e-commerce platforms.',
    siteName: 'Wekex Technologies',
    images: [{
      url: 'https://wekex.com/assets/img/og_image.webp',
      width: 1200,
      height: 630,
      alt: 'Wekex Technologies - Leading IT Solutions & Services Company',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wekex Technologies - IT Solutions & Services',
    description: 'Expert IT solutions for web, mobile, IoT, and e-commerce development.',
    images: ['https://wekex.com/assets/img/og_image.webp'],
    creator: '@wekex',
    site: '@wekex',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'IT Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>
          Wekex Technologies - Leading IT Solutions & Services Company in India
        </title>
        <meta
          name="description"
          content="Wekex Technologies provides comprehensive IT solutions including web development, mobile apps, IoT solutions, and e-commerce platforms. 12+ years of excellence in delivering innovative technology solutions."
        />
        <meta
          name="keywords"
          content="IT solutions, web development, mobile app development, IoT solutions, e-commerce development, software development company, IT services India"
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:title"
          content="Wekex Technologies - Leading IT Solutions & Services"
        />
        <meta
          property="og:description"
          content="Comprehensive IT solutions including web development, mobile apps, IoT solutions, and e-commerce platforms."
        />
        <meta
          property="og:image"
          content="https://wekex.com/assets/img/og_image.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Wekex Technologies - Leading IT Solutions & Services Company"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://wekex.com" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wekex Technologies - IT Solutions & Services"
        />
        <meta
          name="twitter:description"
          content="Expert IT solutions for web, mobile, IoT, and e-commerce development."
        />
        <meta
          name="twitter:image"
          content="https://wekex.com/assets/img/og_image.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Wekex Technologies - Leading IT Solutions & Services Company"
        />

        {/* <!-- Additional SEO Meta Tags --> */}
        <meta name="author" content="Wekex Technologies" />
        <meta name="robots" content="index, follow" />
        <meta name="canonical" content="https://wekex.com" />

        {/* <!-- Structured Data --> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Wekex Technologies",
              "url": "https://wekex.com",
              "logo": "https://wekex.com/assets/img/logo.png",
              "description": "Comprehensive IT solutions including web development, mobile apps, IoT solutions, and e-commerce platforms.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shanti Vista, Yashwant shrusti",
                "addressLocality": "Boisar",
                "postalCode": "401501",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-848-403-4341",
                "contactType": "customer service",
                "email": "client@wekex.com"
              },
              "sameAs": [
                "https://facebook.com/wekex",
                "https://twitter.com/wekex",
                "https://linkedin.com/company/wekex",
                "https://instagram.com/wekex"
              ]
            })
          }}
        />

        {/* <!-- Favicons --> */}
        <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/img/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/img/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/img/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="assets/img/android-chrome-512x512.png"
        />
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />

        {/* <!-- Fonts --> */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Vendor CSS Files --> */}
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />

        {/* <!-- Main CSS File --> */}
        <link href="assets/css/main.css" rel="stylesheet" />
        {/* <!-- Language and Region --> */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Boisar" />
        <meta name="geo.position" content="19.8012;72.7537" />
        <meta name="ICBM" content="19.8012, 72.7537" />

        {/* <!-- Mobile Specific --> */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#2563eb" />

        {/* <!-- Additional SEO Tags --> */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="copyright" content="Wekex Technologies" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />

        {/* <!-- Page-specific metadata --> */}
        <meta name="subject" content="IT Solutions and Services" />
        <meta
          name="topic"
          content="Technology, Web Development, Mobile Apps, IoT Solutions"
        />
        <meta name="classification" content="Business" />
        <meta name="designer" content="Wekex Technologies" />
        <meta name="reply-to" content="client@wekex.com" />
        <meta name="owner" content="Wekex Technologies" />
        <meta name="url" content="https://wekex.com" />
        <meta name="identifier-URL" content="https://wekex.com" />
        <meta name="category" content="IT Services" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        {/* <!-- Browser Compatibility --> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* <!-- Security --> */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https: 'unsafe-inline' 'unsafe-eval' data: blob: *.googleapis.com *.gstatic.com *.google.com *.facebook.com *.twitter.com *.linkedin.com;"
        />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* <!-- PWA Related --> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Wekex Technologies" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* <!-- Preconnect to important third-party origins --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />

        {/* <!-- DNS Prefetch --> */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </head>
      <body
        className={`index-page ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

        {/* <!-- Scroll Top --> */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* <!-- Vendor JS Files --> */}
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>

        {/* <!-- Main JS File --> */}
        <script src="assets/js/main.js"></script>
      </body>
    </html>
  );
}
