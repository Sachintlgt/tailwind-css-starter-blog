import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      {/* <AuthorLayout content={mainContent}> */}
      <div className="min-h-screen bg-gray-100 px-5 py-10 md:px-20">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">About ZENKINNS</h1>

          <p className="mb-4 text-gray-700">
            <strong>Meaning of Zenkinns:</strong> ZEN means ‘A state of well-being’ and KINNS means
            ‘People’. We at Zenkinns are in the business of spreading happiness with every bite
            among people.
          </p>

          <p className="mb-4 text-gray-700">
            We are Food Producers, who take pride in every dish we make, aiming to provide our
            patrons with ‘Happiness Har Din’. Our core competency lies in manufacturing vegetarian
            and non-vegetarian food products using state-of-the-art packaging formats such as cans,
            retort pouches, and microwaveable trays.
          </p>

          <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mb-4 text-gray-700">
            To CREATE A FOOD CONSCIOUS SOCIETY – one that is aware of the SOURCE STORY of their food
            and knows the REAL NUTRITION value of its contents.
          </p>

          <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mb-4 text-gray-700">
            To put a SMILE ON EVERY FACE that tries our product. We achieve this by INCESSANTLY
            INNOVATING AND INVENTING food offerings through different ingredients, techniques, and
            cuisines.
          </p>

          <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">About Management</h2>
          <h3 className="text-xl font-semibold text-gray-700">Rakesh Bhutani, Founder</h3>
          <p className="mb-4 text-gray-700">
            Rakesh Bhutani carries forward the family’s food manufacturing legacy, inherited from
            his visionary father, Late Shri. ML Bhutani. His dedication and perseverance have led to
            expansion into the ready-to-eat (RTE) market.
          </p>

          <h3 className="text-xl font-semibold text-gray-700">Hitesh Bhutani, Export Management</h3>
          <p className="mb-4 text-gray-700">
            A B.Com graduate from IIFT, New Delhi, Hitesh Bhutani oversees managerial and export
            operations, ensuring growth through quality control and team leadership.
          </p>

          <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Founder's Message</h2>
          <p className="mb-4 text-gray-700">
            “There are no shortcuts in life, especially when it comes to creating something
            extraordinary. At Zenkinns, we treat our customers like family and ensure high-quality,
            delicious, and nutritious food.”
          </p>

          <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-700">
            <strong>Address:</strong> ZENKINNS FOOD PRODUCTS, 1-J EPIP, PHASE 1, JHARMAJRI, BADDI,
            DISTT. SOLAN, H.P. 174103
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> 01795-271127
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> zenkinns@gmail.com
          </p>
        </div>
      </div>

      {/* </AuthorLayout> */}
    </>
  )
}
