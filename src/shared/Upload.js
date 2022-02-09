import React from "react";
import "./App.css";

import { Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);

    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
    // const _upload = storage.ref(`images/${image.name}`).put(image);

    // _upload.then((snapshot) => {
    //   console.log(snapshot);

    //   // firebase 이미지 링크 가져오기
    //   snapshot.ref.getDownloadURL().then((url) => {
    //     console.log(url);
    //   });
    // });
  };

  return (
    <React.Fragment>
      <div className="filebox">
        <input
          className="upload-name"
          value="첨부파일"
          placeholder="첨부파일"
        />
        <label htmlFor="file">파일 찾기</label>
        <input
          type="file"
          id="file"
          onChange={selectFile}
          ref={fileInput}
          disabled={is_uploading}
        />
        {/* <Button _onClick={uploadFB}>업로드하기</Button> */}
      </div>
    </React.Fragment>
  );
};

export default Upload;
