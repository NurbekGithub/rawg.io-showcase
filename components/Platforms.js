import {
  SelectLabel,
  SelectWrapper,
  StyledOption,
  StyledSelect,
} from "./CommonStyles";

export function Platforms() {
  return (
    <SelectWrapper>
      <StyledSelect name="platform">
        <StyledOption value="">Platform</StyledOption>
        <StyledOption value="pc">PC</StyledOption>
        <StyledOption value="web">WEB</StyledOption>
        <StyledOption value="linux">Linux</StyledOption>
      </StyledSelect>
    </SelectWrapper>
  );
}
