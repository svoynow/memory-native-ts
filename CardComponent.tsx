import React, { Component } from 'react';
import { Image, View} from 'react-native';
import * as I from './Item';
import { Item } from './Types';

interface CardProps {
  item: Item;
};

// externalize styles
export default class CardComponent extends Component<CardProps, {}> {
  render() {
    return (
      <View>
        <Image
          source={I.image(this.props.item)}
          style={{ width: 75, height: 75 }}
        />
      </View>
    );
  }
}
