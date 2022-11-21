import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

type ButtonProps = {
  label: string;
  bgColor?: string;
  color?: string;
  icon?: string;
  width?: number;
  height?: number;
  onPress?: () => void;
};

function Button({
  label,
  color,
  bgColor,
  width,
  height,
  onPress,
}: ButtonProps) {
  const styles = StyleSheet.create({
    container: {
      width: width || "100%",
      height: height || 50,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: bgColor || "black",
    },
    label: {
      color: color || "white",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });

  function compileIcon() {
    // todo
    // Récupérer l'icône en fonction de la lbrairie
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress || (() => {})}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export { Button };
export default Button;
