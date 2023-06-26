/* eslint-disable react/prop-types */
const OutlineTopicSmall = ({ href, title, body }) => {
  return (
    <a href={href}>
      <div className="relative mb-2 rounded-2xl bg-blue-50 px-5 py-8 transition-all hover:bottom-1">
        <h2 className="text-lg font-medium min-[550px]:text-2xl">{title}</h2>
        <p className="text-sm min-[550px]:text-base">{body}</p>
      </div>
    </a>
  );
};

export default OutlineTopicSmall;
