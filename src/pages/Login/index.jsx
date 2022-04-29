import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().required("Este campo é obrigatório").email("Email inválido"),
  password: yup.string().required("Este campo é obrigatório").min(8, "A sua senha deve ter no mínimo 8 caracteres!"),
});

function Login({ handleNavigation, authenticated, setAuthenticated }) {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    api.post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        
        setAuthenticated(true)

        toast.success("Sucesso ao entrar na conta");

        return history.push("/home");
      })
      .catch((err) => toast.error("E-mail ou senha inválidos"));
  }

  if (authenticated) {
    return <Redirect to="/home"/>;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Input label="Email" placeholder="Digite aqui seu e-mail" register={register} name="email" error={errors.email?.message}/>
          <Input error={errors.password?.message} name="password" register={register} type="password"label="Senha" placeholder="Digite aqui sua senha"/>
          <Button pinkSchema type="submit">Entrar</Button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <Button className="greybutton" greySchema onClick={() => handleNavigation("/signup")}>Cadastre-se</Button>
      </div>
    </Container>
  );
}

export default Login;