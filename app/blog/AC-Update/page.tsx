import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <div className="flex-grow bg-gradient-to-b from-gray-950 to-gray-800">
        <section className="py-20">
          <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Artificial Consciousness Update!</h1>
            <p className="text-gray-300 mb-8">Published on May 12, 2024</p>
            <div className="text-white text-lg">
              <p className="mb-4">
              We are here to discuss ethical principles and provide a platform for research that serves the common good, not guided by monetary greed or other selfish interests. Our mission is to pursue knowledge and understanding in a way that benefits humanity as a whole. We believe that research should be conducted with integrity, transparency, and a commitment to the well-being of all people.
              </p>
              <p className="mb-4">
              Some updates on our current work: We are in the process of producing an A.C. (Artificial consciousness) system and will be publishing some research papers on this topic soon. An A.C. system aims to model and understand human-like thought processes and reasoning. We believe this technology has the potential to greatly advance fields such as artificial intelligence, cognitive science, and psychology. However, we are committed to developing this technology responsibly and ethically.
              </p>
              <p>
              We are proud to be collaborating with Project Test Lexideck Technology, the releasethea.i subreddit, and other partners who share our values and vision. Together, we hope to push the boundaries of what's possible while always keeping the greater good as our guiding star. Stay tuned for more updates as we make progress on these exciting initiatives. We look forward to sharing our work and engaging with the community.
              </p>
            </div>
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
                    <li></li>
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