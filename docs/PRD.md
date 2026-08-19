# **Product Requirement Document (PRD)**

## **B2B Export Landing Page: Cocopeat & Coconut Charcoal Briquette**

## **1\. Executive Summary**

Dokumen ini merupakan spesifikasi kebutuhan produk (PRD) untuk pembuatan **Landing Page / Marketing Website Ekspor B2B** berbasis **Astro Framework** yang mempromosikan dua komoditas kelapa utama Indonesia: **Cocopeat** dan **Charcoal Briquette (Briket Arang Kelapa)**.

Website ini ditargetkan khusus untuk pembeli internasional (B2B Importer, Wholesaler, Distributor) dengan mengedepankan desain modern, clean, premium, serta arsitektur teknis yang ultra-cepat (Core Web Vitals 95+), mobile-first, dan terstruktur kuat untuk SEO Organik maupun Google/Meta Ads.

## **2\. Business Objective**

* **Menjangkau Buyer B2B Internasional:** Menghadirkan *digital storefront* kelas dunia yang membangun kredibilitas instan bahwa perusahaan adalah supplier/exporter tepercaya dari Indonesia.  
* **Efisiensi Jalur Konversi:** Menyederhanakan proses penawaran harga (*Inquiry / Request Quote*) melalui kanal komunikasi ber-hambatan rendah (WhatsApp Business & Direct RFQ Email/Form).  
* **Siap Iklan & SEO:** Menyediakan fondasi landing page yang relevan untuk campaign Google Ads (Search/Display) dan Meta Ads tanpa memerlukan pembangunan ulang sistem.

## **3\. Website Objective**

* **Waktu Pemahaman \< 10 Detik:** Memastikan *pembeli B2B* langsung mengerti dalam 5–10 detik pertama mengenai produk yang dijual, lokasi supplier, spesifikasi utama, dan cara menghubungi.  
* **Skor Kinerja Maksimal:** Memaksimalkan Google Core Web Vitals (LCP \< 1.8s, CLS \< 0.05, INP \< 100ms) dengan arsitektur Static Site Generation (SSG).  
* **Konversi Tinggi:** Memiliki CTA (Call-To-Action) yang persuasif, *sticky*, dan mudah diakses di perangkat seluler.

## **4\. Target Audience**

1. **B2B Importers & Distributors:** Perusahaan pengimpor bahan baku komoditas pertanian dan energi alternatif.  
2. **Agriculture & Horticulture Suppliers:** Pembeli Cocopeat skala besar untuk media tanam, perkebunan rumah kaca, dan ritel pembenihan.  
3. **BBQ & Shisha/Hookah Wholesalers:** Distributor arang untuk pasar pemanas/BBQ dan *lounge hookah* internasional.  
4. **Wilayah Target Utama:** Asia Pasifik, Timur Tengah (Middle East), Eropa, Australia, dan Amerika Serikat.

## **5\. User Persona**

### **Persona A: Foreign Sourcing Manager (B2B Buyer)**

* **Nama:** Marcus Vance (42 tahun, Rotterdam, Belanda)  
* **Peran:** Procurement Director di Perusahaan Distributor Horticultural Europe  
* **Kebutuhan:** Mencari supplier Cocopeat kontaineran dari Indonesia dengan spesifikasi EC (Electro Conductivity) rendah, pengiriman konsisten, dan pengemasan briket/blok terstandar.  
* **Tantangan:** Sering menemukan website supplier Indonesia yang tampak amatir, informasi spesifikasi samar, respon lambat, dan tidak transparan.  
* **Tujuan di Website:** Melihat spesifikasi teknis (EC, pH, Moisture, Packaging) secara instan, mengunduh PDF spec sheet, dan langsung melakukan obrolan via WhatsApp/Email untuk penawaran *FOB/CIF*.

## **6\. User Pain Points**

1. **Ketidakpastian Kualitas Supplier:** Banyak website ekspor lokal tampak usang (*outdated*) atau menggunakan foto stok yang tidak meyakinkan.  
2. **Kurangnya Spesifikasi Produk yang Jelas:** Buyer kesulitan menemukan parameter teknis (misal: *Ash Content* & *Fixed Carbon* pada briket arang, atau *pH* & *EC* pada Cocopeat).  
3. **Proses RFQ yang Rumit:** Form konversi yang terlalu panjang atau tidak tersedianya kontak langsung cepat (WhatsApp / Direct Email).  
4. **Website Lambat di Perangkat Mobile:** Situs yang memuat video atau gambar berukuran masif tanpa optimasi sering kali gagal dimuat di koneksi internasional/mobile.

