import { title } from '@/components/primitives'
import ProductCard from '@/components/productCard'

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="max-w-xl text-center justify-center">
                <span className={title()}>Make&nbsp;</span>
                <span className={title({ color: 'violet' })}>
                    beautiful&nbsp;
                </span>
                <br />
                <span className={title()}>websites</span>
            </div>
            <div className="flex gap-3">
                <ProductCard />
            </div>
        </section>
    )
}
