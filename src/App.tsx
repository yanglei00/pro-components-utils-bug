import React, { useRef } from 'react';
import {
  ProForm,
  EditableProTable,
} from "@ant-design/pro-components";

export default () => {
  const actionRef = useRef();
  return (
    <ProForm initialValues={{
      table: [{
        id: 0,
        subjectType: 'multiple',
      }]
    }} >
      <EditableProTable name="table" actionRef={actionRef} columns={[
        {
          title: '题型',
          dataIndex: 'subjectType',
          valueType: 'select',
          valueEnum: {
            multiple: { text: '多选题', status: 'Default' },
            radio: { text: '单选题', status: 'Warning' },
          },
          formItemProps: {
            rules: [{ required: true }]
          }
        },
        {
          title: '操作',
          valueType: 'option',
          render: (_, row) => [
            <a
              key="edit"
              onClick={() => {
                actionRef.current?.startEditable(row.id);
              }}
            >
              编辑
            </a>,
          ],
        },
      ]}
      />
    </ProForm>
  );
};
