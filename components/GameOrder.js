import {
  SelectLabel,
  SelectWrapper,
  StyledOption,
  StyledSelect,
} from "./CommonStyles";

export function GameOrder() {
  return (
    <SelectWrapper className="mr-2">
      <SelectLabel htmlFor="order">Order By:</SelectLabel>
      <StyledSelect name="order" id="order">
        <StyledOption value="relevance">Relevence</StyledOption>
        <StyledOption value="created">Date added</StyledOption>
        <StyledOption value="name">Name</StyledOption>
      </StyledSelect>
    </SelectWrapper>
  );
}
