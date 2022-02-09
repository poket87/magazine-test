import React, { useState } from "react";
import { Grid, Image, Text, Button } from "../elements";

import { history } from "../redux/configureStore";

import LikeButton from "./LikeButton";

const Post = (props) => {
  const [like, setLike] = useState(false);

  const likeBtn = (event) => {
    event.stopPropagation();
    setLike(!like);
  };

  return (
    <React.Fragment>
      {/* <Grid> */}
      <Grid is_flex padding="16px">
        <Grid is_flex width="auto">
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
        </Grid>
        <Grid is_flex width="auto">
          <Text>{props.insert_dt}</Text>
          {props.is_me && (
            <Button
              width="auto"
              margin="4px"
              padding="4px"
              _onClick={() => {
                history.push(`/write/${props.id}`);
              }}
            >
              수정
            </Button>
          )}
        </Grid>
      </Grid>
      {props.layout === "right" && (
        <Grid>
          <Grid
            is_flex
            // _onClick={() => {
            //   history.push(`/post/${props.id}`);
            // }}
          >
            <Text
              margin="10px"
              width="80%"
              center
              size="15px"
              _onClick={(event) => {
                event.stopPropagation();
                history.push(`/post/${props.id}`);
              }}
            >
              {props.contents}
            </Text>
            <Image
              half
              shape="square"
              src={props.image_url}
              _onClick={(event) => {
                event.stopPropagation();
                history.push(`/post/${props.id}`);
              }}
            />
          </Grid>
          <Grid is_flex padding="5px">
            <Grid is_flex padding="5px" width="150px" margin="20px">
              <Text margin="0px" bold>
                댓글 {props.comment_cnt}개
              </Text>
            </Grid>
            <Grid>
              <LikeButton like={like} onClick={likeBtn} />
            </Grid>
          </Grid>
        </Grid>
      )}
      {props.layout === "left" && (
        <Grid>
          <Grid
            is_flex
            // _onClick={() => {
            //   history.push(`/post/${props.id}`);
            // }}
          >
            <Image
              half
              shape="square"
              src={props.image_url}
              _onClick={(event) => {
                event.stopPropagation();
                history.push(`/post/${props.id}`);
              }}
            />
            <Text
              margin="10px"
              width="80%"
              center
              size="15px"
              _onClick={(event) => {
                event.stopPropagation();
                history.push(`/post/${props.id}`);
              }}
            >
              {props.contents}
            </Text>
          </Grid>
          <Grid is_flex>
            <Text margin="0px" bold>
              댓글 {props.comment_cnt}개
            </Text>
            <Grid>
              <LikeButton like={like} onClick={likeBtn} />
            </Grid>
          </Grid>
        </Grid>
      )}
      {props.layout === "bottom" && (
        <Grid>
          <Grid
          // _onClick={() => {
          //   history.push(`/post/${props.id}`);
          // }}
          >
            <Text
              margin="10px"
              _onClick={(event) => {
                event.stopPropagation();
                history.push(`/post/${props.id}`);
              }}
            >
              {props.contents}
            </Text>
            <Image
              half
              shape="square"
              src={props.image_url}
              _onClick={(event) => {
                event.stopPropagation();
                history.push(`/post/${props.id}`);
              }}
            />
          </Grid>
          <Grid is_flex>
            <Text margin="0px" bold>
              댓글 {props.comment_cnt}개
            </Text>
            <Grid>
              <LikeButton like={like} onClick={likeBtn} />
            </Grid>
          </Grid>
        </Grid>
      )}
      {/* <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "kideok",
    user_profile: "https://ifh.cc/g/QhcqL6.jpg",
  },
  image_url: "https://ifh.cc/g/QhcqL6.jpg",
  contents: "프림이네요!",
  comment_cnt: 10,
  insert_dt: "2022-02-04 10:00:00",
  is_me: false,
};

export default Post;
