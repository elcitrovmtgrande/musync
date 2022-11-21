import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from './Icon';

type ButtonProps = {
  label: string;
  bgColor?: string;
  color?: string;
  icon?: string;
  iconColor?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  style?: object;
  onPress?: () => void;
};

function Button({
  icon,
  label,
  color,
  iconColor,
  fontSize,
  bgColor,
  width,
  height,
  style,
  onPress,
}: ButtonProps) {
  const styles = StyleSheet.create({
    container: {
      width: width || "100%",
      height: height || 50,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: bgColor || "black",
    },
    label: {
      color: color || "white",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: fontSize || 14,
    },
    icon: {
      marginRight: 12,
    },
  });

  function compileIcon() {
    // todo
    // Récupérer l'icône en fonction de la lbrairie
  }

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress || (() => { })}>
      {icon && (
        <Icon
          style={styles.icon}
          name={icon}
          color={iconColor || color || 'white'}
          size={fontSize || 22} />
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export { Button };
export default Button;
