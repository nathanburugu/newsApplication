import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Color from "../../shared/Color";
import { useNavigation } from "@react-navigation/native";

const HeadlineList = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item, index }) => (
          <View>
            <View
              style={{
                height: 2,
                backgroundColor: Color.lightGray,
                marginTop: 15,
              }}
            ></View>
            <TouchableOpacity
              style={{
                marginTop: 15,
                display: "flex",
                flexDirection: "row",
              }}
              onPress={() => navigation.navigate("read-news", { news: item })}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 10,
                }}
              />
              <View style={{ marginRight: 135, marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                  numberOfLines={4}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: Color.primary,
                    marginTop: 5,
                  }}
                >
                  {item.source.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HeadlineList;

const styles = StyleSheet.create({});
