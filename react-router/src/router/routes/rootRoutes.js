import PATHS from "../../constants/Paths";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/RootPages/Home";

const rootRoutes = [
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      {
        index: PATHS.ROOT.INDEX,
        Component: Home,
      },
    ],
  },
];

export default rootRoutes;
