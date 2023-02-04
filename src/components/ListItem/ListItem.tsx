import { motion, Transition } from "framer-motion";
import {
  DEFAULT_MAX_RANDOM_NUMBER,
  DEFAULT_LIST_ITEM_COLOR,
} from "../../constants";
import { isMobileScreen } from "../../utils";
import "./listItem.css";

const swappingAnimation: Transition = {
  type: "spring",
  damping: 50,
  stiffness: 400,
};

interface IListItemProps {
  id: string;
  number: number;
  listLength: number;
  color?: React.CSSProperties["backgroundColor"];
}

function ListItem(props: IListItemProps): JSX.Element {
  const { id, number, listLength, color = DEFAULT_LIST_ITEM_COLOR } = props;

  const heightPrecentage = (number * 100) / DEFAULT_MAX_RANDOM_NUMBER;
  const widthPrecentage = (1 * 100) / listLength;

  const shouldDisplayNumber = !isMobileScreen() && listLength < 25;

  return (
    <motion.div
      key={id}
      className="list-item"
      style={{
        height: `${heightPrecentage}%`,
        width: `${widthPrecentage}%`,
      }}
      layout
      transition={swappingAnimation}
    >
      <div className="list-item-color" style={{ backgroundColor: color }}>
        {shouldDisplayNumber && <p className="list-item-number">{number}</p>}
      </div>
    </motion.div>
  );
}

export default ListItem;
