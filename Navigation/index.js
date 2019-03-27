import BottomTabs from "./BottomTabs";

import { createAppContainer } from "react-navigation";

//App containers are responsible for managing the app and linking the navigator to the app navigator
const MyContainer = createAppContainer(BottomTabs);

export default MyContainer;
