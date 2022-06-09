import Input from "../../atom/Input";
import { Search, Close } from "@mui/icons-material";
import { Box, List, ListItem } from "@mui/material";
import { useState } from "react";
import Typography from "../../atom/Typography";
import { Link } from "react-router-dom";
const SearchComponent = (props: any) => {
  const [filteredData, setFilteredData] = useState<any>(null);
  const inputDataHandler = async (event: any) => {
    let inputData = event.target.value;
    setFilteredData(
      props.books
        .filter((currBook: any) => {
          for (let property in currBook) {
            if (
              inputData.length > 0 &&
              currBook[property].length >= inputData.length &&
              currBook[property].substr(0, inputData.length) === inputData
            ) {
              return true;
            }
          }
          return false;
        })
        .map((currBook: any) => {
          return {
            id: currBook.id,
            name: currBook.name,
            writerName: currBook.writerName,
          };
        })
    );
  };
  return (
    <Box sx={{ width: "500px", position: "relative" }} data-testid="search-box">
      <Input
        sx={{
          margin: "30px 10px",
          height: "46px",
          width: "90%",
          maxWidth: "658px",
          fontWeight: "bold",
          fontSize: {
            xs: "18px",
            md: "20px",
          },
        }}
        startIcon={<Search />}
        endIcon={
          <Close
            onClick={props.searchStateHandler}
            sx={{ cursor: "pointer" }}
          />
        }
        placeholder="Search by title or author"
        onKeyUp={inputDataHandler}
      />
      <Box
        sx={{
          backgroundColor: "white",
          height: "auto",
          width: "90%",
        }}
      >
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "absolute",
            top: "80px",
          }}
        >
          {filteredData !== null &&
            filteredData.map((value: any) => (
              <Link
                to={`/book-info/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem
                  key={value.id}
                  sx={{ display: "flex" }}
                  data-testid="result"
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {value.name}
                  </Typography>
                  <Typography sx={{ color: "gray", marginLeft: "10px" }}>
                    by {value.writerName}
                  </Typography>
                </ListItem>
              </Link>
            ))}
        </List>
      </Box>
    </Box>
  );
};

export default SearchComponent;
