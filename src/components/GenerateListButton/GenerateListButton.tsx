import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Button } from "../../utilComponents";
import "./generateListButton.css";

interface IGenerateListButtonProps {
  generateNewList: () => void;
}

function GenerateListButton(props: IGenerateListButtonProps): JSX.Element {
  const { generateNewList } = props;

  return (
    <Button
      className="generate-list-button"
      variant="outlined"
      startIcon={<AutorenewIcon />}
      onClick={generateNewList}
    >
      Re-Generate List
    </Button>
  );
}

export default GenerateListButton;
