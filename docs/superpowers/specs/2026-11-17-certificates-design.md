# Certificates Page Update

- Intent: use the concise “Certificates” / “Sertifikat” label and add the user's HackerRank Software Engineer certificate to the portfolio.
- Scope: update the certificates page title and description, sidebar label, and CV section/link labels; add the certificate image and bilingual metadata to the existing certificates list.
- Approaches: (1) convert the provided PDF to an image and use the existing certificate display pattern; (2) host and embed/link the PDF. Chosen: approach 1, as requested, for consistency with the current page.
- Constraints: English is the default; Indonesian remains available through `Dual`; use `withBase()` for the image URL; preserve existing certificates; title the new item “Software Engineer” and include HackerRank, earned date 17 Nov 2026, and credential ID 2AFDDDD55917.
- Non-goals: redesigning the page, changing certificate categories or CV content beyond its label/link text.
- Verification: run `pnpm build` and check the produced certificates page and certificate asset.
