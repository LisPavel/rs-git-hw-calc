import {FC, PropsWithChildren} from 'react';
import {Avatar, Layout} from 'antd';
import {UserOutlined} from '@ant-design/icons';


export const CommonLayout: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <Layout>
      <Layout.Header>
        <Avatar shape="square" size={'small'} icon={<UserOutlined />} />
      </Layout.Header>
      <Layout.Content>
        {children}
      </Layout.Content>
      <Layout.Footer> </Layout.Footer>
    </Layout>
  )
}
