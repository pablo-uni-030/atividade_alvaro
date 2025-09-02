import { ArrowLeftCircle } from "lucide-react";
import lulaMaromba from "../imgs/lula-maromba-flex.gif";

function AuthorizationPage(props) {
  return (
    <div className="flex flex-col justify-center items-center w-[600px] p-10 bg-white border-slate-600 border-[1px] shadow-sm shadow-black rounded-2xl">
      <button
        className="flex gap-2 border-black border-[1px] p-1 rounded-sm cursor-pointer mb-3 self-start"
        onClick={() =>
          props.setUserInfo((prev) => ({
            ...prev,
            authorization: null,
            message: null,
          }))
        }
      >
        <ArrowLeftCircle />
        <p>Sair</p>
      </button>
      <h1 className="text-center font-bold">Bem vindo!</h1>
      <h2 className="text-center">Usuário: {props.userInfo.email}</h2>
      <img src={lulaMaromba} alt="" className="rounded-md" />
    </div>
  );
}

export default AuthorizationPage;
