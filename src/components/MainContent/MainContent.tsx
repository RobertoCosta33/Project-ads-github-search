import { FC, useEffect, useState } from "react";
import { SearchContainer } from "../SearchContainer";
import { UserHeader } from "../UserHeader";
import {
  MainBox,
  UserInfosBox,
  StarsBox,
  Load,
  Error,
} from "./MainContent.styles";
import { getUserInfos, getRepositorysInfos } from "../../services";
import { UserBody } from "../UserBody";
import Link from "next/link";

export const MainContent: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [hasData, setHasData] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [repositoryData, setRpositoryData] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>(
    "Procure por um usuário para visualizar as informações..."
  );
  const [hasError, setHasError] = useState<boolean>(false);

  const getData = async (user: string) => {
    const userData = await getUserInfos(user);
    if (!userData) {
      setErrorMessage(localStorage.getItem("userError"));
      setHasError(true);
      return;
    }
    const repositoryData = await getRepositorysInfos(user);
    return { userData, repositoryData };
  };

  const handleClick = async () => {
    setHasData(false);
    setLoading(true);

    const data = await getData(query);
    if (data) {
      setTimeout(() => {
        setHasData(true);
        setLoading(false);
      }, 500);
      setUserData(data.userData);
      setRpositoryData(data.repositoryData);
      setQuery("");
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    return;
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
    if (userData && hasData) {
      return (
        <UserHeader
          name={userData?.name}
          image={userData?.avatar_url}
          location={userData?.location}
        />
      );
    } else {
      return <Error hasError={hasError}>{errorMessage}</Error>;
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
      {loading && <Load />}
      {addUserHeader()}
      {hasData && (
        <UserBody>
          {repositoryData.map((repo, i) => {
            return (
              <div key={i}>
                <UserInfosBox>
                  <p>Nome do repositório: {repo.name}</p>
                  <p>
                    Link:{" "}
                    <Link href={repo.html_url} passHref>
                      <a target="_blank">{repo.html_url}</a>
                    </Link>
                  </p>
                  <p>Data de criação: {repo.created_at}</p>
                </UserInfosBox>
                <StarsBox>
                  <p>Estrelas atribuídas: ⭐{repo.stargazers_count}</p>
                </StarsBox>
              </div>
            );
          })}
        </UserBody>
      )}
    </MainBox>
  );
};
