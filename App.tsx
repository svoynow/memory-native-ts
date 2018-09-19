import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";

import flow from 'lodash/fp/flow';
import chunk from 'lodash/fp/chunk';
import map from 'lodash/fp/map';

import * as C from './Card';
import * as G from './Game';
import CardComponent from './CardComponent';
import { selectItem, continuePlaying, reset } from './Action';
import { Game, Item } from './Types';

const rowKey = (row: Array<Item>) => {
  return flow(
    map(({card}) => C.key(card)),
    (x) => x.join('-'),    
  )(row);
};

const initialState: () => Game = G.initialize;

const message = ({turnState}: Game) => {
  let m;
  switch(turnState.kind) {
  case 'NotStarted':
    m = "Choose a card";
    break;
  case 'OneCardFlipped':
    m = `Try to find the other ${turnState.item.card.animal}`;
    break;
  case 'TwoCardsFlipped':
    m = G.hasMatch(turnState) ? "A match! Click to continue" : "No match. Reset and try again";
    break;
  case 'GameComplete':
    m = "All done! Play again?";
    break;
  default:
    "something went wrong"
  }
  return m;
}


export default class App extends Component<{}, Game> {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  reduce = (action) => () => {
    this.setState((prevState) => G.doAction(action, prevState));
  }

  renderRow = (row) => {
    return (
      <Row key={rowKey(row)} style={{height: 75, marginTop: 10}}>
        {map(this.renderItem, row)}
      </Row>
    )
  }

  renderItem = (item) => {
    return (
      <Col key={C.key(item.card)}>
      <TouchableOpacity          
      onPress={this.reduce(selectItem(item))}
      style={styles.column}
      >
        <CardComponent item={item} />
      </TouchableOpacity>   
      </Col>     
    )
  }

  renderStatus = () => {
    let result;    
    switch(this.state.turnState.kind) {
    case 'NotStarted':
    case 'OneCardFlipped':
      result = <Text>{message(this.state)}</Text>;
      break;
    case 'TwoCardsFlipped':
      result = <Button title={message(this.state)} onPress={this.reduce(continuePlaying)} />;
      break;
    case 'GameComplete':
      result = <Button title={message(this.state)} onPress={this.reduce(reset)} />;
      break;
    default:
      result = <Text>Something went wrong</Text>;
    }
    return result;
  }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          {flow(           
            chunk(4),
            map(this.renderRow)
          )(this.state.tableau)}
        <Row style={{marginTop: 10}}>{this.renderStatus()}</Row>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 10
  }
});
