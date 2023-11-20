import "./globals.css";
import { jost } from "./font";
import { ReduxProvider } from "@/redux/provider";
import mainPostImg from "../../public/metagraph/post-img.png";
import backupPostImg from "../../public/metagraph/backup-post-img.png";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  metadataBase: new URL("https://produck-feedback-app.vercel.app"),
  title: "Produck Feedback",
  description:
    "Produck feedback is a product feedback app, where users can create, view and edit different posts about feedback they have for a specific product. This app also has many different features like a sort and filter feature, dark mode toggle and the ability to add comments and replies to different posts and many more.",
  openGraph: {
    title: "Produck Feedback",
    description:
      "Produck feedback is a product feedback app, where users can create, view and edit different posts about feedback they have for a specific product. This app also has many different features like a sort and filter feature, dark mode toggle and the ability to add comments and replies to different posts and many more.",
    url: "https://produck-feedback-app.vercel.app",
    siteName: "Produck Feedback",
    images: [
      {
        url: mainPostImg?.src,
        width: 800,
        height: 600,
      },
      {
        url: backupPostImg.src,
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-jost bg-offWhite dark:bg-navy`}>
        <AuthProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
