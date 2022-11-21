import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

type IconProps = {
  name: string;
  size: number;
  color: string;
};

const Icon = ({ name, size, color }: IconProps) => {
  const [library, iconName] = name.split(".");

  switch (library) {
    case "FontAwesome5":
      return <FontAwesome5 name={iconName} size={size} color={color} />;
    default:
      return <FontAwesome5 name={iconName} size={size} color={color} />;
  }
};

export { Icon };
export default Icon;
