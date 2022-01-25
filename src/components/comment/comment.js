import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button } from "antd";
import { Comment, Tooltip, Avatar, Card } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import "./comment.css";

export default function CommentMain({ doctor_Id }) {
  var token = localStorage.getItem("token");
  const [dataFromIn, setIn] = useState(0);
  const [data, setData] = useState([]);

  var doctorId = doctor_Id;
  if (doctor_Id === undefined) doctorId = "";

  function CommentStrunt({ authorName, contentText, data }) {
    return (
      <Card>
        <Comment
          author={<a>{authorName}</a>}
          content={<p>{contentText}</p>}
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{data}</span>
            </Tooltip>
          }
        />
      </Card>
    );
  }

  function CommentSub({ doctorId }) {
    const [text, setText] = useState("");
    const { TextArea } = Input;

    const onChange = (e) => {
      setText(e.target.value);
      // console.log('Change:', e.target.value);
    };

    function clickHandler() {
      var formData = new FormData();
      formData.append("doctor_id", doctorId);
      formData.append("text", text);
      axios({
        method: "post",
        url: "http://185.141.107.81:1111/api/new_comment",
        data: formData,
        headers: {
          Authorization: `token ${token}`,
        },
      })
        .then(function (response) {
          if (response.status == 200) setText("");
          if (dataFromIn == 0) {
            setIn(1);
          } else {
            setIn(0);
          }
          // console.log(response);
        })
        .catch(function (response) {
          console.log(response.response);
        });
    }

    return (
      <div data-testid="CommentSub">
        <TextArea
          showCount
          value={text}
          maxLength={100}
          style={{ height: 120 }}
          onChange={onChange}
        />
        <Button onClick={clickHandler} htmlType="submit" type="primary">
          Add Comment
        </Button>
      </div>
    );
  }

  useEffect(() => {
    axios
      .get("http://185.141.107.81:1111/api/comments/" + doctorId)
      .then((response) => {
        setData(response.data.comments);
        // console.log(response)
      })
      .catch(() => {
        console.log("error in getting resault from server");
        setData([]);
      });
  }, [dataFromIn, doctor_Id]);

  if (doctorId === "") return <div> loaing comments </div>;
  else
    return (
      <div style={{ marginRight: 4 }} data-testid="commentMain">
        {data.map((s) => (
          <CommentStrunt
            authorName={s.writer_name}
            contentText={s.text}
            data={s.date}
            key={s.writer_name + s.date + s.text}
          />
        ))}
        <CommentSub doctorId={doctor_Id} />
      </div>
    );
}
