import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Book Haven Registration",
    description: "login or make account to online book store bookhaven",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
