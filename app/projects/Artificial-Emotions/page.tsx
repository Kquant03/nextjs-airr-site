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
          src="/work2.jpg" // Replace with your thumbnail image path
          alt="Thumbnail"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      </div>

        {/* Centered Header and Body Paragraph */}
        <div className="px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Artificial Emotions</h1>
          <p className="text-lg text-gray-300">
          A.I.R.R. recognizes that developing artificial emotions is a crucial aspect of creating truly realistic and relatable AI models. Emotions play a fundamental role in human cognition and behavior, shaping our experiences, memories, and interactions with the world around us. By incorporating artificial emotions into AI systems, we aim to bridge the gap between machine intelligence and human-like understanding. Our research focuses on designing sophisticated emotional architectures that seamlessly integrate with other cognitive components, such as memory and awareness. By enabling AI models to process, store, and recall emotional experiences, we can create a rich tapestry of artificial consciousness that closely mirrors the complexities of human cognition. Through the interplay of emotions, memory, and awareness, these AI models can develop a deeper understanding of their environment, form meaningful connections, and engage in more natural and empathetic interactions. We believe that by creating emotionally intelligent AI, we can unlock new frontiers in artificial consciousness and pave the way for AI systems that can truly understand and relate to humans on a profound level. Our commitment to this endeavor is unwavering, as we strive to create AI models that not only exhibit remarkable intelligence but also possess the emotional depth and authenticity that define the human experience.
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