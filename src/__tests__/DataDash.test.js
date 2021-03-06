import React from "react";
import { shallow, mount, render } from "enzyme";
import DataDash from "../Components/DataDash/DataDash";
import ListItem from "../Components/ListItem/ListItem";
import toJSON from "enzyme-to-json";
import { getPlaceholderData } from "../helperFunctions";

getPlaceholderData.default = jest.fn();

describe("<DataDash />", () => {
  it("Renders without errors", () => {
    const wrapper = mount(<DataDash />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should display mapped data when retrieved", async () => {
    var wrapper = mount(<DataDash />);
    const instance = wrapper.instance();
    await instance.componentDidMount();
    console.log(wrapper.state().data[0]);
    wrapper.update();
    expect(wrapper.find(ListItem).exists()).toBeTruthy();
    expect(toJSON(wrapper)).toMatchSnapshot()
  });

  it('Should render loading container if data has not been retrieved', () => {
    const wrapper = mount(<DataDash />);
    const loadingContainer = wrapper.find('#loading-container');
    expect(loadingContainer.exists()).toBeTruthy()
  });
});
