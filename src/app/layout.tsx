import "./globals.css";

export const metadata = {
  title: "BuiltByIfeanyi - Developer Portfolio",
  description: "Welcome to my developer portfolio!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
