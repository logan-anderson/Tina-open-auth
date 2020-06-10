import { useInlineForm } from "react-tinacms-inline";
import { Button as TinaButton } from "@tinacms/styles";
import { useGithubEditing } from "react-tinacms-github";

export function EditToggle() {
  // Access 'edit mode' controls via `useInlineForm` hook
  const { status, deactivate, activate } = useInlineForm();

  return (
    <TinaButton
      primary
      onClick={() => {
        status === "active" ? deactivate() : activate();
      }}
    >
      {status === "active" ? "Preview" : "Edit"}
    </TinaButton>
  );
}
export interface EditLinkProps {
  editMode: boolean;
}

export const EditLink = ({ editMode }: EditLinkProps) => {
  const github = useGithubEditing();

  return (
    <TinaButton
      primary
      onClick={editMode ? github.exitEditMode : github.enterEditMode}
    >
      {editMode ? "Exit Edit Mode" : "Edit This Site"}
    </TinaButton>
  );
};
