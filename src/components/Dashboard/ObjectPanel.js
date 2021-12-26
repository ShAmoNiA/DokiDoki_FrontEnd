import Profile from "./profile.png";
import React, { useState } from "react";
import { Modal, Empty, Button, Alert, Form, Input, Radio, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../helper/axiosInstance";
import { PhoneOutlined } from "@ant-design/icons";
import { colors } from "@material-ui/core";

const TYPE = "patient";
export default function ObjectPanel() {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const user = useSelector((state) => state.user);
  const showRecordModal = () => {
    Modal.info({
      content:
        user.medical_records !== "undefined" ? user.medical_records : <Empty />,
    });
  };
  const editProfileHandler = async (values) => {
    let formData = new FormData();
    for (let key in values) {
      if ((key === "weight" || key === "height") && values[key]) {
        formData.append(key, +values[key]);
        continue;
      }
      if (values[key]) {
        formData.append(key, values[key]);
      } else {
        delete values[key];
      }
    }
    console.log(values);
    try {
      const { data } = await axios.post("/edit_profile", formData);
      if (data.success) {
        setShowEdit(false);
        dispatch({ type: "SET_USER", user: values });
        message.success("Profile Successfully Updated");
      }
    } catch (e) {
      for (let error in e.response.data) {
        const errorMessage = e.response.data[error].reduce(
          (acc, val) => acc + val,
          ""
        );
        message.error(errorMessage);
      }
    }
  };
  console.log(user, "jjj");
  return (
    <>
      <Modal
        footer={null}
        title="Edit Profile"
        centered
        closable={false}
        visible={showEdit}
        width={1000}
        data-testid={"edit-profile-modal"}
      >
        <Alert
          message="Enter Each part you need to change, all fields are optional"
          type="warning"
          showIcon
          closable
          style={{ marginBottom: "2em" }}
        />

        <Form
          onFinish={editProfileHandler}
          name="edit"
          layout="horizontal"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
        >
          <Form.Item name="username" label="Username">
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "please enter yout email in right format",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
          <Form.Item name="first_name" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="last_name" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name="sex" label="Sex">
            <Radio.Group data-testid="edit-profile-edit-sex-radio-group">
              <Radio.Button value="F">Female</Radio.Button>
              <Radio.Button value="M">Male</Radio.Button>
              <Radio.Button value="P">Private</Radio.Button>
              <Radio.Button value="U">Unisex</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {!user.is_doctor ? (
            <>
              <Form.Item name="weight" label="Weight">
                <Input type="number" />
              </Form.Item>
              <Form.Item name="height" label="Height">
                <Input type="number" />
              </Form.Item>
              <Form.Item name="medical_records" label="medical records">
                <TextArea />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item name="degree" label="degree">
                <Input />
              </Form.Item>
              <Form.Item name="cv" label="cv">
                <Input />
              </Form.Item>
              <Form.Item name="office_location" label="office location">
                <Input />
              </Form.Item>
              <Form.Item name="expertise_tags" label="expertise tags">
                <TextArea />
              </Form.Item>
            </>
          )}
          <Form.Item
            wrapperCol={{
              offset: 18,
              span: 6,
            }}
          >
            <Button
              style={{ margin: "0 1em" }}
              type="secondary"
              onClick={() => {
                setShowEdit(false);
              }}
              data-testid="edit-profile-cancel-button"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              data-testid="edit-profile-submit-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div className="object-panel" data-testid="patient-panel-object-panel">
        <div className="object-info">
          <div className="object-personal-info">
            <div>
              <img
                className="info-profile"
                src={"http://185.141.107.81:1111" + user.profile_picture_url}
                alt="profile"
              />
            </div>
            <div>
              <span className="profile-name">{user.fullname}</span>
              <span className="phone-number">
                <PhoneOutlined style={{ fontSize: "150%" }} />
                {user.phone}
              </span>
              <span
                className="info-block-button"
                onClick={() => {
                  setShowEdit(true);
                }}
              >
                EDIT PROFILE
              </span>
            </div>
          </div>
          <div className="info">
            <h3>Info</h3>

            <span>{`${"Gender:" + user.sex} ${
              user.height ? user.height + "cm" : ""
            } ${user.weight ? user.weight + "kg" : ""}`}</span>
          </div>
          <div className="records">
            <h3>Records</h3>
            <span className="info-block-button" onClick={showRecordModal}>
              <span>Show Records</span>
            </span>
          </div>
          <div className="logout-button">
            <Button
              type="primary"
              onClick={() => {
                localStorage.setItem("token", "");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </div>
        </div>
        <ul className="object-menu">
          <li className="object-menu1">Today's consultation</li>
          <li className="object-menu2">Previous</li>
          <li className="object-menu3">Surgeries/Procedures</li>
          <li className="object-menu4">Clinical Notes</li>
          <li className="object-menu5">Tests</li>
          <li className="object-menu6">Diagnosis</li>
          <li className="object-menu7">Medication List</li>
          <li className="object-menu8">Vaccination</li>
        </ul>
      </div>
    </>
  );
}
