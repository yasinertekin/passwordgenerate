import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    height: 40,
    width: 300,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  strengthText: {
    marginTop: 20,
    color: "#FFFFFF",
  },
});
