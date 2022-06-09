import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookInfo from ".";
import { BrowserRouter as Router } from "react-router-dom";
// import { withQuery } from "@storybook/addon-queryparams";

const BookInfoComponent = {
  title: "Page/BookInfo",
  component: BookInfo,
} as ComponentMeta<typeof BookInfo>;

let library = {
  currentlyReading: [
    {
      id: 11,
      progress: 65,
    },
    {
      id: 4,
      progress: 90,
    },
    {
      id: 3,
      progress: 0,
    },
    {
      id: 2,
      progress: 0,
    },
  ],
  finishedBook: [
    {
      id: 9,
    },
    {
      id: 6,
    },
    {
      id: 10,
    },
    {
      id: 8,
    },
    {
      id: 1,
    },
    {
      id: 0,
    },
  ],
};
export const Template: ComponentStory<typeof BookInfo> = (args: any) => {
  // const urlParams = new URLSearchParams(document.location.search);
  // const mockedParam = urlParams.get("mock");
  return (
    <Router>
      <BookInfo {...args} />
    </Router>
  );
};
Template.args = {
  library: library,
  setLibrary: () => {},
  id: 5,
};

export default BookInfoComponent;
