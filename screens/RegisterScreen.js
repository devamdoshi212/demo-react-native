import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordStrength = useMemo(() => {
    if (password.length === 0) return { strength: 0, label: "" };
    if (password.length < 6) return { strength: 0.25, label: "Weak" };
    if (password.length < 10) return { strength: 0.5, label: "Fair" };
    if (password.length < 14) return { strength: 0.75, label: "Good" };
    return { strength: 1, label: "Optimal" };
  }, [password]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.headerLogo}>PAFMS</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentWrap}>
            <View style={styles.logoContainer}>
              <View style={styles.checkmarkCircle}>
                <Ionicons name="shield-checkmark" size={21} color="#064F9E" />
              </View>
            </View>

            <Text style={styles.title}>Create Your Vault</Text>
            <Text style={styles.subtitle}>
              Experience minimal luxury in asset management.
            </Text>

            <View style={styles.formCard}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>FULL NAME</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Johnathan Doe"
                    placeholderTextColor="#9CA3AF"
                    value={fullName}
                    onChangeText={setFullName}
                    autoCapitalize="words"
                  />
                  <Ionicons name="person-outline" size={20} color="#9CA3AF" />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="name@pafms.com"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <MaterialCommunityIcons name="at" size={20} color="#9CA3AF" />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>SECURE PASSWORD</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="............"
                    placeholderTextColor="#9CA3AF"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setShowPassword((visible) => !visible)}
                  >
                    <Ionicons
                      name={
                        showPassword ? "eye-off-outline" : "lock-closed-outline"
                      }
                      size={20}
                      color="#9CA3AF"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.strengthContainer}>
                <View style={styles.strengthHeader}>
                  <Text style={styles.strengthLabel}>Security Strength</Text>
                  <Text
                    style={[
                      styles.strengthText,
                      passwordStrength.strength === 1 && styles.strengthOptimal,
                    ]}
                  >
                    {password.length > 0 ? passwordStrength.label : "Optimal"}
                  </Text>
                </View>
                <View style={styles.strengthBars}>
                  {[0, 1, 2, 3].map((segment) => (
                    <View key={segment} style={styles.strengthSegment} />
                  ))}
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.88}
                style={styles.createButton}
              >
                <Text style={styles.createButtonText}>Create Account</Text>
                <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
              </TouchableOpacity>

              <Text style={styles.termsText}>
                By signing up, you agree to our{" "}
                <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
                <Text style={styles.termsLink}>Privacy Policy</Text>.
              </Text>
            </View>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity activeOpacity={0.85} style={styles.googleButton}>
              <View style={styles.googleIcon}>
                <FontAwesome5 name="google" size={14} color="#4285F4" />
              </View>
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.loginLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 42,
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
    marginBottom: 28,
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
    letterSpacing: 0,
  },
  skipText: {
    color: "#202124",
    fontFamily: "Inter_400Regular",
    fontSize: 9,
    fontWeight: "400",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  checkmarkCircle: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F8FE",
    borderRadius: 20,
  },
  title: {
    color: "#202124",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 9,
  },
  subtitle: {
    color: "#4F5B67",
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 25,
  },
  formCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderColor: "#EFF3F8",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 17,
    paddingTop: 18,
    paddingBottom: 28,
    marginBottom: 24,
    shadowColor: "#9CA3AF",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.18,
    shadowRadius: 25,
    elevation: 10,
  },
  inputGroup: {
    marginBottom: 17,
  },
  inputLabel: {
    color: "#202124",
    fontFamily: "Inter_700Bold",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 9,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F8FF",
    borderRadius: 5,
    minHeight: 39,
    paddingHorizontal: 13,
  },
  input: {
    flex: 1,
    color: "#202124",
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    padding: 0,
  },
  strengthContainer: {
    marginTop: -5,
    marginBottom: 18,
  },
  strengthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  strengthLabel: {
    color: "#516171",
    fontFamily: "Inter_500Medium",
    fontSize: 9,
    fontWeight: "500",
  },
  strengthBars: {
    flexDirection: "row",
    gap: 4,
  },
  strengthSegment: {
    flex: 1,
    height: 3,
    backgroundColor: "#00769A",
    borderRadius: 2,
  },
  strengthText: {
    color: "#00769A",
    fontFamily: "Inter_700Bold",
    fontSize: 9,
    fontWeight: "700",
  },
  strengthOptimal: {
    color: "#00769A",
    fontWeight: "700",
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#0059B8",
    borderRadius: 5,
    minHeight: 40,
    paddingVertical: 11,
    marginBottom: 18,
    shadowColor: "#0059B8",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.26,
    shadowRadius: 13,
    elevation: 7,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 11,
    fontWeight: "800",
  },
  termsText: {
    color: "#334155",
    fontFamily: "Inter_400Regular",
    fontSize: 8.5,
    lineHeight: 14,
    textAlign: "center",
    paddingHorizontal: 7,
  },
  termsLink: {
    color: "#0059B8",
    fontFamily: "Inter_800ExtraBold",
    fontWeight: "800",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "56%",
    maxWidth: 180,
    minWidth: 148,
    marginBottom: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    color: "#7C8794",
    fontFamily: "Inter_500Medium",
    fontSize: 8,
    letterSpacing: 1,
    marginHorizontal: 9,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 8,
    backgroundColor: "#FFFFFF",
    borderColor: "#C9D0DA",
    borderRadius: 4,
    borderWidth: 1,
    minHeight: 32,
    minWidth: "29%",
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 28,
  },
  googleIcon: {
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonText: {
    color: "#202124",
    fontFamily: "Inter_500Medium",
    fontSize: 9,
    fontWeight: "500",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#5F6B78",
    fontFamily: "Inter_400Regular",
    fontSize: 10,
  },
  loginLink: {
    color: "#0059B8",
    fontFamily: "Inter_500Medium",
    fontSize: 10,
    fontWeight: "500",
  },
});
