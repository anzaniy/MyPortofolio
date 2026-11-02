export interface Certificate {
    title: string;
    issuer: string;
    type: "Sertifikat" | "Pelatihan";
    date: string;
    period?: string;
    credentialLabel?: string;
    credentialId?: string;
    description: string;
    image: string;
    imageAlt: string;
    width: number;
    height: number;
}

export const certificates: Certificate[] = [
    {
        title: "Java Foundations",
        issuer: "Oracle Academy",
        type: "Sertifikat",
        date: "Agustus 2021 – Januari 2022",
        description:
            "Award of Course Completion atas penyelesaian seluruh coursework program Java Foundations, mencakup dasar pemrograman berorientasi objek, struktur kelas, inheritance, dan exception handling menggunakan Java.",
        image: "/images/certificates/oracle-academy-java-foundations.png",
        imageAlt:
            "Sertifikat Oracle Academy Award of Course Completion Java Foundations atas nama Muhammad Ega Putra Anzani",
        width: 1584,
        height: 1224,
    },
    {
        title: "English Conversation Club (ECC)",
        issuer: "UPT Bahasa Universitas Lampung",
        type: "Pelatihan",
        date: "31 Agustus 2022",
        period: "1–23 Agustus 2022 · 32 jam",
        credentialLabel: "No. Sertifikat",
        credentialId: "089.308/UN26.33/TU.00.08/2022",
        description:
            "Pelatihan bahasa Inggris bagi mahasiswa Universitas Lampung yang diselenggarakan secara daring melalui Zoom Meeting, berfokus pada kemampuan percakapan dan komunikasi lisan.",
        image: "/images/certificates/upt-bahasa-ecc-2022.webp",
        imageAlt:
            "Sertifikat Pelatihan Bahasa Inggris English Conversation Club (ECC) UPT Bahasa Universitas Lampung atas nama Muhammad Ega Putra Anzani",
        width: 1684,
        height: 1191,
    },
];
