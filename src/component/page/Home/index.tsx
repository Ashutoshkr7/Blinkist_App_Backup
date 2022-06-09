import { Container, Box } from "@mui/material";
import Banner from "../../molecule/Banner";
import Input from "../../atom/Input";
import { Search } from "@mui/icons-material";
import Card from "../../organism/Card";
import Typography from "../../atom/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme/mainTheme";

const useStyles = makeStyles((themes) => ({
  input: {
    margin: `${theme.spacing(5)} 0px`,
    height: theme.spacing(6),
    width: "100%",
    maxWidth: "658px",
    fontWeight: "bold",
    fontSize: "20px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: theme.spacing(4),
    marginTop: "75px",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  [themes.breakpoints.down("sm")]: {},
}));

const SearchComponent = ({
  books,
  setBooks,
  data,
  setData,
  library,
  setLibrary,
  ...props
}: any) => {
  const classes = useStyles();
  const checkInLibrary = (bookId: any) => {
    let checker = (curr: any) => {
      for (let currData of curr) {
        if (currData.id === bookId) {
          return { status: true, progress: currData.progress };
        }
      }
      return { status: false };
    };
    let inCurrRead = checker(library.currentlyReading);
    return inCurrRead.status ? inCurrRead : checker(library.finishedBook);
  };

  const libraryHandler = async (bookId: any, setBookStatus: any) => {
    library.currentlyReading.push({
      id: bookId,
      progress: 0,
    });
    setLibrary(library);
    setBookStatus(true);
    let res = await fetch("http://localhost:3004/library/", {
      method: "PUT",
      body: JSON.stringify(library),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };
  return (
    <Container>
      <Banner
        heading="Explore Books on entrepreneurship"
        discription="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
        img="/assets/banner.png"
      />
      <Input
        className={classes.input}
        startIcon={<Search />}
        placeholder="Search by title or author"
      />

      <Box>
        {data.map((curr: any) => {
          return (
            <Box data-testid="container">
              <Typography className={classes.heading}>
                {curr.heading}
              </Typography>
              <Box className={classes.main}>
                {!library ? (
                  <CircularProgress data-testid="circular-progress" />
                ) : (
                  curr.books.map((currData: any) => {
                    currData = books[currData.id];
                    const inLibrary = checkInLibrary(currData.id);
                    return (
                      <Card
                        cardId={currData.id}
                        key={currData.id}
                        imgHeight={300}
                        url={currData.url}
                        bookName={currData.name}
                        writerName={currData.writerName}
                        timeRead={currData.timeRead}
                        width={350}
                        inLibrary={inLibrary.status}
                        progress={inLibrary.progress}
                        libraryHandler={libraryHandler}
                      />
                    );
                  })
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default SearchComponent;
