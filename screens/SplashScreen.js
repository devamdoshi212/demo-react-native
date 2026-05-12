import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={["#0A1628", "#0F2847", "#0A1628"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.gridOverlay} pointerEvents="none">
        {Array.from({ length: 150 }).map((_, index) => (
          <View key={index} style={styles.gridCell} />
        ))}
      </View>

      <View style={styles.content}>
        <LinearGradient
          colors={["#1E3A5F", "#2D5A87"]}
          style={styles.logoBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.checkmarkCircle}>
            <Ionicons name="checkmark" size={32} color="#FFFFFF" />
          </View>
        </LinearGradient>

        <Text style={styles.brandName}>PAFMS</Text>
        <Text style={styles.tagline}>ASSET INTELLIGENCE</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.loadingRow}>
          <Ionicons name="lock-closed" size={14} color="#6B7B8C" />
          <Text style={styles.loadingText}>Securely loading...</Text>
        </View>

        <View style={styles.environmentBadge}>
          <View style={styles.greenDot} />
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
  },
  gridOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    opacity: 0.1,
  },
  gridCell: {
    width: width / 10,
    height: height / 15,
    borderWidth: 0.5,
    borderColor: "#3B5998",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: 120,
    height: 120,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  checkmarkCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
  },
  brandName: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: 8,
    marginBottom: 8,
  },
  tagline: {
    color: "#8B9DB3",
    fontSize: 12,
    letterSpacing: 4,
  },
  bottomSection: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
  },
  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  loadingText: {
    color: "#8B9DB3",
    fontSize: 13,
    marginLeft: 8,
  },
  environmentBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 8,
  },
  environmentText: {
    color: "#8B9DB3",
    fontSize: 11,
    letterSpacing: 1.5,
  },
});
