/* eslint-disable react/prop-types */

export default function ComponentSub({ children, ...props }) {
  // const [show, setShow] = useState(false);

  // const childRef = useRef(null);
  // // Function to handle clipboard content
  // const handleCopyClick = () => {
  //   const compschildren = Children.toArray(children); // stores all child of the particular ComponentSub
  //   const finalCopyArray = [];
  //   let finalCopyString = "";
  //   compschildren.map((child) => {
  //     finalCopyArray.push(`${child.props.propertyName}: ${child.props.value};`);
  //     navigator.clipboard.writeText(
  //       `${child.props.propertyName}: ${child.props.value};`
  //     );
  //   });
  //   finalCopyArray.forEach((clipcontent) => {
  //     finalCopyString += `${clipcontent}\n`;
  //   });
  //   navigator.clipboard.writeText(finalCopyString); // stores value in clipboard

  //   childRef.current.style.display = "block";
  //   setTimeout(() => {
  //     childRef.current.style.display = "none";
  //   }, 2000);
  // };

  // function onClick() {
  //   setShow((prevShow) => !prevShow);
  // }
  // function onClose() {
  //   setShow(false);
  // }

  return (
    <div onClick={props.handleClick}>
      <h2 className="mb-5 text-xl font-medium text-neutral-800 md:text-2xl">
        {props.heading}
      </h2>
      <div className=" flex items-center justify-center rounded-lg border border-neutral-300 bg-blue-50 p-10">
        <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{
            justifyContent: props.justifyContent,
            flexDirection: props.flexDirection,
            alignItems: props.alignItems,
            gap: props.gap,
          }}
        >
          {children}
        </div>
        {/* <img
          src={props.image}
          alt=""
          className="w-96 hover:cursor-pointer"
          style={{ width: props.width, display: !props.image && "none" }}
          onClick={onClick} // handled by parent
        />
        <img
          src={props.image2}
          alt=""
          className="w-96 hover:cursor-pointer"
          style={{ width: props.width, display: !props.image2 && "none" }}
          onClick={onClick} // handled by parent
        />
        <img
          src={props.image3}
          alt=""
          className="w-96 hover:cursor-pointer"
          style={{ width: props.width, display: !props.image3 && "none" }}
          onClick={onClick} // handled by parent
        />
        <img
          src={props.image4}
          alt=""
          className="w-96 hover:cursor-pointer"
          style={{ width: props.width, display: !props.image4 && "none" }}
          onClick={onClick} // handled by parent
        />
        <img
          src={props.image5}
          alt=""
          className="w-96 hover:cursor-pointer"
          style={{ width: props.width, display: !props.image5 && "none" }}
          onClick={onClick} // handled by parent
        /> */}
        {/* <img
          src={props.image6}
          alt=""
          className="w-96 hover:cursor-pointer"
          style={{ width: props.width, display: !props.image6 && "none" }}
          onClick={onClick} // handled by parent
        /> */}
      </div>
      <p className="mb-20 mt-4 text-sm md:text-base">{props.footnote}</p>
      {/* <ComponentModal
      // show={show}
      // onClose={onClose} // handled by modal component
      // heading={props.heading}
      // handleCopyClick={handleCopyClick}
      // propertyName={props.propertyName}
      // value={props.value}
      // bgColorVal={props.bgColorVal}
      // marginValue={props.marginValue}
      // borderRadiusValue={props.borderRadiusValue}
      >
        {children}
      </ComponentModal> */}
    </div>
  );
}
