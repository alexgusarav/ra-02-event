import { useState } from "react";
import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";
import data from "../../data/data.json";
import "./portfolio.css";

const filters = ["All", "Websites", "Flayers", "Business Cards"];

export class Portfolio extends React.Component {
  render() {
    const [selected, setSelected] = useState("All");
    const [images, setImages] = useState(data);

    const handleFilterSet = (clickedFilter) => {
      setSelected(clickedFilter);
      setImages(
        clickedFilter === "All"
          ? data
          : data.filter((element) => element.category === clickedFilter)
      );
    };

    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={handleFilterSet}
        />
        <ProjectList projects={images} />
      </div>
    );
  };
};



// const filters = ["All", "Websites", "Flayers", "Business Cards"];

// const Portfolio = () => {
//   const [selected, setSelected] = useState("All");
//   const [images, setImages] = useState(data);

//   const handleFilterSet = (clickedFilter) => {
//     setSelected(clickedFilter);
//     setImages(
//       clickedFilter === "All"
//         ? data
//         : data.filter((element) => element.category === clickedFilter)
//     );
//   };

//   return (
//     <div className="portfolio">
//       <Toolbar
//         filters={filters}
//         selected={selected}
//         onSelectFilter={handleFilterSet}
//       />
//       <ProjectList projects={images} />
//     </div>
//   );
// };

// export default Portfolio;