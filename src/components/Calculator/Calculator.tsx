import {Button, Col, Input, Layout, Row, Typography} from 'antd';
import {useState} from 'react';

export const Calculator = () => {
  const numberActions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const mathActions: string[] = ['+', '-', '*', '/', '%'];

  const [historyList, setHistoryList] = useState<string[]>([]);

  const addHistoryItem = (historyItem: string) => setHistoryList([...historyList, historyItem]);

  const goAction = (action: string | number) => {
    addHistoryItem(`${action}`);
  }

  return (
    <Layout style={{
      maxWidth: '550px',
      margin: '0 auto',
    }}>
      <Layout.Content>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Typography>
              <p>
                {historyList.join(' ')}
              </p>
            </Typography>
          </Col>
          <Col span={24}>
            <Input size={'large'} value={3} disabled />
          </Col>
          <Col span={20}>
            <Row gutter={[8, 8]}>
              {numberActions.map(n => (
                <Col span={7} key={n}>
                  <Button onClick={() => goAction(n)} shape={'circle'} size={'large'}>{n}</Button>
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={[8, 8]}>
              {mathActions.map(n => (
                <Col span={24} key={n}>
                  <Button onClick={() => goAction(n)} shape={'circle'} size={'large'}>{n}</Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