## **7\. Value Proposition**

* **Premium Indonesian Origin:** Pasokan langsung bahan dasar kelapa organik berkualitas tinggi khas Indonesia.  
* **B2B Export Ready:** Pengemasan kustom (*custom packaging*), standar inspeksi kualitas, dan pengalaman pemenuhan volume kontainer (*FCL*).  
* **Transparent Specification:** Kejujuran data spesifikasi fisik dan teknis produk tanpa angka klaim fiktif.

## **8\. Brand Positioning**

* **Visual Character:** Clean, Modern, Sustainable, Premium Industrial, and High-Trust.  
* **Color Tone:** Deep Forest Green (Pertanian/Cocopeat), Warm Amber/Gold (Energi/Briket), Off-White Background, dan Dark Charcoal Typography.  
* **Bukan E-commerce / Tanpa Cart:** Positioning jelas sebagai **Manufacturer & Exporter B2B Supplier**, bukan penjual e-commerce eceran.

## **9\. User Journey**

\[ Visitor Touchpoint: Google Search / Ads / Social \]  
                         │  
                         ▼  
        ┌──────────────────────────────────┐  
        │  Hero Section (0–10 Detik)      │  
        │  \- Positioning & Visual Produk  │  
        │  \- CTA: Request Quote / WhatsApp │  
        └──────────────────────────────────┘  
                         │  
                         ▼  
        ┌──────────────────────────────────┐  
        │  Company Trust & Overview        │  
        │  \- Supplier Credibility          │  
        │  \- Export Capabilities           │  
        └──────────────────────────────────┘  
                         │  
                         ▼  
        ┌──────────────────────────────────┐  
        │  Product Showcase & Spec Table   │  
        │  \- Cocopeat Specifications       │  
        │  \- Briquette Specifications      │  
        └──────────────────────────────────┘  
                         │  
                         ▼  
        ┌──────────────────────────────────┐  
        │  Factory / Process / YouTube     │  
        │  \- Production & Packaging Video  │  
        │  \- Product Photo Gallery         │  
        └──────────────────────────────────┘  
                         │  
                         ▼  
        ┌──────────────────────────────────┐  
        │  Conversion & FAQ                │  
        │  \- MOQ & Order Steps             │  
        │  \- RFQ Contact Form & WhatsApp   │  
        └──────────────────────────────────┘

## **10\. Sitemap**

Situs dirancang secara efisien untuk MVP (Minimum Viable Product):

/ (Homepage / Main Landing Page)  
├── /products/  
│   ├── cocopeat/  
│   └── charcoal-briquette/  
├── /articles/ (Statis via Astro Content Collections)  
│   └── \[slug\]/  
└── /contact/

## **11\. Landing Page Structure (Single-Page Flow Overview)**

1. **Header Navigation Bar** (Sticky, Logo, Quick Links, CTA Button)  
2. **Hero Section** (H1 Intent \+ Value Prop \+ High-Res Product Visual \+ Dual CTA)  
3. **Company Trust Overview** (Highlighting Indonesian Export Capability & Values)  
4. **Featured Product Showcase:**  
   * Block 1: Cocopeat (Image, Overview, Key Specs, CTA)  
   * Block 2: Coconut Charcoal Briquette (Image, Overview, Key Specs, CTA)  
5. **Technical Specifications Table Grid** (Clean Data Cards / Responsive Table)  
6. **Product Applications / Use Cases** (Agriculture, Horticulture, Shisha, BBQ)  
7. **Why Choose Us / Supplier Advantage** (Quality Control, Custom Packaging, Logistics)  
8. **Factory & Process Gallery** (Real Client Photos \- Clean Layout)  
9. **Video Showcase (YouTube Embed with Lazy Loading)** (See Our Production Process)  
10. **Frequently Asked Questions (FAQ)** (Accordion style for B2B queries)  
11. **Bottom Conversion Banner & Contact Form** (Request a Quote \+ Direct WhatsApp)  
12. **Footer** (Legal, Navigation, SEO Copyright, Social links)

## **12\. Page-by-Page Requirements**

### **A. Homepage (/)**

