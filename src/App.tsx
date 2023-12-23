import './App.css'
import {ConfigProvider} from 'antd';
import {ANT_THEME_CONFIG} from 'src/constants/configTheme.ts';
import {CommonLayout} from 'src/components/CommonLayout';
import {Calculator} from 'src/components/Calculator';

function App() {

  return (
    <ConfigProvider theme={ANT_THEME_CONFIG}>
      <CommonLayout>
        <Calculator />
      </CommonLayout>
    </ConfigProvider>
  )
}

export default App
