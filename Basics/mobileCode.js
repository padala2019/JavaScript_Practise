import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const helper = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(helper);
    };
  }, [value, delay]);
  return debounceValue;
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceSearcheTerm = useDebounce(searchTerm, 400);
  return (
    <View>
      <Text>SearchBar</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
