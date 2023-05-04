/* eslint-disable react/prop-types */

export default function Usage({ children }) {
  return (
    <>
      <h1 className="text-5xl font-medium mb-8">Usage</h1>
      <ul className="list-disc space-y-4 mb-20">{children}</ul>
    </>
  );
}
