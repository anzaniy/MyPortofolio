# Certificates Page Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the certificates section to “Certificates” / “Sertifikat” and add the user's HackerRank Software Engineer certificate.

**Architecture:** Keep the existing bilingual `Dual` labels and certificate card rendering. Convert the provided one-page PDF into a PNG under `public/images/certificates/` and add its metadata to the existing certificate data array.

**Tech Stack:** Astro 4, TypeScript, Astro content pages, Python PyMuPDF for one-time PDF conversion.

**Spec:** `docs/superpowers/specs/2026-11-17-certificates-design.md`

## Global Constraints

- English is the default; Indonesian remains available through `Dual`.
- Use `withBase()` for the certificate image URL.
- Preserve existing certificates.
- Include HackerRank, earned date 17 Nov 2026, and credential ID 2AFDDDD55917.

## Review Focus

- Direct page visit and all CV/sidebar links must lead to the same certificate page: verify with `pnpm build` and inspect emitted routes.
- The certificate image must be present and usable from the GitHub Pages subpath: verify the emitted asset and rendered `/MyPortofolio/images/certificates/hackerrank-software-engineer.png` reference.
- Existing certificate entries must remain intact: verify both original image paths and entries remain in `src/data/certificates.ts`.
- Language toggle must show concise translated labels: search affected source for the old label and inspect new `Dual` values.

---

### Task 1: Add HackerRank certificate and update labels

**Files:**
- Create: `public/images/certificates/hackerrank-software-engineer.png` by converting `C:\Users\User\Downloads\software_engineer certificate.pdf`.
- Modify: `src/data/certificates.ts` to add the new entry.
- Modify: `src/pages/sertifikasi.astro` for page title, accessible heading, and description.
- Modify: `src/components/SideBarMenu.astro` for the navigation label.
- Modify: `src/pages/cv.astro` for section and link labels.

**Interfaces:**
- Consumes: existing `Certificate` interface and `Dual` component.
- Produces: existing certificates page displays a HackerRank Software Engineer entry with its PNG and credential metadata.

- [x] Convert the provided one-page PDF to `public/images/certificates/hackerrank-software-engineer.png`, preserving its landscape aspect ratio and sufficient resolution for full-size viewing.
- [x] Add a bilingual `Software Engineer` entry to `certificates` in `src/data/certificates.ts`: issuer HackerRank, date `17 Nov 2026` / `17 November 2026`, credential ID `2AFDDDD55917`, and a concise description that the role certification test was passed.
- [x] Update all visible occurrences of “Training Certificates” / “Sertifikat Pelatihan” in the page, sidebar, and CV to “Certificates” / “Sertifikat”; update the page description and CV link wording consistently.
- [x] Run `pnpm build`; expect a successful build and the existing static page set plus certificate image in `dist/`.
- [x] Inspect `dist/sertifikasi/index.html` for the new label and image path, verify the generated image exists, and confirm original certificates remain in the list.
