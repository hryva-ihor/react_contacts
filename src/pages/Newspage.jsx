import { Link, Pagination, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getProstsData } from "../services/post_service";

const Newspage = (props) => {
  console.log(props);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    getProstsData(`query=${query}&page=${page - 1}`).then(({ data }) => {
      console.log(data);
      setPosts(data.hits);
      setPageQty(data.nbPages);
      // если количество страниц меньше стандартной
      if (data.nbPages < page) {
        setPage(1);
      }
    });
  }, [page, query]);
  return (
    <Container sx={{ p: 3 }}>
      <TextField
        fullWidth
        label="search news"
        value={query}
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value);
        }}
      />
      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            color="secondary"
            page={page}
            count={pageQty}
            showFirstButton
            showLastButton
            onChange={(_, num) => {
              setPage(num);
            }}
            sx={{ marginY: 5, marginX: "auto" }}
          />
        )}
        {posts.map((post) => {
          return (
            <Link target="_blank" key={post.objectID} href={post.url}>
              {post.title || post.story_title}
            </Link>
          );
        })}
      </Stack>
    </Container>
  );
};
export { Newspage };
