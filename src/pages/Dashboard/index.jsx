import { Container, Header, Introduction, TechnologiesTitle } from "./styles";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import CardList from "../../components/CardList";
import React, { useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";
import ModalAdd from "../../components/Modal";

function Home({ authenticated, setAuthenticated }) {

  const [technologies, setTechnologies] = useState([]);

  const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")) || false);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

  function loadTechnologies() {
    api.get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechnologies(response.data.techs));
  }

  useEffect(() => {
    if (user) {
      loadTechnologies();
    }
  }, []);

  if (!authenticated) {
    return <Redirect to="/"/>;
  }

  const handleOpenAdd = () => {
    setIsOpenModalAdd(!isOpenModalAdd);
  };

  return (
    <Container>
      <Header>
        <h1>Kenzie Hub</h1>
        <Button
          onClick={() => {setAuthenticated(false)
            localStorage.clear()}}>Sair</Button>
      </Header>
      <Introduction>
        <h2>Olá, {user.name}</h2>
        <p>Primeiro módulo (Introdução ao Frontend)</p>
      </Introduction>
      <TechnologiesTitle>
        <h2>Tecnologias</h2>
        <Button onClick={handleOpenAdd}>+</Button>
      </TechnologiesTitle>
      <CardList technologies={technologies} token={token} loadTechnologies={loadTechnologies}/>
      <ModalAdd open={isOpenModalAdd} handleClose={handleOpenAdd} token={token}loadTechnologies={loadTechnologies}/>
    </Container>
  );
}

export default Home;