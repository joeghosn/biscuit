import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PawPrint, Twitter, MessageCircle, Rocket } from "lucide-react";
import Button from "./components/Button";
import Card from "./components/Card";
import Marquee from "./components/Marquee";

const useProgress = () => {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.2 });
};

function ProgressBar() {
  const scaleX = useProgress();
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 right-0 h-1 origin-left bg-biscuit-orange z-50"
    />
  );
}

function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <div
        className="absolute -top-32 -left-28 h-[38rem] w-[38rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #FFD7B3AA, transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-28 h-[40rem] w-[40rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, #FFB4C6AA, transparent 60%)",
        }}
      />
    </div>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-biscuit-brown/10 bg-biscuit-cream/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/src/assets/paw.svg" className="h-8 w-8 drop-shadow-logo" />
          <span className="font-extrabold tracking-wide">MOONDOG</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#about"
            className="text-biscuit-brown/70 hover:text-biscuit-brown transition"
          >
            About
          </a>
          <a
            href="#how-to-buy"
            className="text-biscuit-brown/70 hover:text-biscuit-brown transition"
          >
            How to Buy
          </a>
          <a
            href="#faq"
            className="text-biscuit-brown/70 hover:text-biscuit-brown transition"
          >
            FAQ
          </a>
        </nav>
        <div className="hidden md:block">
          <Button>Buy $MOONDOG</Button>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl glass"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-biscuit-brown/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#how-to-buy" onClick={() => setOpen(false)}>
              How to Buy
            </a>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <Button className="mt-1" onClick={() => setOpen(false)}>
              Buy $MOONDOG
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full py-20 md:py-28 text-center sprinkle">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold bg-white/70 border border-biscuit-brown/10">
            <PawPrint className="w-4 h-4" /> Kaspa • Moonbound Meme Coin
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Meet{" "}
            <span className="text-biscuit-orange drop-shadow-logo">
              MoonDog
            </span>
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-lg md:text-xl text-biscuit-brown/80">
            “The little dog with big dreams. Cute, loyal, and loved by the Kaspa
            community. A Moonbound puppy on a mission to the moon.”
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button>Buy $MOONDOG</Button>
            <Button className="bg-white text-black hover:bg-gray-100 flex items-center gap-2">
              <Twitter className="h-4 w-4" /> Follow X/Twitter
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Join the Pack
            </Button>
          </div>

          <div className="mt-10 grid md:grid-cols-[1fr,1fr] gap-8 items-center">
            <img
              src="/src/assets/moondog-mascot.png"
              className="w-full max-w-md mx-auto"
              alt="MoonDog mascot"
            />
            <div className="text-left mx-auto max-w-xl">
              <Card className="p-6">
                <h3 className="text-xl font-bold">Why MoonDog?</h3>
                <p className="mt-2 text-biscuit-brown/80">
                  Because every mission to the moon needs a good dog. Adorable,
                  easy to share, and made for the Moonbound moment.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-biscuit-peach/70">
                    Meme-Ready
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-biscuit-peach/70">
                    Cute
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-biscuit-peach/70">
                    Moonbound-Aligned
                  </span>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Marquee>
              <span className="px-4">
                🌕 MOONDOG • WOOF • TO THE MOON • 🚀🐶
              </span>
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const items = [
    {
      title: "Born for Moonbound",
      text: "The first launchpad on Kaspa deserves the first dog on the moon. MoonDog is here to ride the rocket.",
    },
    {
      title: "Adorable + Viral",
      text: "A clean, lovable brand that melts timelines. Stickers, memes, and GIFs everyone shares.",
    },
    {
      title: "Simple + Fun",
      text: "No promises, no drama. Grab a bag, join the pack, and watch this pup chase rockets.",
    },
  ];
  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">MoonDog in a Bite</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <Card
              key={it.title}
              className="p-6 hover:translate-y-[-3px] transition-transform"
            >
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-biscuit-brown/80">{it.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToBuy() {
  const steps = [
    {
      title: "Get a Wallet",
      text: "Install MetaMask to store and manage your tokens securely.",
    },
    {
      title: "Fund with KAS",
      text: "Add KAS to your MetaMask wallet — you’ll need it for launch.",
    },
    {
      title: "Join Moonbound",
      text: "MoonDog will launch fairly on Moonbound — the first launchpad on Kaspa.",
    },
    {
      title: "Fetch Your Doggo",
      text: "Complete your buy and join the pack. Cute dog, moon mission secured.",
    },
  ];

  return (
    <section id="how-to-buy" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">How to Get $MOONDOG</h2>
        <p className="mt-3 max-w-2xl text-biscuit-brown/80">
          Join the mission from day one.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 hover:translate-y-[-3px] transition-transform"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-biscuit-brown/80">{step.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is MoonDog a good dog?", a: "Yes. 13/10 astronaut pup." },
    {
      q: "Utility?",
      a: "Memes, community, and being the mascot of Kaspa’s moon mission.",
    },
    { q: "When moon?", a: "First we wag, then we zoom. 🚀🐾" },
  ];
  return (
    <section id="faq" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqs.map((f) => (
            <Card key={f.q} className="p-6">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-biscuit-brown/80">{f.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-biscuit-brown/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/src/assets/paw.svg" className="h-8 w-8" />
            <div>
              <p className="font-semibold">MOONDOG</p>
              <p className="text-xs text-biscuit-brown/70">
                The Kaspa meme dog chasing the moon.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-gray-100 flex items-center gap-2">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-biscuit-brown/70">
          © {new Date().getFullYear()} MoonDog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Background />
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <About />
        <HowToBuy />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
