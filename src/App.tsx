import './App.css'
import {ConfigProvider} from 'antd';
import {ANT_THEME_CONFIG} from 'src/constants/configTheme.ts';

function App() {

  return (
    <ConfigProvider theme={ANT_THEME_CONFIG}>

    </ConfigProvider>
  )
}

export default App
