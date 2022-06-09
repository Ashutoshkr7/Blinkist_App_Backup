import { useState } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../atom/Typography";
import baseTheme from "../../../theme/buttonTheme";
import Tab from "../../molecule/tabs";
import Card from "../../organism/Card";
import CircularProgress from "@mui/material/CircularProgress";
import theme from "../../../theme/mainTheme";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  cards: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const MyLibrary = ({ books, library }: any) => {
  const classes = useStyle();
  let data = library;
  const tabData = [
    {
      value: "reading",
      label: "Currently reading",
    },
    {
      value: "finished",
      label: "Finished",
    },
  ];
  const [currState, setCurrState] = useState(tabData[0].value);
  const handleState = (state: string) => {
    setCurrState(state);
  };

  const cards = () => {
    if (books.length === 0) {
      return <CircularProgress data-testid="circular-progress" />;
    } else {
      if (currState === "reading") {
        return data.currentlyReading.map((curr: any) => {
          let currData = books[Number.parseInt(curr.id)];
          return (
            currData && (
              <Card
                cardId={currData.id}
                key={currData.id}
                imgHeight={300}
                url={currData.url}
                bookName={currData.name}
                writerName={currData.writerName}
                timeRead={currData.timeRead}
                width={350}
                inLibrary={true}
                progress={curr.progress}
                data-testid="cards-reading"
              />
            )
          );
        });
      } else if (currState === "finished") {
        return data.finishedBook.map((curr: any) => {
          let currData = books[Number.parseInt(curr.id)];
          return (
            <Card
              cardId={currData.id}
              key={currData.id}
              imgHeight={300}
              url={currData.url}
              bookName={currData.name}
              writerName={currData.writerName}
              timeRead={currData.timeRead}  // <SearchBox
              //   data-testid="search-box"
              //   books={props.books}
              // searchStateHandler={() => {
              //   setSearchState(false);
              //   props.setBlankStatus(false);
              // }}
              ///>
              width={350}
              inLibrary={true}
              progress={100}
              data-testid="cards-finished"
            />
          );
        });
      }
    }
  };

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Typography variant="h5" theme={baseTheme} mb={4}>
        My Library
      </Typography>
      <Tab stateHandler={handleState} tabData={tabData} />
      <Box className={classes.cards} mt={4}>
        {cards()}
      </Box>
    </Container>
  );
};

export default MyLibrary;
