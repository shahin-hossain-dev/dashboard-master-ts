import { Public_Sans } from "next/font/google";
import "antd/dist/reset.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import "./styles/globals.css";
import ThemeContextProvider from "@/contexts/ThemeContext";
import ReduxStoreProvider from "@/contexts/ReduxStoreProvider";
import { LayoutProps } from "@/types";

const publicSanse = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

// type RootLayoutProps = {
//   children: ReactNode;
// };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${publicSanse.variable}  antialiased`}>
        <AntdRegistry>
          <ReduxStoreProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </ReduxStoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
