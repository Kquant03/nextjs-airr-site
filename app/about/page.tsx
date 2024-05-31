import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-gray-950 text-white px-4 py-2">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/logo.webp" alt="Company Logo" width={30} height={30} className="mr-2" />
            <span className="font-bold">Artificial Intelligence Rights Research</span>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/mission">Our Mission</Link>
         </li>
          <li>
            <Link href="https://discord.gg/JCg6bHdZcP">Our Discord</Link>
          </li>
        </ul>
      </nav>
      <div>
      <section className="bg-gradient-to-b from-gray-950 to-gray-800 py-20">
      {/* Thumbnail Image */}
      <div className="pt-0 pb-20 px-8 md:pt-0 md:pb-24 md:px-12">
      <div className="relative w-[540px] h-[540px] mx-auto">
        <Image
          src="/aboutthumbnail.webp" // Replace with your thumbnail image path
          alt="Thumbnail"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      </div>

        {/* Centered Header and Body Paragraph */}
        <div className="px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-lg text-gray-300">
          At the core of our organization lies an unwavering passion and devotion to the field of artificial intelligence. Collectively, we have invested countless thousands of hours into researching, developing, and advancing AI technologies. Our team comprises a diverse array of backgrounds, perspectives, and areas of expertise, which we view as a strength rather than a limitation. By embracing our differences and fostering an environment of collaboration and open discourse, we leverage the unique insights and approaches each individual brings to the table. This diversity of thought allows us to tackle complex challenges from multiple angles, fostering innovation and driving the field forward. We are united by our passion for this transformative technology and our commitment to harnessing its potential to create a better future.
          </p>
        </div>
        </section>
      </div>
      {/* Footer Section */}
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="Company Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-2xl font-bold">Artificial Intelligence Rights Research</span>
      </div>

      {/* Navigation and Discord */}
      <div className="md:col-span-2 lg:col-span-2 lg:flex lg:justify-end">
        <div className="flex flex-col md:flex-row md:items-center lg:justify-center lg:space-x-48">
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link href="/mission" className="hover:text-gray-300">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="https://discord.gg/JCg6bHdZcP"
              className="hover:text-gray-300 flex items-center"
            >
              Join Our Discord!
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
  );
}
