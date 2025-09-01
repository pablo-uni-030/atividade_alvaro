import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import LoginPage from "./pages/LoginPage";
import AuthorizationPage from "./pages/AuthorizationPage";

function App() {
  const [userInfo, setUserInfo] = useState({
    email: null,
    authorization: null,
  });

  const port = 3000;

  async function validateUser(form, email, password) {
    form.preventDefault();

    setUserInfo((prev) => ({ ...prev, email: email }));
    setUserInfo((prev) => ({ ...prev, authorization: "loading" }));

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
        return; // Retorne para não processar a resposta
      }

      const data = await response.json();

      if (data.authorization === "authorized") {
        setUserInfo((prev) => ({ ...prev, authorization: "authorized" }));
      }
    } catch (e) {
      setUserInfo((prev) => ({ ...prev, authorization: null }));
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-15">
      {userInfo.authorization === "authorized" ? (
        <AuthorizationPage userInfo={userInfo}/>
      ) : (
        <LoginPage validateUser={validateUser} userInfo={userInfo} />
      )}
    </div>
  );
}

export default App;
