import "./globals.css";
import { jost } from "./font";
import { ReduxProvider } from "@/redux/provider";


export const metadata = {
  title: "Product feedback",
  description: "Product feedback app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-jost bg-offWhite`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
