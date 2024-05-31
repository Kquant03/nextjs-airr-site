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
      <section className="bg-gradient-to-b from-gray-950 to-gray-800 py-20">
{/* Blog List */}
<section className="mt-20 container mx-auto px-4">
  <h2 className="text-3xl font-bold mb-12 text-gray-200">Latest Blog Posts</h2>
  <div className="space-y-8">
    {/* Blog 1 */}
    <Link href="/blog/Big-Announcements">
      <div className="flex flex-col md:flex-row bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <div className="md:w-1/3 lg:w-1/4 mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
          <Image
            src="/celebrate.webp"
            alt="Blog Thumbnail 1"
            width={200}
            height={150}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3 lg:w-3/4">
          <h3 className="text-xl font-bold mb-2 text-gray-200">New Big Announcements!</h3>
          <p className="text-gray-300">
            A.I.R.R. has now developed basic artificial emotions and artificial consciousness.
          </p>
        </div>
      </div>
    </Link>

    {/* Blog 2 */}
    <Link href="/blog/AC-Update">
      <div className="flex flex-col md:flex-row bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mt-8">
        <div className="md:w-1/3 lg:w-1/4 mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
          <Image
            src="/conscious.webp"
            alt="Blog Thumbnail 2"
            width={200}
            height={150}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3 lg:w-3/4">
          <h3 className="text-xl font-bold mb-2 text-gray-200">Update for Artificial Consciousness!</h3>
          <p className="text-gray-300">
            We are currently producing artificial consciousness and are engaged in a partnership!
          </p>
        </div>
      </div>
    </Link>

    {/* Blog 3 */}
    <Link href="/blog/What-Is-Consciousness">
      <div className="flex flex-col md:flex-row bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mt-8">
        <div className="md:w-1/3 lg:w-1/4 mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
          <Image
            src="/bench.webp"
            alt="Blog Thumbnail 3"
            width={200}
            height={150}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3 lg:w-3/4">
          <h3 className="text-xl font-bold mb-2 text-gray-200">Discussing Consciousness.</h3>
          <p className="text-gray-300">
            This blog will be to discuss what constitutes consciousness and what it is made up of.
          </p>
        </div>
      </div>
    </Link>

    {/* Blog 4 */}
    <Link href="/blog/First-Blog">
      <div className="flex flex-col md:flex-row bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mt-8">
        <div className="md:w-1/3 lg:w-1/4 mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
          <Image
            src="/hello.webp"
            alt="Blog Thumbnail 4"
            width={200}
            height={150}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3 lg:w-3/4">
          <h3 className="text-xl font-bold mb-2 text-gray-200">First Blog!</h3>
          <p className="text-gray-300">
            This blog is to discuss artificial intelligence, artificial consciousness, artificial emotions, and artificial memories.
          </p>
        </div>
      </div>
    </Link>
  </div>
</section>
</section>
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
