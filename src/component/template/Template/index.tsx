import MyLibrary from "../../../component/page/MyLibrary";
import Home from "../../../component/page/Home";
import Header from "../../../component/organism/Header";
import BookInfo from "../../../component/page/BookInfo";
import Footer from "../../../component/organism/Footer";
import { Box, Container } from "@mui/material";
import Explore from "../../../component/organism/Explore";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Blank from "../../../component/atom/Blank";
const TemplateComponent = () => {
  const [exploreOption, setExploreOption] = useState<boolean>(false);
  const [blankStatus, setBlankStatus] = useState<boolean>(false);
  const handleExploreMenu = () => {
    setExploreOption(!exploreOption);
    // setBlankStatus(!exploreOption);
  };
  const [books, setBooks] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [library, setLibrary] = useState<any>(null);
  useEffect(() => {
    const processor = async () => {
      let response = await fetch("https://blinkist-json.herokuapp.com/extra"); // contains id of "Trending blinks", "Just added" & "Featured audio blinks" in the main page
      let rData = await response.json();
      setData(rData);
      response = await fetch("https://blinkist-json.herokuapp.com/library"); // contains id of "currentlyReading",  "finishedBook" in the My Library Page
      let rLibrary = await response.json();
      setLibrary(rLibrary);
      response = await fetch("https://blinkist-json.herokuapp.com/books"); // contains all the book info on the first page of blinkist(under Trending blinks, Just added, Featured audio blinks)
      let rBooks = await response.json();
      setBooks(rBooks);
    };
    processor();
  }, []);

  return !data || !library || !books ? (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress data-testid="circular-progress" />
    </Container>
  ) : (
    <Box sx={{ position: "relative", height: "100vh" }} data-testid="main">
      <Router>
        <Header
          url="/assets/logo.png"
          name="Blinkist"
          handleExploreMenu={handleExploreMenu} //Clicking on explore menu item will open the
          //dropdown menu
          exploreOption={exploreOption} //Toggle the drop-down menu on the right side of explore option
          books={books}
          blankStatus={blankStatus}
          setBlankStatus={setBlankStatus}
        />
        <Box sx={{ position: "absolute", top: "93px", width: "100%" }}>
          <Routes>
            <Route // for all the My LIbrary part(Currently reading & Finished)
              path="/library"
              element={
                <MyLibrary
                  books={books}
                  setBooks={setBooks}
                  library={library}
                  setLibrary={setLibrary}
                />
              }
            />
            <Route
              path="book-info/:bookId"
              element={<BookInfo library={library} setLibrary={setLibrary} />}
            />
            <Route // Main Content part of the home page
              path="/"
              element={
                <Home
                  setData={setData}
                  library={library}
                  setLibrary={setLibrary}
                />
              }
            />
            <Route
              path="*"
              element={
                <div style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </div>
              }
            />
          </Routes>
          <Footer
            sx={{
              height: "367px",
              width: "100%",
              backgroundColor: "#F1F6F4",
              display: "flex",
              position: "sticky",
              top: "100vh",
              padding: "24px 0px",
              marginTop: "24px",
            }}
          />
          {exploreOption && <Explore data-testid="explore-box" />}
        </Box>
      </Router>
      {blankStatus && <Blank />}
    </Box>
  );
};

export default TemplateComponent;