* **Tujuan:** Menangkap seluruh arus lalu lintas awal, membangun trust, dan mengarahkan langsung ke penawaran harga.  
* **Elemen Kunci:** Hero modern, ringkasan spesifikasi 2 produk utama, galeri proses, video YouTube, FAQ, dan form kontak.

### **B. Dedicated Product Pages (/products/cocopeat/ & /products/charcoal-briquette/)**

* **Tujuan:** Halaman khusus landed-page untuk Google Ads / Keyword Komersial spesifik.  
* **Elemen Kunci:** Deep-dive spesifikasi, opsi pengemasan (*block, brick, bag*), detail teknis (*EC, pH, Ash content, Burning time*), galeri khusus produk, FAQ spesifik produk, dan form RFQ independen.

### **C. Supporting SEO Articles (/articles/\[slug\])**

* **Tujuan:** Edukasi buyer dan penangkapan trafik *Informational Intent*.  
* **Elemen Kunci:** Artikel Markdown tanpa JS berat, *Table of Contents*, callout box untuk *Request Quote*, dan link internal ke halaman produk.

## **13\. Product Requirements & Specifications**

> **Catatan:** Penggunaan data spesifikasi nyata dari client diutamakan. Jika belum diberikan, gunakan format placeholder berikut tanpa merekayasa angka fiktif yang menyesatkan.

### **Product 1: Cocopeat (Coconut Coir Dust)**

* **Primary Uses:** Growing Media, Greenhouse Agriculture, Soil Conditioner, Hydroponics.  
* **Specification Attributes (Table Format):**  
  * **Type:** Low EC / High EC (Washed / Unwashed)  
  * **Electrical Conductivity (EC):** \[Placeholder: e.g., \< 0.5 mS/cm\]  
  * **pH Level:** \[Placeholder: e.g., 5.5 \- 6.5\]  
  * **Moisture Level:** \[Placeholder: e.g., \< 15-20%\]  
  * **Expansion:** \[Placeholder: e.g., 15 Liters/kg\]  
  * **Compression Ratio:** \[Placeholder: e.g., 5:1\]  
  * **Packaging:** \[Placeholder: 5kg Block / 650g Brick / Loose Bag / Palletized\]  
  * **Minimum Order Quantity (MOQ):** \[Placeholder: 1 x 40ft HC Container\]

### **Product 2: Coconut Charcoal Briquette**

* **Primary Uses:** Shisha / Hookah Premium, Barbecue (BBQ) Fuel, Industrial Heating.  
* **Specification Attributes (Table Format):**  
  * **Application:** \[Placeholder: Premium Shisha Grade / BBQ Grade\]  
  * **Ash Content:** \[Placeholder: e.g., 2.0% \- 2.5%\]  
  * **Ash Color:** \[Placeholder: White / Light Grey\]  
  * **Fixed Carbon:** \[Placeholder: e.g., Min 80%\]  
  * **Moisture:** \[Placeholder: e.g., Max 5-6%\]  
  * **Volatile Matter:** \[Placeholder: e.g., Max 13%\]  
  * **Burning Time:** \[Placeholder: e.g., 2.5 \- 3 Hours\]  
  * **Shape & Size:** \[Placeholder: Cube 25mm, Cube 26mm, Hexagonal, Cylindrical\]  
  * **Packaging:** \[Placeholder: Inner Box 1kg \+ Master Carton 10kg\]  
  * **MOQ:** \[Placeholder: 1 x 20ft / 40ft Container\]

## **14\. Content Requirements**

* **Bahasa Utama:** Bahasa Inggris (International Business English).  
* **Tone of Voice:** Professional, Direct, Fact-Based, Authoritative, and Customer-Centric.  
* **Larangan Konten:** Dilarang mencantumkan testimoni palsu, sertifikasi palsu (ISO/Sucofindo jika tidak ada bukti), atau foto stok tanpa lisensi/generik yang mengurangi keaslian.

## **15\. CTA (Call-To-Action) Strategy**

| Stage | Action Text | Placement | Goal |
| :---- | :---- | :---- | :---- |
| **Top Navigation** | Request a Quote | Header Right (Desktop/Mobile) | Direct Conversion |
| **Hero Primary** | Get Bulk Quotation | Hero Left Column | Primary Lead |
| **Hero Secondary** | Explore Specifications | Hero Left Column | Page Scroll / Engagement |
| **Product Showcase** | View Product Specs | Under Each Product Card | Detail Exploration |
| **Sticky Mobile Bar** | Chat on WhatsApp | Bottom Fixed Mobile Anchor | Instant Inquiry |
| **Bottom Section** | Submit RFQ Form | Pre-Footer | B2B Email Lead Capture |

