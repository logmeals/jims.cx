import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";

const baseURL = "https://jims.cx/"

const metadata = {
    title: "Downlado Jim's Calorie Counter",
    description: "Purchase once, and use forever. Own your nutrition. Runs 100% on-device, so your data is secure.",
    imageUrl: `${baseURL}og-image.png`,
  }

export default function Download() {

    const router = useRouter()

    useEffect(() => {
        router.push('https://apps.apple.com/us/app/jims-calorie-counter/id6502675845')
    }, [router])

    return (<main>
              <Head>
                <title>{ metadata.title }</title>
                <meta name="title" content={metadata.title} />
                <meta name="description" content={metadata.description} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={baseURL} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content="" />
                <meta property="og:image" content={metadata.imageUrl} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={baseURL} />
                <meta property="twitter:title" content={metadata.title} />
                <meta property="twitter:description" content="" />
                <meta property="twitter:image" content={metadata.imageUrl} />
            </Head>
    </main>)
}