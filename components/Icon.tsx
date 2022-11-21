import React from "react";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Zocial,
} from "@expo/vector-icons";

type IconProps = {
  name: string | any;
  size: number;
  color: string;
  style?: object;
}

const Icon = ({ name, size, color, style }: IconProps) => {
  const [library, iconName] = name.split(".");

  switch (library) {
    case "FontAwesome5":
      return <FontAwesome5 name={iconName} size={size} color={color} style={style} />;
    case "Ionicons":
      return <Ionicons name={iconName} size={size} color={color} style={style} />;
    case "MaterialCommunityIcons":
      return <MaterialCommunityIcons name={iconName} size={size} color={color} style={style} />;
    case "MaterialIcons":
      return <MaterialIcons name={iconName} size={size} color={color} style={style} />;
    case "Zocial":
      return <Zocial name={iconName} size={size} color={color} style={style} />;
    default:
      return <FontAwesome5 name={iconName} size={size} color={color} style={style} />;
  }
};

export { Icon };
export default Icon;
