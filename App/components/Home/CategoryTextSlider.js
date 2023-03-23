import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Color from "../../shared/Color";

const CategoryTextSlider = ({ selectCategory }) => {
  const [active, setActive] = React.useState(1);
  const categoryList = [
    {
      id: 1,
      name: "Politics",
    },
    {
      id: 2,
      name: "Sports",
    },
    {
      id: 3,
      name: "Entertainment",
    },
    {
      id: 4,
      name: "Business",
    },
    {
      id: 5,
      name: "Lifestyle",
    },
    {
      id: 6,
      name: "Fashion",
    },
  ];

  const onCategoryPress = (id) => {
    setActive(id);
  };
  return (
    <View style={{ marginTop: 10 }}>
      {
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                onCategoryPress(item.id);
                selectCategory(item.name);
              }}
            >
              <Text
                style={
                  item.id === active ? styles.activeText : styles.unselectText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  );
};

export default CategoryTextSlider;

const styles = StyleSheet.create({
  unselectText: {
    fontSize: 20,
    fontWeight: "800",
    color: "black",
    marginRight: 15,
  },
  activeText: {
    fontSize: 20,
    fontWeight: "900",
    color: Color.primary,
    marginRight: 15,
  },
});
