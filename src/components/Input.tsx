import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from "react-native-elements";

interface IProps {
  onChange: any;
  onTouch: any;
  name: any;
  label: any;
  error: any;
}

class Input extends PureComponent<IProps> {
  _handleChange = (value: any) => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { root } = styles;
    const { label, error, ...rest } = this.props;

    return (
      <View style={root}>
        <FormLabel>{label}</FormLabel>
        <FormInput
          placeholder={label}
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          {...rest}
        />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "90%",
    alignSelf: "center"
  }
});

export default Input;
