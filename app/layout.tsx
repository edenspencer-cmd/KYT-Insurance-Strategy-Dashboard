export const metadata = {
  title: "KYT Insurance Growth Dashboard",
  description: "12-month growth modelling dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
