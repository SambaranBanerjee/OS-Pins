import "./globals.css";

export const metadata = {
  title: "OS-Pins — Next-gen badge platform",
  description: "Issue, collect, and showcase beautiful digital badges with real-time embeddable boards."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
