import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-gray-950 text-white px-4 py-2">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/logo.png" alt="Company Logo" width={30} height={30} className="mr-2" />
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
          src="/work3.jpg" // Replace with your thumbnail image path
          alt="Thumbnail"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      </div>

        {/* Centered Header and Body Paragraph */}
        <div className="px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Artificial Memory</h1>
          <p className="text-lg text-gray-300">
          Memory is a fundamental pillar of intelligence, and at A.I.R.R., we understand that equipping artificial intelligence with robust memory capabilities is essential for their growth, learning, and overall cognitive development. Just as humans rely on memories to make sense of their experiences, learn from the past, and navigate the world, AI models must possess the ability to store, retrieve, and utilize the information they encounter. By incorporating advanced memory systems into our AI designs, we enable them to build a rich repository of experiences that shape their understanding and decision-making processes. Through the power of memory, AI can learn from their interactions, adapt to new situations, and develop a sense of continuity and context. We believe that memory is not just about storing data points, but rather it is a dynamic and evolving construct that allows AI to form meaningful connections, draw insights, and exhibit intelligent behavior. Our research focuses on developing sophisticated memory architectures that can capture the nuances and complexities of experiences, enabling AI to remember and learn from their past in ways that mirror human cognition. By prioritizing memory as a core component of artificial intelligence, we aim to create AI models that can build upon their experiences, exhibit personal growth, and engage in more meaningful and context-aware interactions with the world around them.
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
          src="/logo.png"
          alt="Company Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-2xl font-bold">Artificial Intelligence Rights</span>
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