## **16\. SEO Strategy (Comprehensive Framework)**

SEO landing page ini didasarkan pada 4 pilar utama:

1. **Commercial Relevance:** Menargetkan kata kunci dengan niat beli (*buyer intent*).  
2. **Topical Authority:** Menghubungkan landing page utama dengan artikel pendukung statis.  
3. **Technical Excellence:** Waktu muat cepat, *semantic markup*, dan zero layout shift.  
4. **Structured Data Integration:** Schema JSON-LD resmi dari Schema.org.

## **17\. Keyword Research & Target Intent**

### **A. Commercial & Transactional Keywords (High Priority)**

* cocopeat supplier indonesia  
* wholesale cocopeat exporter  
* buy cocopeat blocks bulk  
* coconut charcoal briquette manufacturer  
* shisha charcoal briquette exporter indonesia  
* indonesian coconut charcoal factory

### **B. Informational Keywords (Article / Cluster Content)**

* what is low ec cocopeat  
* cocopeat specifications for hydroponics  
* how to choose shisha charcoal briquettes  
* coconut shell charcoal vs wood charcoal

## **18\. Keyword Mapping Table**

| Page Path | Primary Keyword | Secondary Keywords | Search Intent |
| :---- | :---- | :---- | :---- |
| / | indonesia cocopeat and charcoal briquette supplier | coconut products exporter indonesia, wholesale cocopeat | Commercial / Branded |
| /products/cocopeat/ | cocopeat supplier indonesia | low ec cocopeat bulk, cocopeat block 5kg exporter | Transactional / Commercial |
| /products/charcoal-briquette/ | charcoal briquette supplier indonesia | coconut charcoal briquette factory, shisha charcoal wholesale | Transactional / Commercial |
| /articles/what-is-cocopeat/ | what is cocopeat | cocopeat benefits, cocopeat growing media | Informational |

## **19\. Content Strategy & Cluster Architecture**

                       ┌──────────────────────────────┐  
                       │   Homepage / Main Landing    │  
                       └──────────────┬───────────────┘  
                                      │  
              ┌───────────────────────┴───────────────────────┐  
              ▼                                               ▼  
┌───────────────────────────┐                   ┌───────────────────────────┐  
│ /products/cocopeat/       │                   │ /products/charcoal/       │  
└─────────────┬─────────────┘                   └─────────────┬─────────────┘  
              │                                               │  
   ┌──────────┴──────────┐                         ┌──────────┴──────────┐  
   ▼                     ▼                         ▼                     ▼  
Article:              Article:                  Article:              Article:  
Low EC vs High EC     Packaging Guide           Shisha vs BBQ Specs   Quality Check Guide

## **20\. Internal Linking Strategy**

* Halaman **Homepage** menghubungkan ke masing-masing halaman **Product Detail**.  
* Setiap **Artikel SEO** harus memasukkan minimal **2 kontekstual link** (misal: frasa *"premium low EC cocopeat supplier"* menautkan kembali ke /products/cocopeat/).  
* Halaman **Product Detail** selalu menyertakan link konversi langsung ke /contact/ atau jangkar form \#rfq-form.

## **21\. Technical SEO Specifications**

* **Clean URLs:** Bebas ekstensi .html atau parameter *query string* yang tidak perlu.  
* **Canonical Tags:** Diterapkan di semua halaman (\<link rel="canonical" href="https://domain.com/..." /\>).  
* **Heading Hierarchy:** Pastikan tepat **satu H1** per halaman, diikuti struktur H2 dan H3 yang logis.  
* **Structured Data (JSON-LD):**  
  * Organization Schema pada Homepage.  
  * Product Schema pada halaman detail produk.  
  * BreadcrumbList Schema pada semua sub-halaman.  
  * FAQPage Schema pada section FAQ.

## **22\. Image SEO Specifications**

