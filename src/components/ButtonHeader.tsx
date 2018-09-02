import React from "react";
import { View, TouchableOpacity } from "react-native";

interface IProps {
  children: any;
  onPress: any;
  disabled?: any;
  side: any;
}

const ButtonHeader: React.SFC<IProps> = ({
  children,
  onPress,
  disabled,
  side
}) => {
  return (
    <View
      style={[
        { marginRight: side === "right" ? 15 : 0 },
        { marginLeft: side === "left" ? 15 : 0 }
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonHeader;
