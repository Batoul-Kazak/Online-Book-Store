export const metadata = {
  title: 'All Bookhaven Books',
  description: 'Buy and read, free and paid books online and get hand copy of your book, search by filters, get the translation you want',
}

export default function RootLayout({
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
