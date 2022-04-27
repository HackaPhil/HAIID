import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            resizeMode:"contain",
            height: 200,
            width: 100,
            marginBottom: 300
            
          }}
          source={require("logo.png")}
        />
       
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "1%",
    marginTop: "5%",
    marginRight: "5%",
    textAlign: "center"
  }
});

export default DisplayAnImageWithStyle;