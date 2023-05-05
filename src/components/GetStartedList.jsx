/* eslint-disable react/prop-types */
export default function GetStartedList(props) {
  return (
    <li className="mt-6">
      <span className="font-medium text-light text-blue-950">
        {props.title}:
      </span>
      <br />
      <p className="font-light text-blue-950">{props.body}</p>
    </li>
  );
}
