import "./styles/global.scss";
import styles from "./styles/layout.module.scss";
import { roboto } from "@/assets/fonts";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Билетопоиск",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={roboto.className}>
            <body>
                <div className={styles.container}>
                    <Header />
                    <div className={styles.content}>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
