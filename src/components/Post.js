import React from "react";
import { Grid, Image, Text, Button } from "../elements";

import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
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
        <Grid padding="16px">
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
      </Grid>
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
