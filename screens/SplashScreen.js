import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={["#00316E", "#004A91", "#00336F"]}
      locations={[0, 0.53, 1]}
      style={styles.container}
      start={{ x: 0.08, y: 0 }}
      end={{ x: 0.95, y: 1 }}
    >
      <View style={styles.glowOne} pointerEvents="none" />
      <View style={styles.glowTwo} pointerEvents="none" />
      <View style={styles.trailGroup} pointerEvents="none">
        <View style={[styles.trail, styles.trailWide]} />
        <View style={[styles.trail, styles.trailMedium]} />
        <View style={[styles.trail, styles.trailThin]} />
      </View>
      <View style={styles.orbOne} pointerEvents="none" />
      <View style={styles.orbTwo} pointerEvents="none" />
      <View style={styles.orbThree} pointerEvents="none" />

      <View style={styles.content}>
        <View style={styles.logoTile}>
          <Ionicons name="shield-checkmark" size={31} color="#FFFFFF" />
        </View>
        <Text style={styles.brandName}>PAFMS</Text>
        <Text style={styles.tagline}>ASSET INTELLIGENCE</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>

        <View style={styles.loadingRow}>
          <Ionicons name="lock-closed" size={14} color="#20C7F4" />
          <Text style={styles.loadingText}>Securely loading...</Text>
        </View>

        <View style={styles.environmentBadge}>
          <View style={styles.blueDot} />
          <Text style={styles.environmentText}>ENCLAVED ENVIRONMENT</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  glowOne: {
    position: "absolute",
    width: "104%",
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "rgba(0, 132, 224, 0.2)",
    right: "-39%",
    bottom: "19%",
    transform: [{ rotate: "-18deg" }],
  },
  glowTwo: {
    position: "absolute",
    width: "132%",
    height: "26%",
    borderRadius: 999,
    backgroundColor: "rgba(30, 145, 226, 0.13)",
    left: "-27%",
    bottom: "27%",
    transform: [{ rotate: "-29deg" }],
  },
  trailGroup: {
    position: "absolute",
    left: "-21%",
    right: "-13%",
    top: "38%",
    height: "28%",
    transform: [{ rotate: "-26deg" }],
  },
  trail: {
    position: "absolute",
    borderRadius: 999,
  },
  trailWide: {
    left: 0,
    right: 0,
    top: 76,
    height: 20,
    backgroundColor: "rgba(42, 139, 216, 0.18)",
  },
  trailMedium: {
    left: "12%",
    right: "5%",
    top: 44,
    height: 9,
    backgroundColor: "rgba(89, 166, 226, 0.11)",
  },
  trailThin: {
    left: "29%",
    right: "2%",
    top: 24,
    height: 3,
    backgroundColor: "rgba(93, 178, 240, 0.13)",
  },
  orbOne: {
    position: "absolute",
    width: "8%",
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "rgba(72, 167, 232, 0.12)",
    backgroundColor: "rgba(72, 167, 232, 0.05)",
    right: "24%",
    top: "34%",
  },
  orbTwo: {
    position: "absolute",
    width: "11%",
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "rgba(72, 167, 232, 0.1)",
    backgroundColor: "rgba(72, 167, 232, 0.04)",
    right: "7%",
    top: "40%",
  },
  orbThree: {
    position: "absolute",
    width: "6%",
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "rgba(72, 167, 232, 0.09)",
    left: "7%",
    bottom: "17%",
  },
  content: {
    alignItems: "center",
    marginTop: -8,
  },
  logoTile: {
    width: "18%",
    maxWidth: 58,
    minWidth: 48,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 21,
    shadowColor: "#49A6E8",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.35,
    shadowRadius: 28,
    elevation: 12,
  },
  brandName: {
    color: "#FFFFFF",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 23,
    fontWeight: "800",
    letterSpacing: 0,
    marginBottom: 16,
  },
  tagline: {
    color: "rgba(229, 240, 255, 0.68)",
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 2.1,
  },
  bottomSection: {
    position: "absolute",
    bottom: "3.5%",
    alignItems: "center",
    width: "100%",
  },
  progressTrack: {
    width: "63%",
    maxWidth: 220,
    height: 1,
    backgroundColor: "rgba(115, 172, 221, 0.32)",
    marginBottom: 19,
  },
  progressFill: {
    width: "33%",
    height: 2,
    backgroundColor: "#26C7F6",
    marginTop: -0.5,
  },
  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  loadingText: {
    color: "rgba(230, 242, 255, 0.72)",
    fontFamily: "Inter_400Regular",
    fontSize: 9,
    marginLeft: 8,
  },
  environmentBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(68, 155, 224, 0.18)",
    borderColor: "rgba(106, 184, 242, 0.23)",
    borderRadius: 20,
    borderWidth: 1,
    minWidth: "46%",
    justifyContent: "center",
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  blueDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#20C7F4",
    marginRight: 8,
  },
  environmentText: {
    color: "rgba(227, 239, 255, 0.48)",
    fontFamily: "Inter_700Bold",
    fontSize: 7.5,
    fontWeight: "700",
    letterSpacing: 2.5,
  },
});
