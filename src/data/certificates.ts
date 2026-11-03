export interface Certificate {
    title: string;
    issuer: { en: string; id: string };
    type: "Sertifikat" | "Pelatihan";
    date: { en: string; id: string };
    period?: { en: string; id: string };
    credentialLabel?: { en: string; id: string };
    credentialId?: string;
    description: { en: string; id: string };
    image: string;
    imageAlt: { en: string; id: string };
    width: number;
    height: number;
}

export const certificates: Certificate[] = [
    {
        title: "Java Foundations",
        issuer: { en: "Oracle Academy", id: "Oracle Academy" },
        type: "Sertifikat",
        date: { en: "August 2021 - January 2022", id: "Agustus 2021 - Januari 2022" },
        description: {
            en: "Award of Course Completion for completing all coursework in the Java Foundations program, covering the fundamentals of object-oriented programming, class structure, inheritance, and exception handling using Java.",
            id: "Award of Course Completion atas penyelesaian seluruh coursework program Java Foundations, mencakup dasar pemrograman berorientasi objek, struktur kelas, inheritance, dan exception handling menggunakan Java.",
        },
        image: "/images/certificates/oracle-academy-java-foundations.png",
        imageAlt: {
            en: "Oracle Academy Award of Course Completion Java Foundations certificate for Muhammad Ega Putra Anzani",
            id: "Sertifikat Oracle Academy Award of Course Completion Java Foundations atas nama Muhammad Ega Putra Anzani",
        },
        width: 1584,
        height: 1224,
    },
    {
        title: "English Conversation Club (ECC)",
        issuer: { en: "UPT Bahasa Lampung University", id: "UPT Bahasa Universitas Lampung" },
        type: "Pelatihan",
        date: { en: "August 31, 2022", id: "31 Agustus 2022" },
        period: { en: "August 1-23, 2022 · 32 hours", id: "1-23 Agustus 2022 · 32 jam" },
        credentialLabel: { en: "Certificate No.", id: "No. Sertifikat" },
        credentialId: "089.308/UN26.33/TU.00.08/2022",
        description: {
            en: "English language training for Lampung University students held online via Zoom Meeting, focusing on conversation and oral communication skills.",
            id: "Pelatihan bahasa Inggris bagi mahasiswa Universitas Lampung yang diselenggarakan secara daring melalui Zoom Meeting, berfokus pada kemampuan percakapan dan komunikasi lisan.",
        },
        image: "/images/certificates/upt-bahasa-ecc-2022.webp",
        imageAlt: {
            en: "English Conversation Club (ECC) English training certificate from UPT Bahasa Lampung University for Muhammad Ega Putra Anzani",
            id: "Sertifikat Pelatihan Bahasa Inggris English Conversation Club (ECC) UPT Bahasa Universitas Lampung atas nama Muhammad Ega Putra Anzani",
        },
        width: 1684,
        height: 1191,
    },
];