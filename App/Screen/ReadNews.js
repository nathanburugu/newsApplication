import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Color from "../shared/Color";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

const ReadNews = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  useEffect(() => {
    console.log("news", news);
  }, []);

  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description,
    });
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => shareNews()}>
          <Ionicons name="share-social-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 10 }}
      />
      <Text
        style={{
          color: Color.primary,
          marginTop: 15,
        }}
      >
        {news.source.name}
      </Text>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {news.title}
      </Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          color: Color.gray,
          lineHeight: 25,
        }}
      >
        {news.description}
      </Text>
      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync("news.url")}>
        <Text
          style={{
            color: Color.primary,
            marginTop: 15,
            fontWeight: "bold",
          }}
        >
          Read More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReadNews;

const styles = StyleSheet.create({});
