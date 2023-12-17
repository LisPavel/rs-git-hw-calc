import './App.css'
import {ConfigProvider} from 'antd';
import {ANT_THEME_CONFIG} from 'src/constants/configTheme.ts';
import {CommonLayout} from 'src/components/CommonLayout';

function App() {

  return (
    <ConfigProvider theme={ANT_THEME_CONFIG}>
      <CommonLayout />
    </ConfigProvider>
  )
}

export default App
