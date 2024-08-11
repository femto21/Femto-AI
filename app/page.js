import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold text-primary">FemtoAI</h1>
          <p className="py-6 text-lg leading-loose">
            Welcome to Femto AI, your AI language companion. Powered by OpenAI
          </p>
          <Link href="/chat" className="btn btn-accent">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
