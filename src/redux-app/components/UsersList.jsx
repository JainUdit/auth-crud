import { useEffect, useState } from "react";
import { Table, Space, Button, Modal, Popconfirm } from "antd";
import { StyledModal, StyledAddButtonWrapper } from "./Style";
import history from "../utils/history";

const filterUserData = (usersListData) =>
  usersListData?.map((user) => ({
    ...user,
    ...{ key: user.id },
  }));

export const UsersList = (props) => {
  const { usersData, usersListRequest, deleteUserRequest } = props;
  const { usersListData } = usersData;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState({});
  const [dataSource, setDataSource] = useState(
    filterUserData(usersListData || [])
  );
  // let dataSource = {};

  useEffect(() => {
    usersListRequest();
  }, []);

  useEffect(() => {
    setDataSource(filterUserData(usersListData));
  }, [usersListData]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleView = (id) => {
    const data = dataSource.filter((user) => user.id === id)?.[0];
    setSelectedUserData(data);
    showModal();
  };

  const handleDelete = (id) => {
    deleteUserRequest(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button onClick={() => handleView(record.id)}>View</Button>
          <Button onClick={() => history.push(`/list/edit/${record.id}`)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
      <StyledAddButtonWrapper>
        <Button type="primary" onClick={() => history.push(`/list/add`)}>
          Add
        </Button>
      </StyledAddButtonWrapper>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <StyledModal>
          <span>{`Name: ${selectedUserData?.name}`}</span>
          <span>{`Email: ${selectedUserData?.email}`}</span>
          <span>{`Phone: ${selectedUserData?.phone}`}</span>
          <span>{`Website: ${selectedUserData?.website}`}</span>
        </StyledModal>
      </Modal>
    </>
  );
};