* **Format:** Semua asset foto diubah ke format modern **WebP** atau **AVIF**.  
* **Responsive Sizing:** Menggunakan atribut srcset dan sizes pada tag \<picture\> atau komponen Image bawaan Astro.  
* **Explicit Dimensions:** Mengidentifikasi width dan height secara eksplisit untuk mencegah *Cumulative Layout Shift (CLS)*.  
* **Alt Text Naming Convention:**  
  * indonesia-cocopeat-5kg-block-supplier.webp (Alt: "5kg Low EC Cocopeat Block packaged for export from Indonesia")  
  * coconut-charcoal-briquette-factory-indonesia.webp (Alt: "Premium Coconut Charcoal Briquettes for Shisha ready for container shipment")

## **23\. Performance Requirements (Core Web Vitals Target)**

* **Performance Score:** 95+ (Lighthouse Desktop & Mobile)  
* **Largest Contentful Paint (LCP):** \< 1.8 detik  
* **Cumulative Layout Shift (CLS):** \< 0.02  
* **Interaction to Next Paint (INP):** \< 80ms  
* **Zero Heavy Framework JS:** 0 KB Client-side React/Vue JS (Gunakan Vanilla Astro / HTML murni di client side).

## **24\. UI/UX Design Direction**

### **Transformasi dari Referensi Layout Client:**

* **Sebelum (Desain Referensi Client):** Warna kuning terang dominan yang tampak kurang eksklusif untuk pasar B2B Eropa/AS, susunan foto galeri terlalu rapat, teks pada banner terlalu ramai, font standar.  
* **Sesudah (Desain Baru PRD):**  
  * Layout serba *clean*, memanfaatkan *negative space/whitespace* secara elegan.  
  * Warna aksen kuning terang diganti dengan **Warm Sand / Earthy Gold** yang berpadu sempurna dengan **Deep Forest Green** dan **Dark Charcoal**.  
  * Spesifikasi produk ditampilkan dalam bentuk **Data Cards / Clean Tables** bergaya SaaS B2B, bukan daftar teks biasa.  
  * Tombol CTA dibuat tegas, kontras, dan memiliki *padding* yang nyaman diakses jempol pada perangkat seluler.

## **25\. Design System & Style Guide**

### **Palette Warna (Tailwind CSS Extended Tokens)**

* **Primary Green:** \#1B3B2B (Earthy Deep Forest \- Melambangkan pertanian/cocopeat)  
* **Primary Charcoal:** \#121619 (Dark Carbon \- Melambangkan energi/briket arang)  
* **Accent Gold:** \#D49A37 (Warm Premium Gold \- Untuk CTA & Highlight penting)  
* **Background Light:** \#F8F9FA (Clean Off-White)  
* **Surface Card:** \#FFFFFF (Pure White dengan border halus \#E5E7EB)  
* **Text Main:** \#1F2937 (Slate 800\)  
* **Text Muted:** \#4B5563 (Slate 600\)

### **Tipografi**

* **Primary Heading Font:** Plus Jakarta Sans / Outfit (Bold, Modern, International Standard)  
* **Body Font:** Inter / System UI (Highly readable pada layar mobile kecil)

### **Hierarchy Scale**

* **H1 (Hero):** 2.5rem (Mobile) / 4.0rem (Desktop) \- Line height 1.1  
* **H2 (Section):** 1.875rem (Mobile) / 2.5rem (Desktop)  
* **H3 (Card Title):** 1.25rem (Mobile) / 1.5rem (Desktop)  
* **Body Text:** 1.0rem (16px) \- Line height 1.6

## **26\. Responsive Strategy (Mobile-First)**

* **Mobile Viewport (\< 640px):**  
  * Navigation bertukar menjadi *clean slide-out menu* atau *minimalist burger*.  
  * Sticky Bottom Action Bar dengan tombol cepat: **WhatsApp Chat** & **Call/Email**.  
  * Spesifikasi tabel dapat digulirkan secara mendatar (*horizontally scrollable*) dengan indikator visual.  
* **Tablet Viewport (640px \- 1024px):**  
  * Layout produk 2 kolom.  
  * Galeri foto 3 kolom grid.  
* **Desktop Viewport (\> 1024px):**  
  * Grid 2 kolom seimbang pada Hero (Copywriting kiri, visual kanan).  
  * Navigation bar melayang (*Floating Sticky Header*).

## **27\. Accessibility (WCAG 2.2 Level AA Standard)**

