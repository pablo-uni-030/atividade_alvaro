import lulaMaromba from "../imgs/lula-maromba-flex.gif"

function AuthorizationPage(props) {

    return (
        <div className="flex flex-col justify-center w-[500px] p-10 bg-white border-slate-600 border-[1px] shadow-sm shadow-black rounded-2xl gap-5">
            <h1 className="text-center font-bold">Bem vindo!</h1>
            <h2 className="text-center">Usuário: {props.userInfo.email}</h2>
            <img src={lulaMaromba} alt="" />
        </div>
    )
}

export default AuthorizationPage;