// pages/test-colors.js
export default function TestColors() {
  return (
    <div className="min-h-screen bg-dark-black text-silver-very-light p-6 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-primary-light">
        🎨 Custom Color Palette Test
      </h1>

      {/* Primary Colors */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-primary">Primary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <ColorBox name="very-dark" colorClass="bg-primary-very-dark" />
          <ColorBox name="dark" colorClass="bg-primary-dark" />
          <ColorBox name="DEFAULT" colorClass="bg-primary" />
          <ColorBox
            name="light"
            colorClass="bg-primary-light"
            textClass="text-gray-900"
          />
          <ColorBox
            name="very-light"
            colorClass="bg-primary-very-light"
            textClass="text-gray-900"
          />
        </div>
      </section>

      {/* Secondary Colors */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-secondary">Secondary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <ColorBox name="very-dark" colorClass="bg-secondary-very-dark" />
          <ColorBox name="dark" colorClass="bg-secondary-dark" />
          <ColorBox name="DEFAULT" colorClass="bg-secondary" />
          <ColorBox
            name="light"
            colorClass="bg-secondary-light"
            textClass="text-gray-900"
          />
          <ColorBox
            name="very-light"
            colorClass="bg-secondary-very-light"
            textClass="text-gray-900"
          />
        </div>
      </section>

      {/* Silver (Grayscale) */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-silver">
          Silver / Gray
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <ColorBox name="very-dark" colorClass="bg-silver-very-dark" />
          <ColorBox name="dark" colorClass="bg-silver-dark" />
          <ColorBox name="DEFAULT" colorClass="bg-silver" />
          <ColorBox name="light" colorClass="bg-silver-light" />
          <ColorBox name="very-light" colorClass="bg-silver-very-light" />
        </div>
      </section>

      {/* Black Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Blacks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ColorBox name="light-black" colorClass="bg-light-black" />
          <ColorBox name="dark-black" colorClass="bg-dark-black" />
        </div>
      </section>

      {/* Border & Text Test */}
      <section className="mt-12 p-6 border border-silver-dark rounded-lg">
        <h3 className="text-lg font-medium mb-2">Border & Text Test</h3>
        <p className="text-silver mb-2">
          This uses{" "}
          <code className="bg-silver-dark px-1 rounded">text-silver</code>
        </p>
        <p className="text-silver-light mb-2">
          This uses{" "}
          <code className="bg-silver-dark px-1 rounded">text-silver-light</code>
        </p>
        <p className="text-primary-light">
          This uses{" "}
          <code className="bg-silver-dark px-1 rounded">
            text-primary-light
          </code>
        </p>
      </section>
    </div>
  );
}

// Reusable Color Box Component
function ColorBox({ name, colorClass, textClass = "text-white" }) {
  return (
    <div
      className={`${colorClass} ${textClass} p-4 rounded border border-silver-dark flex flex-col items-center justify-center`}
    >
      <span className="text-xs font-mono text-center">{name}</span>
    </div>
  );
}
