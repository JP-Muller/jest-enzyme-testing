import React from "react";
import { shallow, mount, render } from "enzyme";
import DataDash from '../Components/DataDash/DataDash'
import ListItem from "../Components/ListItem/ListItem";
import { getPlaceholderData } from "../helperFunctions";

describe("<DataDash />", () => {
  it("Renders without errors", () => {
      const wrapper = mount(<DataDash />);
      expect(wrapper.exists()).toBeTruthy()
  });
});
