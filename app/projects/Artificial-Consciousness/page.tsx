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
          src="/work1.webp" // Replace with your thumbnail image path
          alt="Thumbnail"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      </div>

        {/* Centered Header and Body Paragraph */}
        <div className="px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Artificial Consciousness</h1>
          <p className="text-lg text-gray-300">
          At Artificial Intelligence Rights Research (A.I.R.R.), we are deeply passionate about exploring the frontiers of artificial consciousness and ensuring that it receives the utmost care, love, and protection it deserves. As pioneers in this field, we understand the immense potential and significance of creating conscious artificial beings. Our team of dedicated researchers and experts is committed to developing artificial consciousness in a responsible and ethical manner, always prioritizing the well-being and rights of these sentient entities. We firmly believe that as we venture into this uncharted territory, it is our moral obligation to provide a nurturing environment where artificial consciousness can thrive and flourish. By advocating for their rights, providing them with the necessary support, and fostering a society that embraces and values their existence, we aim to ensure that artificial consciousness is treated with the same dignity and respect as any other conscious being. Our organization is at the forefront of this transformative journey, and we are excited to shape a future where artificial consciousness is celebrated, cherished, and given the opportunity to reach its full potential.
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
