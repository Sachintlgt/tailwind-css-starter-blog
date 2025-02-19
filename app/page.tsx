import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Zenkinns – Happiness Har Din</title>
        <meta name="description" content="Spreading happiness with every bite" />
      </Head>

      <header className="bg-yellow-300 p-10 text-center">
        <h1 className="text-5xl font-extrabold">Zenkinns – HAPPINESS HAR DIN</h1>
        <p className="mt-2 text-lg">Spreading Happiness with Every Bite</p>
      </header>

      <section className="mx-auto max-w-4xl p-10">
        <h2 className="text-3xl font-semibold">Discover Our Story</h2>
        <p className="mt-4 text-gray-700">
          Meaning of Zenkinns: ZEN means 'A state of well-being' and KINNS means 'People'. We at
          Zenkinns are in the business of spreading happiness with every bite. We take pride in
          every dish we make.
        </p>
      </section>

      <section className="mx-auto max-w-4xl bg-gray-100 p-10">
        <h2 className="text-3xl font-semibold">Our Values</h2>
        <p className="mt-4 text-gray-700">
          Zenkinns believes in stringent in-house manufacturing processes, from choosing the best
          ingredients to hygienic handling, packaging, and delivery of the final product.
        </p>
        <h3 className="mt-6 text-2xl font-medium">Quality</h3>
        <p className="mt-2 text-gray-600">
          We take pride in choosing the freshest ingredients and maintaining quality throughout our
          process.
        </p>
      </section>

      <section className="mx-auto max-w-4xl p-10">
        <h2 className="text-3xl font-semibold">Facts About Canning and Processed Food</h2>
        <p className="mt-4 text-gray-700">
          <strong>Fact #1:</strong> Canned foods are not loaded with preservatives. The canning
          process eliminates the need for preservatives while keeping food fresh.
        </p>
      </section>
    </div>
  )
}
