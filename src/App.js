import React, {Component} from 'react';
import './App.css';

import Box from './components/Box';
import Button from './components/Button';
import Text from './components/Text';
import Flex from './components/Flex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://camo.githubusercontent.com/8c8a155bd4009cd80f4249a0991ef1968f1366a3/68747470733a2f2f6a786e626c6b2e636f6d2f7374796c65642d73797374656d2f6c6f676f2e737667' className="App-logo" alt="logo"/>
          <p>Testing styled-system</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Box bg="blue_sky" m={4} display='flex'>
          <Box width={1}>1</Box>
          <Box width={1}>2</Box>
          <Box width={1}>3</Box>
          <Box width={1}>4</Box>
        </Box>

        <Box m={4} display='flex'>
          <Button variant='primary' width={1/2}>
            texto
          </Button>

          <Button variant='secondary' width={1/2}>
            texto
          </Button>

          <Button variant='tertiary' width={1/2}>
            texto
          </Button>
        </Box>

        <Text fontSize={4}>Lorem ipsum</Text>

        <Box m={4}>
          <Box my={2} bg='blue_sky' width={[1]}>
            1
          </Box>

          <Box display="flex">
            <Box bg='black' width={[1, 1/2]}>
              1
            </Box>

            <Box bg="navy" width={[1, 1/2]}>
              1
            </Box>
          </Box>
        </Box>

        <Flex m={4} flexDirection='column'>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
        </Flex>

        <Flex m={2}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
        </Flex>

      </div>
    );
  }
}

export default App;
