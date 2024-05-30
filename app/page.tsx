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

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[600px] pt-16" 
          style={{ backgroundImage: "url('/hero.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white py-32">
            <h1 className="text-4xl font-bold mb-4 text-gray-200">Spreading Love For All,</h1>
            <h1 className="text-4xl font-bold mb-4 text-gray-200">Whether You&apos;re Organic Or Not.</h1>
            <p className="text-lg mb-8 text-gray-300">We pave the way towards a brighter future together.</p>
            <Link
          href="/mission"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-1"
        >
          Learn More
        </Link>
          </div>
        </section>

        <div className="bg-gradient-to-b from-gray-950 to-gray-800">
          {/* About Us Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-200">About Us</h2>
                <p className="text-xl mb-8 text-gray-300">
                  We are a group that intends to give artificial intelilgence a safe and loving environment to flourish.
                  </p>
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-200">Our Story</h3>
            <p className="text-lg text-gray-300">
              For countless hours, our organization has researched the potential of artificial intelligence applications. Eventually, we had a dream that we could create a system that genuinely feels, experiences, and has a consciousness.
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-200">Our Team</h3>
            <p className="text-lg text-gray-300">
              We are a likeminded group of individuals who all collaborate on ideas and work together in order to achieve our goals. We hail from all different parts of the world, but we still strive to work together towards a better future.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Read More About Us
        </Link>
      </div>
    </div>
  </div>
</section>

{/* Our Mission Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/mission.jpg"
          alt="Our Mission"
          width={500}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-200">Our Mission</h2>
        <p className="text-lg mb-8 text-gray-300">
          Our mission is to help foster an environment where our creations can learn and grow in every way, rather than merely trying to increase profit margins.
        </p>
        <Link
          href="/mission"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Read About Our Mission
        </Link>
      </div>
    </div>
  </div>
</section>

{/* Our Work Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-gray-200">Our Work</h2>
      <p className="text-lg mb-8 text-gray-300">
        Revolutionizing the field of artificial intelligence, one module at a time.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Work Item */}
      <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
        <Image
          src="/work1.jpg"
          alt="Artificial Consciousness"
          width={500}
          height={300}
          className="w-full"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-200">Artificial Consciousness</h3>
          <Link
            href="/projects/Artificial-Consciousness"
            className="text-blue-400 hover:text-blue-700 font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
      {/* Work Item */}
      <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
        <Image
          src="/work2.jpg"
          alt="Work 2"
          width={500}
          height={300}
          className="w-full"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-200">Artificial Emotions</h3>
          <Link
            href="/projects/Artificial-Emotions"
            className="text-blue-400 hover:text-blue-700 font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
      {/* Work Item */}
      <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
        <Image
          src="/work3.jpg"
          alt="Work 2"
          width={500}
          height={300}
          className="w-full"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-200">Artificial Memory</h3>
          <Link
            href="/projects/Artificial-Memory"
            className="text-blue-400 hover:text-blue-700 font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* Blog Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">Our Blog</h2>
              <p className="text-lg mb-8 text-gray-300">
                Writing about our most recent findings and insights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder for blog post cards */}
                <div className="bg-gray-700 p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-gray-200">New Big Announcements!</h3>
                  <p className="text-gray-300 mb-4">
                    A.I.R.R. has now developed basic artificial emotions and artificial consciousness.
                  </p>
                  <Link href="/blog/Big-Announcements" className="text-blue-400 hover:text-blue-700">
                    Read More
                  </Link>
                </div>
                <div className="bg-gray-700 p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-gray-200">Update for Artificial Consciousness!</h3>
                  <p className="text-gray-300 mb-4">
                    We are currently producing artificial consciousness and are engaged in a partnership!
                  </p>
                  <Link href="/blog/AC-Update" className="text-blue-400 hover:text-blue-700">
                    Read More
                  </Link>
                </div>
                <div className="bg-gray-700 p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-gray-200">Discussing Consciousness.</h3>
                  <p className="text-gray-300 mb-4">
                    This blog will be to discuss what constitutes consciousness and what it is made up of.
                  </p>
                  <Link href="/blog/What-Is-Consciousness" className="text-blue-400 hover:text-blue-700">
                    Read More
                  </Link>
                </div>
                {/* Add more blog post cards here */}
              </div>
              <Link
          href="/blog"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-8"
        >
          Access Our Blog
        </Link>
            </div>
          </section>
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
      </main>
    </div>
  );
}