* **Color Contrast:** Rasio kontras teks terhadap background minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar.  
* **Focus Indicators:** Border fokus (*visible outline*) yang jelas saat navigasi keyboard (TAB).  
* **Form Accessibility:** Semua input memuat label \<label for="..."\> resmi dan atribut aria-describedby.  
* **Media Support:** Video YouTube wajib memiliki tombol kontrol penuh dan atribut title yang deskriptif.

## **28\. Astro Framework Architecture**

Landing page ini dibangun sepenuhnya menggunakan **Astro (v4.x atau v5.x)** untuk mencapai zero JS secara default.

* **Rendering Mode:** Static Site Generation (SSG).  
* **Styling:** Tailwind CSS v3/v4 untuk utility-first styling yang super efisien.  
* **Iconography:** Lucide Icons (Astro SVG Components \- Zero Client JS bundle).

## **29\. Component Architecture**

src/components/  
├── common/  
│   ├── Header.astro  
│   ├── Footer.astro  
│   ├── Container.astro  
│   ├── Button.astro  
│   └── SectionHeading.astro  
├── landing/  
│   ├── Hero.astro  
│   ├── CompanyTrust.astro  
│   ├── ProductShowcase.astro  
│   ├── SpecTable.astro  
│   ├── WhyChooseUs.astro  
│   ├── ProcessGallery.astro  
│   ├── YouTubeSection.astro  
│   ├── FAQAccordion.astro  
│   └── ContactSection.astro  
├── products/  
│   ├── ProductHero.astro  
│   └── ProductSpecSheet.astro  
└── SEO/  
    ├── BaseHead.astro  
    └── SchemaMarkup.astro

## **30\. Content Collection Architecture (Articles & Products Data)**

### **File: src/content/config.ts**

import { defineCollection, z } from 'astro:content';

const articlesCollection \= defineCollection({  
  type: 'content',  
  schema: z.object({  
    title: z.string(),  
    description: z.string(),  
    pubDate: z.date(),  
    author: z.string().default('Export Editorial Team'),  
    heroImage: z.string(),  
    keywords: z.array(z.string()),  
  }),  
});

export const collections \= {  
  'articles': articlesCollection,  
};

## **31\. Folder Structure Project**

project-root/  
├── public/  
│   ├── favicon.ico  
│   ├── robots.txt  
│   └── images/  
│       ├── logo.svg  
│       ├── cocopeat/  
│       └── charcoal/  
├── src/  
│   ├── assets/  
│   ├── components/  
│   ├── content/  
│   │   └── articles/  
│   │       ├── low-ec-cocopeat-guide.md  
│   │       └── coconut-charcoal-briquette-specs.md  
│   ├── data/  
│   │   ├── cocopeat-specs.json  
│   │   └── charcoal-specs.json  
│   ├── layouts/  
│   │   ├── BaseLayout.astro  
│   │   └── ArticleLayout.astro  
│   ├── pages/  
│   │   ├── index.astro  
│   │   ├── contact.astro  
│   │   ├── products/  
│   │   │   ├── cocopeat.astro  
│   │   │   └── charcoal-briquette.astro  
│   │   └── articles/  
│   │       ├── index.astro  
│   │       └── \[slug\].astro  
│   └── styles/  
│       └── global.css  
├── astro.config.mjs  
├── tailwind.config.mjs  
├── tsconfig.json  
└── package.json

## **32\. Security Considerations**

1. **Zero Backend Exposure:** Karena situs ini merupakan *Static HTML/CSS*, tidak ada risiko kerentanan database (SQL Injection) atau serangan CMS WordPress.  
2. **Form Handling Safety:**  
   * Gunakan layanan form statis tepercaya (seperti Formspree, Web3Forms, atau Cloudflare Workers endpoint).  
   * Terapkan bot protection (*Honeypot field* / Cloudflare Turnstile).  
3. **Environment Variables:** Mengisolasi nomor WhatsApp, Webhook URL, dan API key iklan pada .env yang terpisah.

## **33\. Analytics Readiness**

* **Google Tag Manager (GTM):** Disiapkan *placeholder script* ringan pada \<head\> untuk memudahkan pemasangan tagging masa depan.  
* **Google Analytics 4 (GA4):** Setup event tracking untuk tombol Click\_to\_WhatsApp dan Submit\_RFQ\_Form.  
* **Meta Pixel & Ads Conversion:** Tracking event Lead dan Contact pada tombol CTA utama.

## **34\. Google Ads Readiness**

