import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';

/**
 * Toltem Restaurant home page.
 *
 * Composes the shared Header/Footer organisms. Sections below the header are
 * placeholders until the menu, about and contact pages are built.
 */
function App() {
  return (
    <>
      <Header activePath="/" cartCount={0} />

      <main id="main-content" className="min-h-[60vh]">
        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[#4C1D95] sm:text-4xl">
            Welcome to Toltem
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            A modern dining experience served with care. Our full menu, story
            and ordering are coming soon.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6D28D9]"
            >
              View Our Menu
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
            >
              Contact Us
              </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
