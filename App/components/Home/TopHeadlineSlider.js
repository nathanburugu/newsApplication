import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import GlobalApi from "../../services/GlobalApi";
import { Image } from "react-native";
import Color from "../../shared/Color";
import { useNavigation } from "@react-navigation/native";

const TopHeadlineSlider = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        horizontal
        data={newsList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("read-news", { news: item })}
            style={{
              width: Dimensions.get("screen").width * 0.83,
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.77,
                borderRadius: 10,
              }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 20, fontWeight: "900" }}
            >
              {item?.title}
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: Color.primary,
              }}
            >
              {item?.source.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadlineSlider;

const styles = StyleSheet.create({});