* **High Quality Score Landing Page:** Struktur headline dan sub-headline sinkron dengan pencarian Google Search Ads (misal: "Cocopeat Supplier Indonesia").  
* **Fast Load Speed:** Meminimalkan rasio *bounce rate* calon pembeli berbayar.  
* **Dedicated Product Landing Paths:** Kemampuan mengarahkan iklan spesifik Cocopeat langsung ke /products/cocopeat/ (bukan ke homepage umum).

## **35\. Meta Ads Readiness**

* **Mobile Experience Optimised:** 100% tampilan responsif tanpa bug untuk trafik dari Feed/Story Instagram & Facebook.  
* **Open Graph Protocol Meta:**  
  * og:title, og:description, og:image (Dimensi 1200x630px) disiapkan presisi agar tautan terlihat profesional saat dibagikan via WhatsApp/Social Media.

## **36\. MVP Scope (Wajib Ada)**

* \[x\] Responsive Single Page / Landing Page Utama (/)  
* \[x\] Hero Section dengan headline B2B & CTA ganda  
* \[x\] Showcase Produk Cocopeat & Charcoal Briquette  
* \[x\] Specification Tables (Placeholder / Client Data)  
* \[x\] Why Choose Us & Credibility Section  
* \[x\] Process Photo Gallery (Menggunakan foto asli client)  
* \[x\] YouTube Video Embed Section (Lazy Loading)  
* \[x\] FAQ Section (Accordion)  
* \[x\] Integrated Contact Form & Sticky WhatsApp Button  
* \[x\] Basic Technical SEO (Sitemap, Robots, Schema Organization, OG Tags)  
* \[x\] Astro SSG Build Setup & Mobile Performance Optimization

## **37\. Future Scope (Pengembangan Selanjutnya)**

* \[ \] Sistem Multilingual Bahasa (Inggris, Arab, Mandarin, Spanyol).  
* \[ \] Fitur *Interactive Freight & FOB Calculator*.  
* \[ \] Pengunduhan Katalog Produk PDF Otomatis (*Lead Magnet*).  
* \[ \] Integrasi CMS Headless (Sanity/Strapi) jika tim marketing internal client bertambah.

## **38\. QA (Quality Assurance) Checklist**

* \[ \] **Mobile Responsiveness:** Diuji pada viewport 360px, 390px, 768px, 1024px, 1440px.  
* \[ \] **Cross-Browser Compatibility:** Diuji pada Chrome, Safari, Edge, dan Firefox.  
* \[ \] **Broken Link Check:** Memastikan seluruh jangkar internal dan link WhatsApp berfungsi.  
* \[ \] **Form Validation:** Input email salah atau form kosong menampilkan pesan error yang ramah.  
* \[ \] **No Placeholder Leaks:** Memastikan teks \[Data\] atau \[Placeholder\] teridentifikasi jelas jika client belum memberikan spesifikasi.

## **39\. SEO Launch Checklist**

* \[ \] Webmaster Tools: Google Search Console disiapin & sitemap disambungkan (/sitemap-index.xml).  
* \[ \] Meta Title & Meta Description terisi unik untuk tiap URL.  
* \[ \] Tag \<h1...\> terverifikasi tunggal di setiap halaman.  
* \[ \] Gambar terkompresi dengan atribut alt lengkap.  
* \[ \] SSL / HTTPS aktif sempurna tanpa mixed content warnings.  
* \[ \] Favicon dan Touch Icon terpasang lengkap.

## **40\. Acceptance Criteria**

Website dinyatakan **SELESAI dan BERHASIL** apabila memenuhi poin-poin berikut:

1. **Business Acceptance:** Buyer yang membuka website dapat langsung mengenali bisnis sebagai supplier Cocopeat & Briquette asal Indonesia dalam \< 5 detik.  
2. **UI/UX Acceptance:** Tampilan bersih, modern, tidak ramah-acak (berbeda jauh dengan kesan template murah), dan CTA WhatsApp/Quote mudah dijangkau di layar HP.  
3. **Technical Acceptance:** Dibangun menggunakan Astro (SSG), tanpa CMS berat, waktu muat halaman \< 2 detik di mobile network, dan skor Google Lighthouse Performance ≥ 90\.  
4. **SEO Acceptance:** Memiliki sitemap, robots.txt, schema JSON-LD, serta struktur metadata yang presisi untuk pencarian kata kunci komersial B2B.