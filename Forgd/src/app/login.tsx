import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import { Colors, Spacing } from '@/constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const scheme = useColorScheme() || 'light';
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  const handleSubmit = () => {
    if (isSignUp) {
      router.push('/setup');
      return;
    }

    router.push('/explore');
  };

  return (
    <ScrollView contentContainerStyle={[styles.page, { backgroundColor: colors.background }]}> 
      <SafeAreaView style={styles.container}>
        <View style={[styles.card, { backgroundColor: colors.backgroundElement, borderColor: colors.backgroundSelected }]}> 
          <Text style={[styles.title, { color: colors.text }]}>Welcome back</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Sign in or create an account.</Text>

          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Email</Text>
            <TextInput
              style={[styles.input, { borderColor: colors.backgroundSelected, color: colors.text }]}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="you@example.com"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Password</Text>
            <TextInput
              style={[styles.input, { borderColor: colors.backgroundSelected, color: colors.text }]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="••••••••"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          {isSignUp && (
            <View style={styles.formGroup}>
              <Text style={[styles.label, { color: colors.text }]}>Confirm password</Text>
              <TextInput
                style={[styles.input, { borderColor: colors.backgroundSelected, color: colors.text }]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholder="••••••••"
                placeholderTextColor={colors.textSecondary}
              />
            </View>
          )}

          <Pressable style={[styles.actionButton, { backgroundColor: colors.backgroundSelected }]} onPress={handleSubmit}>
            <Text style={[styles.actionText, { color: colors.text }]}>{isSignUp ? 'Create account' : 'Log in'}</Text>
          </Pressable>

          <View style={styles.switchRow}>
            <Text style={[styles.switchText, { color: colors.textSecondary }]}> 
              {isSignUp ? 'Already have an account?' : 'New here?'}
            </Text>
            <Pressable onPress={() => setIsSignUp(!isSignUp)}>
              <Text style={[styles.switchLink, { color: colors.text }]}> 
                {isSignUp ? 'Sign in' : 'Sign up'}
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
  },
  card: {
    borderRadius: Spacing.four,
    padding: Spacing.four,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: Spacing.two,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: Spacing.four,
    lineHeight: 24,
  },
  formGroup: {
    marginBottom: Spacing.three,
  },
  label: {
    fontSize: 14,
    marginBottom: Spacing.one,
  },
  input: {
    borderWidth: 1,
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 16,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.three,
    borderRadius: Spacing.four,
    marginTop: Spacing.two,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '700',
  },
  switchRow: {
    marginTop: Spacing.four,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.one,
  },
  switchText: {
    fontSize: 14,
  },
  switchLink: {
    fontSize: 14,
    fontWeight: '700',
  },
});
