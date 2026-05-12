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

          <View style={styles.logoContainer}>
            <View style={styles.checkmarkCircle}>
              <Ionicons name="checkmark" size={24} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.title}>Create Your Vault</Text>
          <Text style={styles.subtitle}>
            Experience minimal luxury in asset management.
          </Text>

          <View style={styles.form}>
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
                  placeholder="Password"
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
                    name={showPassword ? "eye-off-outline" : "lock-closed-outline"}
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {password.length > 0 && (
              <View style={styles.strengthContainer}>
                <Text style={styles.strengthLabel}>Security Strength</Text>
                <View style={styles.strengthBarContainer}>
                  <View
                    style={[
                      styles.strengthBar,
                      { width: `${passwordStrength.strength * 100}%` },
                    ]}
                  />
                </View>
                <Text
                  style={[
                    styles.strengthText,
                    passwordStrength.strength === 1 && styles.strengthOptimal,
                  ]}
                >
                  {passwordStrength.label}
                </Text>
              </View>
            )}

            <TouchableOpacity activeOpacity={0.88} style={styles.createButton}>
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
              <FontAwesome5 name="google" size={18} color="#4285F4" />
            </View>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  keyboardView: {
    flex: 1,
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  checkmarkCircle: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    borderRadius: 24,
  },
  title: {
    color: "#0A1628",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6B7B8C",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "#6B7B8C",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E7EB",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  input: {
    flex: 1,
    color: "#0A1628",
    fontSize: 15,
    padding: 0,
  },
  strengthContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: -8,
  },
  strengthLabel: {
    color: "#6B7B8C",
    fontSize: 12,
    marginRight: 12,
  },
  strengthBarContainer: {
    flex: 1,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    marginRight: 12,
    overflow: "hidden",
  },
  strengthBar: {
    height: "100%",
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  strengthText: {
    color: "#6B7B8C",
    fontSize: 12,
  },
  strengthOptimal: {
    color: "#2196F3",
    fontWeight: "600",
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0A1628",
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 16,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  termsText: {
    color: "#6B7B8C",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
  termsLink: {
    color: "#2196F3",
    fontWeight: "500",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    color: "#9CA3AF",
    fontSize: 10,
    letterSpacing: 1,
    marginHorizontal: 16,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    borderColor: "#DADCE0",
    borderRadius: 4,
    borderWidth: 1,
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  googleIcon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonText: {
    color: "#3C4043",
    fontSize: 14,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#6B7B8C",
    fontSize: 14,
  },
  loginLink: {
    color: "#0A1628",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
