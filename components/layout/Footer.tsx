import { EditLink } from "../inline/inline-ui";
import { StyledFooter } from "./styles";

export default ({ editMode }: { editMode: boolean }) => {
  return (
    <StyledFooter>
      <div>
        <EditLink editMode={editMode} />
      </div>
    </StyledFooter>
  );
};
