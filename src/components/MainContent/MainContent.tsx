import { FC, useState } from "react";
import { SearchContainer } from "../SearchContainer";
import { UserHeader } from "../UserHeader";
import { MainBox, UserInfosBox, StarsBox } from "./MainContent.styles";
import { getUserInfos, getRepositorysInfos } from "../../services";
import { UserBody } from "../UserBody";

export const MainContent: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [userData, setUserData] = useState<any>();
  const [repositoryData, setRpositoryData] = useState<any[]>([]);

  const getData = async (user: string) => {
    const userData = await getUserInfos(user);
    if (!userData) return;
    const repositoryData = await getRepositorysInfos(user);
    return { userData, repositoryData };
  };

  const handleClick = async () => {
    const data = await getData(query);
    if (data) {
      setUserData(data.userData);
      setRpositoryData(data.repositoryData);
      setQuery("");
    }
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) handleClick();
  };

  const addUserHeader = () => {
    if (userData) {
      return (
        <UserHeader
          name={userData?.name}
          image={userData?.avatar_url}
          location={userData?.location}
        />
      );
    } else {
      return (
        <span>Procure por um usuário para visualizar as informações...</span>
      );
    }
  };

  return (
    <MainBox>
      <SearchContainer
        id="inputSearch"
        name="inputSearch"
        type="text"
        placeholder="Digite o nome do usuário..."
        value={query}
        onClick={handleClick}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {addUserHeader()}
      <UserBody>
        {repositoryData.map((repo, i) => {
          return (
            <div key={i}>
              <UserInfosBox>
                <p>Nome do repositório: {repo.name}</p>
                <p>Link: {repo.html_url}</p>
                <p>Data de criação: {repo.created_at}</p>
              </UserInfosBox>
              <StarsBox>
                <p>Estrelas atribuídas: ⭐{repo.stargazers_count}</p>
              </StarsBox>
            </div>
          );
        })}
      </UserBody>
    </MainBox>
  );
};
