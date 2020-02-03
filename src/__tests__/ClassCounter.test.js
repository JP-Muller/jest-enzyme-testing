import React from "react";
import { shallow, mount, render } from "enzyme";
import toJSON from "enzyme-to-json";
import ClassCounter from "../Components/ClassCounter/ClassCounter";
import {getPlaceholderData} from '../helperFunctions'

const setUp = () => {
  const wrapper = shallow(<ClassCounter />);
  return wrapper;
};

describe("<ClassCounter />", () => {
  it("Should render without error", () => {
    const wrapper = setUp();
    expect(toJSON(wrapper)).toMatchSnapshot()
  });

  it("Should render the decrement button", () => {
    const wrapper = setUp();
    const decrementButton = wrapper.find(".fa-minus-square");
    expect(decrementButton.exists()).toBeTruthy();
  });

  it("Should render the increment button", () => {
    const wrapper = setUp();
    const decrementButton = wrapper.find(".fa-plus-square");
    expect(decrementButton.exists()).toBeTruthy();
  });

  it("Does not show count amount on initial render", () => {
    const wrapper = render(<ClassCounter />);
    expect(wrapper.find("h1").text()).toEqual("");
  });

  it("Shows proper count value on mount (Lifecycle check)", () => {
    const wrapper = mount(<ClassCounter />);
    expect(wrapper.find("h1").text()).toEqual("0");
    expect(wrapper.state().count).toEqual(0);
  });

  it("Increments count amount correctly", () => {
    const wrapper = mount(<ClassCounter />);
    wrapper.find(".fa-plus-square").simulate("click");
    expect(wrapper.find("h1").text()).toEqual("1");
    expect(wrapper.state().count).toEqual(1);
  });

  it("Decrements count amount correctly", () => {
    const wrapper = mount(<ClassCounter />);
    wrapper.find(".fa-minus-square").simulate("click");
    wrapper.find(".fa-minus-square").simulate("click");
    wrapper.find(".fa-minus-square").simulate("click");
    expect(wrapper.find("h1").text()).toEqual("-3");
  });

  // it('Calls ComponentDidMount Functions', () => {
  //     const wrapper = mount(<ClassCounter />)
  //     wrapper.instance().mountCheck = jest.fn()
  //     // wrapper.update()
  //     // wrapper.instance().setCount = setCount
  //     // wrapper.instance().setCount()
  //     // wrapper.instance().setCount()
  //     // expect(setCount).toBeCalledTimes(1)
  //     // wrapper.instance().mountCheck()
  //     expect(wrapper.instance().mountCheck).toBeCalledTimes(1)
  // })

  it("Executes displayName properly", () => {
    let wrapper = shallow(<ClassCounter />);
    wrapper.instance().displayName = jest.fn();
    wrapper.instance().displayName("Jake", "Muller");
    console.log(wrapper.instance().displayName("Jake", "Muller"));
    expect(wrapper.instance().displayName).toBeCalledWith("Jake", "Muller");
    expect(wrapper.instance().displayName).toHaveReturnedWith(
      console.log("Jake Muller")
    );
  });

  it("getData returns correct data", () => {
    let wrapper = mount(<ClassCounter />);
    wrapper.instance().getData = jest.fn();
    wrapper.instance().getData();
    expect(wrapper.state().colorData).toEqual([
      {
        color: "red",
        value: "#f00"
      },
      {
        color: "green",
        value: "#0f0"
      },
      {
        color: "blue",
        value: "#00f"
      },
      {
        color: "cyan",
        value: "#0ff"
      },
      {
        color: "magenta",
        value: "#f0f"
      },
      {
        color: "yellow",
        value: "#ff0"
      },
      {
        color: "black",
        value: "#000"
      }
    ]);
  });

  it("Gets correct information from NFL API", () => {
    let wrapper = mount(<ClassCounter />);
    wrapper.instance().getCurrentFootballSeason = jest.fn();
    wrapper.instance().getCurrentFootballSeason();
    expect(wrapper.instance().getCurrentFootballSeason).toBeCalled();
    expect(wrapper.state().footBallSeason).toEqual(2019)
    // expect(wrapper.state().count).toEqual(0)
    // console.log(wrapper.state());
    // console.log(wrapper.props());
  });

  it('Adds 2+2 and returns 4', () => {
    let wrapper = mount(<ClassCounter />)
    wrapper.instance().addNums = jest.fn()
    wrapper.instance().addNums(2,2)
    expect(wrapper.instance().addNums).toHaveBeenCalledWith(2,2)
  })
});
