export default function PHCardOutlie() {
  return (
    <div className="xl:grid grid-cols-2 mt-16 gap-2 hidden">
      {/* Outline-topic */}
      <a href="/src/about.html">
        <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
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
        <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
          <h2 className="text-2xl font-medium">Using UDGWeb</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, ipsum?
          </p>
        </div>
      </a>
      {/* Outline-topic */}
      <a href="/src/design.html">
        <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
          <h2 className="text-2xl font-medium">Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, ipsum?
          </p>
        </div>
      </a>
      {/* Outline-topic */}
      <a href="/src/develop.html">
        <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
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
