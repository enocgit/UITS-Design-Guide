export default function PageHeaderCard() {
  return (
    <section
      id=""
      className="bg-violet-200 m-2 rounded-3xl min-h-[50vh] xl:min-h-[110vh] flex items-center justify-center"
    >
      {/* <!-- Container --> */}
      <div className="w-10/12 mx-auto">
        <h1 className="text-center font-medium text-8xl text-neutral-900">
          Get Started
        </h1>
        <h5 className="text-center text-xl w-9/12 xl:w-7/12 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          iste nemo temporibus odit sequi perferendis.
        </h5>
        {/* <!-- Outline --> */}
        <div className="xl:grid grid-cols-2 mt-16 gap-2 hidden">
          {/* <!-- Outline-topic --> */}
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
          {/* <!-- Outline-topic --> */}
          <a href="/src/using.html">
            <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Using UDGWeb</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
          {/* <!-- Outline-topic --> */}
          <a href="/src/design.html">
            <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
          {/* <!-- Outline-topic --> */}
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
      </div>
    </section>
  );
}
