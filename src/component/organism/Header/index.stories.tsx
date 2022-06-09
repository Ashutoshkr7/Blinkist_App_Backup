import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from ".";
import { BrowserRouter as Router } from "react-router-dom";

const HeaderComponent = {
  title: "organism/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args: any) => {
  return (
    <Router>
      <Header {...args} />
    </Router>
  );
};
Template.args = {
  url: "/assets/logo.png",
  name: "Blinkist",
};

export default HeaderComponent;
