import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import MessageBox from "./components/MessageBox";

function App() {
  const [userInfo, setUserInfo] = useState({
    email: null,
    authorization: null,
    message: "",
  });

  const port = 3000;

  async function validateUser(form, email, password) {
    form.preventDefault();

    setUserInfo((prev) => ({ ...prev, email: email }));
    setUserInfo((prev) => ({ ...prev, authorization: "loading" }));
    setUserInfo((prev) => ({ ...prev, message: "" }));

    try {
      const response = await fetch(`http://localhost:${port}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status !== 200) {
        console.log("Erro na requisição: " + response.status);
        setUserInfo((prev) => ({
          ...prev,
          authorization: null,
          message: "Ocorreu um erro ao tentar conectar-se ao servidor.",
        }));
        window.alert(message);
        return; // Retorne para não processar a resposta
      }

      const data = await response.json();

      if (data.authorization === "authorized") {
        setUserInfo((prev) => ({
          ...prev,
          authorization: "authorized",
          message: data.message,
        }));
      }
    } catch (e) {
      setUserInfo((prev) => ({
        ...prev,
        authorization: null,
        message: "Ocorreu um erro ao tentar conectar-se ao servidor.",
      }));
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center relative h-screen w-screen">
      <div className="flex justify center items-center">
        {" "}
        {userInfo.authorization === "authorized" ? (
          <AuthorizationPage userInfo={userInfo} setUserInfo={setUserInfo} />
        ) : (
          <LoginPage validateUser={validateUser} userInfo={userInfo} />
        )}
      </div>
      <MessageBox message={userInfo.message} authorization={userInfo.authorization}/>
    </div>
  );
}

export default App;
