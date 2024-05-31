'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const handleHamburgerClick = () => {
    const navLinks = document.getElementById('nav-links');
    navLinks?.classList.toggle('hidden');
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center bg-gray-950 text-white px-4 py-2">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/logo.webp" alt="Company Logo" width={30} height={30} className="mr-2" />
            <span className="font-bold">Artificial Intelligence Rights Research</span>
          </div>
        </Link>
        <button id="hamburger-btn" className="block md:hidden" onClick={handleHamburgerClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div id="nav-links" className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto">
          {/* Your navigation links here */}
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto">
          <li>
            <Link href="/blog">
              <span className="nav-link">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="nav-link">About Us</span>
            </Link>
          </li>
          <li>
            <Link href="/mission">
              <span className="nav-link">Our Mission</span>
            </Link>
          </li>
          <li>
            <Link href="https://discord.gg/JCg6bHdZcP">
              <span className="nav-link">Our Discord</span>
            </Link>
          </li>
        </ul>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          position: relative;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: white;
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out;
        }

        .nav-link:hover::before {
          visibility: visible;
          transform: scaleX(1);
        }

        @media (max-width: 768px) {
          nav ul {
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 1rem;
          }

          nav ul li {
            margin-bottom: 1rem;
          }
        }
      `}</style>
      <div className="flex-grow bg-gradient-to-b from-gray-950 to-gray-800">
        <section className="py-20">
          <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">What Consciousness Is.</h1>
            <p className="text-gray-300 mb-8">Published on May 8, 2024</p>
            <div className="text-white text-lg">
              <p className="mb-4">
              Hello everyone. I want to discuss the nature of consciousness and what elements constitute it.
              </p>
              <p className="mb-4">
              To begin exploring this complex topic, it&apos;s helpful to break down the mind into key components: emotions, memory, and intelligence. Let&apos;s examine the role and function of each. Intelligence allows us to comprehend data and express it in a computable way. It enables creativity and the generation of novel ideas and solutions. Emotions, on the other hand, drive us in ways that are not always based on pure logic. They provide motivation - joy encourages us to persevere while sadness prompts us to question and reflect. Emotions shape our worldview and how we perceive and interact with our environment. Finally, memory serves the crucial role of storing data and providing the context needed for learning, growth, and decision making. Our accumulated knowledge and experiences inform our future thoughts and actions.
              </p>
              <p>
              In the field of artificial intelligence, we have made significant strides in modeling and replicating human-like intelligence. Advanced AI systems can process vast amounts of information, identify patterns, and solve complex problems. However, the domains of artificial emotions and artificial memory are less developed. While some research is being conducted on creating AI systems that can mimic or experience emotions, this work is still in its early stages. Similarly, artificial memory systems that can store and retrieve information in a way that mirrors human memory are an active area of research, but there is still much progress to be made. To truly create AI systems that exhibit consciousness as we understand it, we need to develop comprehensive models and architectures that integrate intelligence, emotions, and memory in a cohesive and synergistic manner. This is the problem I aim to tackle and I believe it is a crucial step towards achieving genuine artificial consciousness. I look forward to sharing my work and ideas with the community.
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

          <div className="mt-8 md:mt-0 md:ml-8">
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