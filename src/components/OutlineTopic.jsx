/* eslint-disable react/prop-types */
const OutlineTopic = ({ href, title, body }) => {
  return (
    <a href={href}>
      <div className="bg-blue-50 p-5 rounded-2xl relative hover:bottom-1 transition-all ">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p>{body}</p>
      </div>
    </a>
  );
};

export default OutlineTopic;
