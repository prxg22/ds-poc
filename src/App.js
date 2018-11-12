import React, {Component} from 'react';
import './App.css';

import Box from './Box';
import Button from './Button';
import Text from './Text';
import Flex from './Flex';
import Row from './Row';
import Column from './Column';

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

        <Box background="#eeeeee" m={4} display='flex'>
          <Box width={1}>1</Box>
          <Box width={1}>2</Box>
          <Box width={1}>3</Box>
          <Box width={1}>4</Box>
        </Box>

        <Box m={4} display='flex'>
          <Button variant='primary' width={1/2} text="texto" />

          <Button variant='secondary' width={1/2}>
            texto
          </Button>

          <Button variant='tertiary' width={1/2}>
            texto
          </Button>
        </Box>

        <Text fontSize={4} text="Lorem ipsum" />

        <Box m={4}>
          <Box my={2} background='#eeeeee' width={[1]}>
            1
          </Box>

          <Box display="flex">
            <Box background='#eeeeee' width={[1, 1/2]}>
              1
            </Box>

            <Box background='#eeeeee' width={[1, 1/2]}>
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

        <Row flexWrap="wrap">
          <Column cols={4}>1</Column>
          <Column cols={4}>2</Column>
          <Column cols={4}>3</Column>
        </Row>
      </div>
    );
  }
}

export default App;
