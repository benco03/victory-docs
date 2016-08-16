// victory-examples
import CustomCentralAxis from "victory-examples/docs/custom-central-axis/docs";
import CustomDataComponent from "victory-examples/docs/custom-data-component/docs";
import CustomStyles from "victory-examples/docs/custom-styles/docs";
import MultipleAxes from "victory-examples/docs/multiple-axes/docs";
import Tooltip from "victory-examples/docs/tooltip/docs";
import CandlestickDashboard from "victory-examples/docs/candlestick-dashboard/docs";
import ThemePark from "victory-examples/docs/theme-park/docs";

export const recipesComponents = [
  {
    text: "Candlestick Dashboard",
    slug: "candlestick-dashboard",
    category: "customize",
    docs: CandlestickDashboard
  },
  {
    text: "Central Axis",
    slug: "custom-central-axis",
    category: "customize",
    docs: CustomCentralAxis
  }, {
    text: "Data Component",
    slug: "custom-data-component",
    category: "customize",
    docs: CustomDataComponent
  }, {
    text: "Multiple Axes",
    slug: "multiple-axes",
    category: "customize",
    docs: MultipleAxes
  }, {
    text: "Styles",
    slug: "custom-styles",
    category: "customize",
    docs: CustomStyles
  }, {
    text: "Theme Park",
    slug: "theme-park",
    category: "customize",
    docs: ThemePark
  }, {
    text: "Tooltip",
    slug: "tooltip",
    category: "events",
    docs: Tooltip
  }
];
