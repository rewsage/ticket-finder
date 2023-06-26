import "./_styles/global.scss";
import styles from "./_styles/layout.module.scss";
import { roboto } from "@/assets/fonts";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Metadata } from "next";
import { StoreProvider } from "@/redux/store-provider";

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
                <StoreProvider>
                    <div className={styles.container}>
                        <Header />
                        <div className={styles.content}>{children}</div>
                        <Footer />
                    </div>
                </StoreProvider>
            </body>
        </html>
    );
}
