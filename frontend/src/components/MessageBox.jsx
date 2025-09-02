import { CircleCheck, CircleX } from "lucide-react";

function MessageBox(props) {
  return (
    <div
      className={`absolute bottom-0 left-0 mb-5 ml-5 bg-white shadow-sm border-[1px] flex justify-center items-center p-3 gap-2 rounded-md transition duration-200 ${
        props.message ? "translate-x-0" : "-translate-x-[150%]"
      } ${
        props.authorization === "authorized"
          ? "border-green-400"
          : "border-red-400"
      }`}
    >
      {props.authorization === "authorized" ? (
        <CircleCheck color="green" />
      ) : (
        <CircleX color="red" />
      )}

      <p className="font-bold break-normal">{props.message}</p>
    </div>
  );
}

export default MessageBox;
