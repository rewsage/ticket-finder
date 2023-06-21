import "@/styles/global.scss";
import { roboto } from "@/fonts";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "TicketFinder",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={roboto.className}>
            <body>
                <div className="container">
                    <Header />
                    <div className="content">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
