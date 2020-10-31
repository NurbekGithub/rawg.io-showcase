import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <S.HeaderBrand>
        <S.HeaderBrandLink>rawg</S.HeaderBrandLink>
      </S.HeaderBrand>
      <S.HeaderSearchFrom>
        <S.HeaderSearchInput placeholder="Search" type="search" />
      </S.HeaderSearchFrom>
    </S.Header>
  );
}
