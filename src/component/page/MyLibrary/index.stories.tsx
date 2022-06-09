import { ComponentMeta, ComponentStory } from "@storybook/react";
import Library from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/mainTheme";
const LibraryComponent = {
  title: "Page/Library",
  component: Library,
} as ComponentMeta<typeof Library>;

let books = [
  {
    id: 0,
    name: "Bring Your Human to Work",
    url: "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
    timeRead: "13-minute read",
    writerName: "Erica Keswin",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 1,
    name: "Employee to Entrepreneur",
    url: "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
    timeRead: "15-minute read",
    writerName: "Steve Glaveski",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 2,
    name: "Doesn’t Hurt to Ask",
    url: "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
    timeRead: "13-minute read",
    writerName: "Trey Gowdy",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 3,
    name: "The Fate of Food",
    url: "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
    timeRead: "13-minute read",
    writerName: "Amanda Little",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 4,
    name: "Lives of the Stoics",
    url: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
    timeRead: "13-minute read",
    writerName: "Ryan Holiday, Stephen Hansel",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 5,
    name: "Loving Your Business",
    url: "https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
    timeRead: "13-minute read",
    writerName: "Debbie King",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 6,
    name: "The Fate of Food",
    url: "https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
    timeRead: "15-minute read",
    writerName: "Noreena Hertz",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 7,
    name: "Eat Better, Feel Better",
    url: "https://images.blinkist.com/images/books/5fdc62ce6cee070007f858bd/1_1/470.jpg",
    timeRead: "13-minute read",
    writerName: "Giada De Laurentiis",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 8,
    name: "Dropshipping",
    url: "https://images.blinkist.com/images/books/5fb78f9d6cee070006e48e60/1_1/470.jpg",
    timeRead: "15-minute read",
    writerName: "James Moore",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 9,
    name: "Being Boss",
    url: "https://images.blinkist.com/images/books/608a764b6cee070007228924/1_1/470.jpg",
    timeRead: "15-minute read",
    writerName: "Kathleen Shannon and Emily...",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 10,
    name: "Beyond Entrepreneurship",
    url: "https://images.blinkist.com/images/books/60547aca6cee0700076902e8/1_1/470.jpg",
    timeRead: "13-minute read",
    writerName: "Jim Collins & Bill Lazier",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 11,
    name: "Employee to Entrepreneur",
    url: "https://images.blinkist.com/images/books/6082d1516cee0700072c7da1/1_1/470.jpg",
    timeRead: "15-minute read",
    writerName: "Jim Collins & Bill Lazier",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
];

let setBooks = () => {};
let data = [
  {
    heading: "Trending blinks",
    books: [
      {
        id: 0,
      },
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ],
  },
  {
    heading: "Just added",
    books: [
      {
        id: 6,
      },
      {
        id: 7,
      },
      {
        id: 8,
      },
    ],
  },
  {
    heading: "Featured audio blinks",
    books: [
      {
        id: 9,
      },
      {
        id: 10,
      },
      {
        id: 11,
      },
    ],
  },
];
let setData = () => {};
let library = {
  currentlyReading: [
    {
      id: 0,
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
let setLibrary = () => {};
export const Template: ComponentStory<typeof Library> = (args: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Library {...args} />
      </Router>
    </ThemeProvider>
  );
};
Template.args = {
  books: books,
  setBooks: setBooks,
  data: data,
  setData: setData,
  library: library,
  setLibrary: setLibrary,
};

export default LibraryComponent;
