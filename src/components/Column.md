```js
<Row display='flex'>
  <Column style={{ backgroundColor: 'LightPink' }} cols={2}>
    Col2
  </Column>
  <Column style={{ backgroundColor: 'PaleGreen' }} cols={3}>
    Col 3
  </Column>
  <Column style={{ backgroundColor: 'LightCyan' }} cols={7}>
    col 7
  </Column>
</Row>
```

### static methods
##### `asColumn(component: StyledComponent || React.Component)`
HoC which gives `cols` props to `component`. If `component` is a `StyledComponent`, it also receives `<Column />` behavior

###### StyledComponent
```js static

/// Button.jsx
import styled from 'styled-components';
import { asColumn } from 'components/Column';

const Button = asColumn(styled.button`
  background-color: LightCyan;
`);

export default Button

/// Page.jsx
...
render() {
  return (
    <Row>
      <h1>Page</h1>
      <Button cols={4}>Click me!</Button>
    </Row>
  )
}
```
###### Other components

```js static

/// Widget.jsx
import styled from 'styled-components';
import { asColumn } from 'components/Column';
import Button from 'components/Button';


const Widget = ({ cols }) => (<Custom><Button cols={cols}>Click Me!</Button></Widget></Custom>);

export default asColumn(Widget)


/// Page.jsx
...
render() {
  return (
    <Row>
      <h1>Page</h1>
      <Widget cols={4} />
    </Row>
  )
}
```

##### `column()`
An easier way to give `col` props and `<Column />` behavior to `StyledComponent`

```jsx static
/// MyColumn.jsx
import { column } from 'components/Column'

const MyColumn = styled.div`
  backgroundColor: blue
  {column}
`

/// Page.jsx
...
render() {
  return (
    <Row>
      <h1>Page</h1>
      <MyColumn cols={4} />
    </Row>
  )
}
```
