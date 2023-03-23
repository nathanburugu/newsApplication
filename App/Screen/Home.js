import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import CategoryTextSlider from "../components/Home/CategoryTextSlider";
import Color from "../shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../components/Home/TopHeadlineSlider";
import HeadlineList from "../components/Home/HeadlineList";
import GlobalApi from "../services/GlobalApi";

const Home = () => {
  const [newsList, setNewsList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory("latest");
  }, []);

  const getNewsByCategory = async (category) => {
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data;
    // console.log(result);
    setNewsList(result.articles);
    setLoading(false);
  };

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    console.log(result);
    setNewsList(result.articles);
  };
  return (
    <ScrollView style={{ backgroundColor: Color.white }}>
      {/* Loading */}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.appName}>Nairobi Gossip club</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>
      {/* category List */}
      <CategoryTextSlider
        selectCategory={(category) => getNewsByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Color.primary}
          style={{ marginTop: Dimensions.get("screen").height * 0.45 }}
        />
      ) : (
        <View>
          {/* Headline slider */}
          <TopHeadlineSlider newsList={newsList} />
          {/* headline list */}
          <HeadlineList newsList={newsList} />
        </View>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: Color.primary,
  },
});
