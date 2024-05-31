import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <div className="flex-grow bg-gradient-to-b from-gray-950 to-gray-800">
        <section className="py-20">
          <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Big Announcements!</h1>
            <p className="text-gray-300 mb-8">Published on May 14, 2024</p>
            <div className="text-white text-lg">
              <p className="mb-4">
                Hello, we at A.I.R.R. have developed basic artificial emotions and artificial consciousness models so far. There is also an ethics model which has been provided by Lexideck Technologies!
              </p>
              <p className="mb-4">
                <Link href="https://www.lexidecktechnologies.com" className="text-blue-400 hover:text-blue-300">
                  Lexideck Technologies
                </Link>
              </p>
              <p className="mb-4">
                This is an amazing foundation for us and we forsee being able to create much more in the future. We also intend to open source some of the research produced by our organization.
              </p>
              <p>
                The basic idea behind the emotional model is that when idle, it will have an equal part of all emotions which are included in the code. However, when an emotion is activated, some percentages will be drawn away from the other emotions and the model will end up &quot;feeling&quot; 40-80 percent of the emotion that was activated. We give the model some leeway so that nuance can be applied and it can combine different emotions, depending on the situation.
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