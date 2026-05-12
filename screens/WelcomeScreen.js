import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

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

        <View style={styles.enterpriseBadge}>
          <Ionicons name="shield-checkmark" size={14} color="#2196F3" />
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
            activeOpacity={0.85}
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
            <Ionicons name="lock-closed" size={14} color="#6B7B8C" />
            <Text style={styles.securityText}>SSL SECURED</Text>
          </View>
          <View style={styles.securityItem}>
            <Ionicons name="shield" size={14} color="#6B7B8C" />
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
              <Ionicons name="refresh" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.chartContainer}>
            {[60, 45, 75, 55, 80, 65, 90, 70, 85, 95, 75, 88].map(
              (barHeight, index) => (
                <View
                  key={index}
                  style={[
                    styles.bar,
                    {
                      height: barHeight,
                      backgroundColor:
                        index >= 6 ? "#3B82F6" : "rgba(59, 130, 246, 0.3)",
                    },
                  ]}
                />
              )
            )}
          </View>
        </View>

        <View style={styles.statusCardsContainer}>
          <View style={styles.statusCard}>
            <View style={styles.vaultIconContainer}>
              <Ionicons name="shield-checkmark" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.statusLabel}>VAULT STATUS</Text>
            <Text style={styles.statusProtected}>PROTECTED</Text>
          </View>

          <View style={styles.statusCard}>
            <View style={styles.performanceIconContainer}>
              <MaterialCommunityIcons
                name="chart-line"
                size={24}
                color="#0A1628"
              />
            </View>
            <Text style={styles.performanceValue}>+12.4%</Text>
            <Text style={styles.performanceLabel}>Performance</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    marginBottom: 24,
  },
  headerLogo: {
    color: "#0A1628",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 2,
  },
  skipText: {
    color: "#6B7B8C",
    fontSize: 14,
  },
  enterpriseBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#EBF5FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  enterpriseText: {
    color: "#2196F3",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 1,
    marginLeft: 6,
  },
  heroSection: {
    marginBottom: 24,
  },
  heroTitle: {
    color: "#0A1628",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 4,
  },
  heroHighlight: {
    color: "#2196F3",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 16,
  },
  heroDescription: {
    color: "#6B7B8C",
    fontSize: 14,
    lineHeight: 22,
  },
  ctaContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  primaryButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0A1628",
    borderRadius: 8,
    paddingVertical: 16,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#0A1628",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 16,
  },
  secondaryButtonText: {
    color: "#0A1628",
    fontSize: 15,
    fontWeight: "600",
  },
  securityBadges: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginBottom: 24,
  },
  securityItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  securityText: {
    color: "#6B7B8C",
    fontSize: 10,
    letterSpacing: 0.5,
    marginLeft: 6,
  },
  assetsCard: {
    backgroundColor: "#0A1628",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  assetsHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  assetsLabel: {
    color: "#8B9DB3",
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: 4,
  },
  assetsValue: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  refreshButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
  },
  chartContainer: {
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  bar: {
    width: Math.max((width - 96) / 12 - 4, 8),
    borderRadius: 4,
  },
  statusCardsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  statusCard: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E7EB",
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  vaultIconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A1628",
    borderRadius: 24,
    marginBottom: 12,
  },
  statusLabel: {
    color: "#6B7B8C",
    fontSize: 10,
    letterSpacing: 0.5,
  },
  statusProtected: {
    color: "#22C55E",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  performanceIconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 24,
    marginBottom: 12,
  },
  performanceValue: {
    color: "#6B7B8C",
    fontSize: 14,
    marginBottom: 2,
  },
  performanceLabel: {
    color: "#0A1628",
    fontSize: 14,
    fontWeight: "600",
  },
});
