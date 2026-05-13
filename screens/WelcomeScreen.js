import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerLogo}>PAFMS</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentWrap}>
          <View style={styles.enterpriseBadge}>
            <Ionicons name="shield-checkmark" size={11} color="#0059B8" />
            <Text style={styles.enterpriseText}>ENTERPRISE GRADE SECURITY</Text>
          </View>

          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>Welcome to the</Text>
            <Text style={styles.heroHighlight}>future of finance.</Text>
            <Text style={styles.heroDescription}>
              A private digital vault for your high-net-worth portfolio.
              Experience stability, transparency, and sophisticated asset
              management.
            </Text>
          </View>

          <View style={styles.ctaContainer}>
            <TouchableOpacity
              activeOpacity={0.88}
              style={styles.primaryButton}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.85} style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.securityBadges}>
            <View style={styles.securityItem}>
              <Ionicons name="lock-closed-outline" size={14} color="#8A98A8" />
              <Text style={styles.securityText}>SSL SECURED</Text>
            </View>
            <View style={styles.securityItem}>
              <Ionicons
                name="shield-checkmark-outline"
                size={14}
                color="#8A98A8"
              />
              <Text style={styles.securityText}>AES-256 ENCRYPTED</Text>
            </View>
          </View>

          <View style={styles.assetsCard}>
            <View style={styles.assetsHeader}>
              <View>
                <Text style={styles.assetsLabel}>TOTAL ASSETS</Text>
                <Text style={styles.assetsValue}>$4,820,150.00</Text>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={styles.refreshButton}>
                <MaterialCommunityIcons
                  name="wallet-outline"
                  size={17}
                  color="#0059B8"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.chartContainer}>
              {[26, 39, 32, 51, 45, 58, 43].map((barHeight, index) => (
                <View
                  key={index}
                  style={[
                    styles.bar,
                    {
                      height: barHeight,
                      backgroundColor: [
                        "rgba(111, 157, 203, 0.42)",
                        "rgba(111, 157, 203, 0.42)",
                        "rgba(72, 126, 183, 0.55)",
                        "rgba(111, 157, 203, 0.42)",
                        "#6F9DCB",
                        "rgba(72, 126, 183, 0.55)",
                        "#2F68A9",
                      ][index],
                    },
                  ]}
                />
              ))}
            </View>
          </View>

          <View style={styles.statusCardsContainer}>
            <View style={styles.vaultStatusCard}>
              <View style={styles.vaultRing}>
                <View style={styles.vaultIconContainer}>
                  <Ionicons name="shield" size={22} color="#0059B8" />
                </View>
                <View style={styles.vaultCheck}>
                  <Ionicons name="checkmark" size={9} color="#FFFFFF" />
                </View>
              </View>
              <Text style={styles.statusLabel}>VAULT STATUS</Text>
              <Text style={styles.statusProtected}>PROTECTED</Text>
            </View>

            <View style={styles.performanceCard}>
              <MaterialCommunityIcons
                name="chart-line"
                size={24}
                color="#00769A"
                style={styles.performanceIcon}
              />
              <Text style={styles.performanceValue}>+12.4%</Text>
              <Text style={styles.performanceLabel}>Performance</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF6FF",
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 34,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 43,
    marginHorizontal: -18,
    paddingHorizontal: 18,
    backgroundColor: "#F6F8FD",
    marginBottom: 26,
    alignSelf: "stretch",
  },
  contentWrap: {
    width: "100%",
    maxWidth: 360,
  },
  headerLogo: {
    color: "#0054A6",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 14,
    fontWeight: "800",
  },
  skipText: {
    color: "#202124",
    fontFamily: "Inter_400Regular",
    fontSize: 9,
    fontWeight: "400",
  },
  enterpriseBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#D9EFFB",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 21,
  },
  enterpriseText: {
    color: "#0059B8",
    fontFamily: "Inter_700Bold",
    fontSize: 9,
    fontWeight: "700",
    marginLeft: 4,
  },
  heroSection: {
    marginBottom: 27,
  },
  heroTitle: {
    color: "#202124",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 25,
    fontWeight: "800",
    lineHeight: 28,
  },
  heroHighlight: {
    color: "#0059B8",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 25,
    fontWeight: "800",
    lineHeight: 28,
    marginBottom: 12,
  },
  heroDescription: {
    color: "#566272",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 17,
    width: "100%",
  },
  ctaContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 16,
    marginBottom: 27,
  },
  primaryButton: {
    flex: 1.15,
    minHeight: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0059B8",
    borderRadius: 7,
    shadowColor: "#0059B8",
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 12,
    fontWeight: "800",
  },
  secondaryButton: {
    flex: 1,
    minHeight: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#0059B8",
    borderRadius: 7,
    borderWidth: 1.5,
  },
  secondaryButtonText: {
    color: "#0059B8",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 12,
    fontWeight: "800",
  },
  securityBadges: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 22,
    marginBottom: 21,
  },
  securityItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  securityText: {
    color: "#8A98A8",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.1,
    marginLeft: 5,
  },
  assetsCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 17,
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 12,
    shadowColor: "#9CC7E5",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.24,
    shadowRadius: 24,
    elevation: 10,
  },
  assetsHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  assetsLabel: {
    color: "#4B5563",
    fontFamily: "Inter_500Medium",
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 0.8,
    marginBottom: 5,
  },
  assetsValue: {
    color: "#0059B8",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 18,
    fontWeight: "800",
  },
  refreshButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCEFFB",
    borderRadius: 17,
  },
  chartContainer: {
    height: 67,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "#F1F8FF",
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingBottom: 5,
    overflow: "hidden",
  },
  bar: {
    flex: 1,
    maxWidth: "13%",
    minWidth: 16,
    marginHorizontal: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  statusCardsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    gap: 12,
  },
  vaultStatusCard: {
    flex: 1.12,
    height: 120,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 9,
    paddingTop: 12,
    shadowColor: "#9CC7E5",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.22,
    shadowRadius: 22,
    elevation: 8,
  },
  vaultRing: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BDD7F0",
    borderRadius: 23,
    borderWidth: 3,
    marginBottom: 10,
  },
  vaultIconContainer: {
    width: 31,
    height: 31,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F8FF",
    borderRadius: 16,
  },
  vaultCheck: {
    position: "absolute",
    top: -5,
    right: -4,
    width: 13,
    height: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22BFEA",
    borderRadius: 7,
  },
  statusLabel: {
    color: "#202124",
    fontFamily: "Inter_500Medium",
    fontSize: 8.5,
    fontWeight: "500",
  },
  statusProtected: {
    color: "#0059B8",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 8.5,
    fontWeight: "800",
  },
  performanceCard: {
    flex: 1,
    height: 80,
    backgroundColor: "#FFFFFF",
    borderRadius: 9,
    paddingLeft: 17,
    paddingTop: 16,
    shadowColor: "#9CC7E5",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.18,
    shadowRadius: 22,
    elevation: 8,
  },
  performanceIcon: {
    marginBottom: -2,
  },
  performanceValue: {
    color: "#202124",
    fontFamily: "Inter_500Medium",
    fontSize: 9,
    fontWeight: "500",
    lineHeight: 11,
    marginBottom: 5,
  },
  performanceLabel: {
    color: "#202124",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 11,
    fontWeight: "800",
    lineHeight: 13,
  },
});
