import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [layout, setLayout] = React.useState(_post ? _post.layout : "bottom");
  const [contents, setCountents] = React.useState(_post ? _post.contents : "");

  React.useEffect(() => {
    if (is_edit && !_post) {
      history.goBack();

      return;
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setCountents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents, layout));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents, layout }));
  };

  const is_checked = (e) => {
    if (e.target.checked) {
      setLayout(e.target.value);
    }
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          {is_edit ? "게시글 수정" : "게시글 작성"}
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            레이아웃 고르기
          </Text>
        </Grid>
        <Grid padding="16px">
          <input
            type="radio"
            name="layout"
            value="right"
            id="right"
            onChange={is_checked}
          />
          <label htmlFor="right">
            <strong>오른쪽에 이미지 왼쪽에 텍스트</strong>
          </label>
        </Grid>
        <Grid is_flex>
          <Text width="80%" margin="10px" center>
            {contents}
          </Text>
          <Image
            half
            shape="square"
            src={preview ? preview : "http://via.placeholder.com/400x300"}
          />
        </Grid>
        <Grid padding="16px">
          <input
            type="radio"
            name="layout"
            value="left"
            id="left"
            onChange={is_checked}
          />
          <label htmlFor="left">
            <strong>왼쪽에 이미지 오른쪽에 텍스트</strong>
          </label>
        </Grid>
        <Grid is_flex>
          <Image
            half
            shape="square"
            src={preview ? preview : "http://via.placeholder.com/400x300"}
          />
          <Text width="80%" margin="10px" center>
            {contents}
          </Text>
        </Grid>
        <Grid padding="16px">
          <input
            type="radio"
            name="layout"
            value="bottom"
            id="bottom"
            onChange={is_checked}
          />
          <label htmlFor="left">
            <strong>아래쪽에 이미지 위쪽에 텍스트</strong>
          </label>
        </Grid>
        <Grid is_flex>
          <Text margin="10px">{contents}</Text>
          <Image
            shape="square"
            src={preview ? preview : "http://via.placeholder.com/400x300"}
          />
        </Grid>
      </Grid>

      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
      </Grid>

      <Grid padding="16px">
        {is_edit ? (
          <Button text="게시글 수정" _onClick={editPost}></Button>
        ) : (
          <Button text="게시글 작성" _onClick={addPost}></Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
