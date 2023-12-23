import {Badge, Button, Card, Col, Input, Layout, Row} from 'antd';
import {useState} from 'react';
import {isEmpty} from 'lodash';

export const Calculator = () => {
  const numberActions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [currentNumber, setCurrentNumber] = useState<string>('');
  const mathActions: string[] = ['+', '-', '*', '/', '%'];
  const addActions: string[] = [ 'C', 'AC', '='];

  const [historyList, setHistoryList] = useState<string[]>([]);

  const doMathAction = (action: string) => {
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

  const doAddAction = (action: string) => {
    switch(action) {
      case `AC`: {
        setCurrentNumber('');
        setHistoryList([]);
        break;
      }
      case 'C': {
        setCurrentNumber(prev => prev.slice(0, prev.length - 1))
        break;
      }
      case '=': {
        const currentHistory = [...historyList, currentNumber, ""];
        setCurrentNumber(`${calc(currentHistory) || ""}`);
        setHistoryList([]);
        break;
      }
    }
  }

  const onAddNumber = (newNumber: string | number) => {
    setCurrentNumber(`${currentNumber}${newNumber}`);
  }

  const onChange = (newNumber: string | number) => {
    setCurrentNumber(`${newNumber}`);
  }

  const calc = (history = historyList) => {
    const calcArr = [...history];
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
          <Col span={24}>
            <Badge.Ribbon
              color={'green'}
              text={`= ${calc()}`}
            >
              <Card
                title="Калькулятор"
                size="default"
              >
                <Layout.Content>
                  <Row gutter={[0, 8]}>
                    <Col span={24}>
                      <p>
                        {historyList.join(' ') || '0'}
                      </p>
                      <hr />
                    </Col>
                    <Col span={24}>
                      <Input
                        size={'large'}
                        value={currentNumber}
                        onChange={(e) => onChange(e.currentTarget.value)}
                      />
                    </Col>
                    <Col span={16}>
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
                            <Button onClick={() => doMathAction(n)} shape={'circle'} size={'large'}>{n}</Button>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                    <Col span={4}>
                      <Row gutter={[8, 8]}>
                        {addActions.map(n => (
                          <Col span={24} key={n}>
                            <Button onClick={() => doAddAction(n)} shape={'circle'} size={'large'}>{n}</Button>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Layout.Content>
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
