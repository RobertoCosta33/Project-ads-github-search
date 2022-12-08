import axios from "axios";

export const getUserInfos = async (user: string) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${user}`);
    return data;
  } catch (error) {
    const errorMessage =
      "Usuário inválido! Por favor, tente novamente com outro usuário.";
    console.error({
      error,
      function: "getUserInfos",
    });
    localStorage.setItem("userError", errorMessage);
  }
};

export const getRepositorysInfos = async (user: string) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    return data;
  } catch (error) {
    console.error({ error, function: "getRepositorysInfos" });
    throw "Dados não encontrados";
  }
};
