import React from "react";
import { Toolbar } from "../Toolbar/Toolbar";
import { ProjectList } from "../ProjectList/ProjectList";
import data from "../../data/data.json";
import "./portfolio.css";

const filters = ["All", "Websites", "Flayers", "Business Cards"];

export class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "All",
      images: data,
    };

    this.handleFilterSet = this.handleFilterSet.bind(this);
  }

  handleFilterSet(filter) {
    this.setState({selected: filter});
  };

  render() {
    const {selected, images} = this.state;

    const setImages =
      selected === "All"
          ? images
          : images.filter((element) => element.category === selected);


    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.handleFilterSet}
        />
        <ProjectList projects={setImages} />
      </div>
    );
  };
};
