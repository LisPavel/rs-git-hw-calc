import {Badge, Button, Col, Input, Layout, Row, Typography} from 'antd';
import {useState} from 'react';
import {isEmpty} from 'lodash';

export const Calculator = () => {
  const numberActions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [currentNumber, setCurrentNumber] = useState<string>('');
  const mathActions: string[] = ['+', '-', '*', '/', '%'];

  const [historyList, setHistoryList] = useState<string[]>([]);

  const doAction = (action: string) => {
    const lastIndex = historyList.length - 1;
    if (!isEmpty(currentNumber)) {
      setHistoryList([...historyList, currentNumber, action]);
      setCurrentNumber('');
    } else {
      const res = [...historyList];
      res[lastIndex] = action
      setHistoryList(res);
    }
  }

  const onAddNumber = (newNumber: string | number) => {
    setCurrentNumber(`${currentNumber}${newNumber}`);
  }

  const onChange = (newNumber: string | number) => {
    setCurrentNumber(`${newNumber}`);
  }

  const calc = () => {
    const calcArr = [...historyList];
    calcArr.pop();
    return eval(calcArr.join(' ')) || 0;
  }

  return (
    <Layout style={{
      maxWidth: '550px',
      margin: '0 auto',
    }}>
      <Layout.Content>
        <Row gutter={[0, 8]}>
          <Col span={20}>
            <Typography>
              <p>
                {historyList.join(' ')}
              </p>
            </Typography>
          </Col>
          <Col span={4}>
            <Typography>
              <Badge.Ribbon
                color={'green'}
                text={`= ${calc()}`}
              />
            </Typography>
          </Col>
          <Col span={24}>
            <Input
              size={'large'}
              value={currentNumber}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
          </Col>
          <Col span={20}>
            <Row gutter={[8, 8]}>
              {numberActions.map(n => (
                <Col span={7} key={n}>
                  <Button onClick={() => onAddNumber(n)} shape={'circle'} size={'large'}>{n}</Button>
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={[8, 8]}>
              {mathActions.map(n => (
                <Col span={24} key={n}>
                  <Button onClick={() => doAction(n)} shape={'circle'} size={'large'}>{n}</Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
