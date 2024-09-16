import React, {useState} from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && password === "123456") {
      setMessage("Acessado com sucesso!");
    } else {
      setMessage("Usuário ou senha incorretos!");
    }
  };

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Login</h1>
      <div style={{marginBottom: "10px"}}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{padding: "5px", width: "200px"}}
        />
      </div>
      <div style={{marginBottom: "10px"}}>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{padding: "5px", width: "200px"}}
        />
      </div>
      <button onClick={handleLogin} style={{padding: "5px 20px"}}>
        Acessar
      </button>
      <div style={{marginTop: "20px"}}>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default App;
