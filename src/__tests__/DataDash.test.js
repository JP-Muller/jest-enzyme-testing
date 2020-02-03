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

  it("Should show the data when retrieved", async () => {
    var wrapper = mount(<DataDash />);

    const instance = wrapper.instance();
    await instance.componentDidMount();
    wrapper.instance().forceUpdate();
    console.log(wrapper.state().data[0]);
    wrapper.update();
    // console.log(wrapper.debug());
    expect(wrapper.find(ListItem).exists()).toBeTruthy();
    expect(toJSON(wrapper)).toMatchSnapshot()
  });

  it('Should render "NOTHING TO SHOW" h2 if data has not been retrieved', () => {
    const wrapper = mount(<DataDash />);
    const h2 = wrapper.find("h2");
    expect(h2.exists()).toBeTruthy()
    expect(h2.text()).toEqual("NOTHING TO SHOW");
  });
});
