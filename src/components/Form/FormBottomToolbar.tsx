// components/Form/FormBottomToolbar.tsx
import { IconButton, Switch } from "@mui/material";
import styled from "styled-components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface FormBottomToolbarProps {
  required: boolean;
  onRequiredChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormBottomToolbar = ({
  required,
  onRequiredChange,
}: FormBottomToolbarProps) => {
  return (
    <Toolbar>
      <ToolbarLeft>
        <IconButton>
          <ContentCopyIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
      </ToolbarLeft>
      <ToolbarRight>
        <RequiredText>필수</RequiredText>
        <Switch size="small" checked={required} onChange={onRequiredChange} />
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </ToolbarRight>
    </Toolbar>
  );
};

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgb(218, 220, 224);
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const RequiredText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-right: 8px;
`;

export default FormBottomToolbar;
