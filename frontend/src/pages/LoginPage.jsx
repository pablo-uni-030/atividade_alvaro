import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";


function LoginPage(props) {
  const [emailInputConfig, setEmailInputConfig] = useState({
    isSelected: false,
    containsText: false,
  });
  const [passwordInputConfig, setPasswordInputConfig] = useState({
    isSelected: false,
    containsText: false,
    showPassword: false,
  });

  return (
      <form
        onSubmit={(form) =>
          props.validateUser(
            form,
            emailInputConfig.containsText,
            passwordInputConfig.containsText
          )
        }
        action=""
        className="flex flex-col justify-center w-[500px] p-10 bg-white border-slate-600 border-[1px] shadow-sm shadow-black rounded-2xl gap-10"
      >
        <h1 className="text-center font-bold text-[16pt]">Entrar na conta</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start relative">
            <label
              htmlFor="userEmail"
              className={`absolute translate-x-[10px] -translate-y-1/2 cursor-pointer transition duration-200 font-bold bg-white pr-2 pl-2 ${
                emailInputConfig.isSelected || emailInputConfig.containsText
                  ? "text-slate-500"
                  : "  text-slate-300 translate-y-[65%]"
              } `}
            >
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              className={`border-[2px] border-slate-300 rounded text-[14pt] p-3 focus:border-slate-500 transition duration-200 cursor-pointer w-full ${
                emailInputConfig.containsText && "border-slate-500"
              }`}
              onFocus={() =>
                setEmailInputConfig((prev) => ({ ...prev, isSelected: true }))
              }
              onBlur={() =>
                setEmailInputConfig((prev) => ({ ...prev, isSelected: false }))
              }
              onChange={(e) =>
                setEmailInputConfig((prev) => ({
                  ...prev,
                  containsText: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col relative">
            <label
              htmlFor="userPassword"
              className={`absolute translate-x-[10px] -translate-y-1/2 cursor-pointer transition duration-200 font-bold bg-white pr-2 pl-2 ${
                passwordInputConfig.isSelected ||
                passwordInputConfig.containsText
                  ? "text-slate-500"
                  : "  text-slate-300 translate-y-[65%]"
              } `}
            >
              Senha
            </label>
            <input
              type={passwordInputConfig.showPassword ? "text" : "password"}
              id="userPassword"
              className={`border-[2px] border-slate-300 rounded text-[14pt] p-3 focus:border-slate-500 transition duration-200 cursor-pointer w-full ${
                passwordInputConfig.containsText && "border-slate-500"
              }`}
              onFocus={() =>
                setPasswordInputConfig((prev) => ({
                  ...prev,
                  isSelected: true,
                }))
              }
              onBlur={() =>
                setPasswordInputConfig((prev) => ({
                  ...prev,
                  isSelected: false,
                }))
              }
              onChange={(e) =>
                setPasswordInputConfig((prev) => ({
                  ...prev,
                  containsText: e.target.value,
                }))
              }
            />
            <span
              onClick={() =>
                setPasswordInputConfig((prev) => ({
                  ...prev,
                  showPassword: !passwordInputConfig.showPassword,
                }))
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {passwordInputConfig.showPassword ? (
                <EyeOff
                  className={`${
                    passwordInputConfig.containsText
                      ? "text-slate-500"
                      : "text-slate-300"
                  } hover:text-slate-500 transition duration-200`}
                />
              ) : (
                <Eye
                  className={`${
                    passwordInputConfig.containsText
                      ? "text-slate-500"
                      : "text-slate-300"
                  } hover:text-slate-500 transition duration-200`}
                />
              )}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className={`cursor-pointer border-[2px] border-blue-300 p-3 rounded-lg font-bold hover:bg-blue-300 hover:text-white text-blue-300 transition duration-200`}
          disabled={props.userInfo.authorization == "loading" ? true : false}
        >
          {props.userInfo.authorization == "loading" ? "Entrando..." : "Entrar"}
        </button>

        <h2 className="italic text-slate-700 text-center">Feito por: João Lucas & Pablo</h2>
      </form>
  )
}

export default LoginPage;