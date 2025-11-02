import Footer from "@/components/layout/Footer/Footer"
import NavBar from "@/components/layout/NavBar/NavBar"
import { ThemeProvider } from "next-themes"

export const metadata = {
    title: 'Book Haven Explore Books',
    description: 'explore your book on BookHaven',
}

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
                <Footer />
            </body>
        </html>
    )
}
