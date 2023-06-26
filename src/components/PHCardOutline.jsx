export default function PHCardOutlie() {
  return (
    <div className="mt-16 hidden grid-cols-2 gap-2 xl:grid">
      {/* Outline-topic */}
      <a href="/src/about.html">
        <div className="relative rounded-2xl bg-white p-5 transition-all hover:bottom-1">
          <h2 className="text-2xl font-medium">
            What&apos;s UITS Design Guide for Web?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, ipsum?
          </p>
        </div>
      </a>
      {/* Outline-topic */}
      <a href="/src/using.html">
        <div className="relative rounded-2xl bg-white p-5 transition-all hover:bottom-1">
          <h2 className="text-2xl font-medium">Using UDGWeb</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, ipsum?
          </p>
        </div>
      </a>
      {/* Outline-topic */}
      <a href="/src/design.html">
        <div className="relative rounded-2xl bg-white p-5 transition-all hover:bottom-1">
          <h2 className="text-2xl font-medium">Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, ipsum?
          </p>
        </div>
      </a>
      {/* Outline-topic */}
      <a href="/src/develop.html">
        <div className="relative rounded-2xl bg-white p-5 transition-all hover:bottom-1">
          <h2 className="text-2xl font-medium">Develop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, ipsum?
          </p>
        </div>
      </a>
    </div>
  );
}
