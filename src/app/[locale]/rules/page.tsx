import { Navbar } from "@/components/shared";
import { Footer } from "@/components/footer";
import { RulesHero, Categories, PointSystem } from "@/components/rules";
import { routing } from "@/i18n/routing";
import { StructureDetailed } from "@/components/structure";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RulesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    await params; // Ensure params are awaited for Next.js 15+

    return (
        <div className="min-h-screen bg-[#F3F5F7]">
            <Navbar />
            <main className="relative mx-auto flex max-w-[1440px] flex-col overflow-hidden pt-24">
                <RulesHero />
                <Categories />
                <StructureDetailed />
                <PointSystem />
            </main>
            <Footer />
        </div>
    );
}
