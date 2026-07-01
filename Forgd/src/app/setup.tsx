import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Colors, Spacing } from '@/constants/theme';

export default function SetupScreen() {
  const router = useRouter();
  const scheme = useColorScheme() || 'light';
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.page, { backgroundColor: colors.background }]}> 
      <View style={[styles.container, { backgroundColor: colors.backgroundElement }] }>
        <Text style={[styles.title, { color: colors.text }]}>Setup</Text>
        <Text style={[styles.message, { color: colors.textSecondary }]}>This page is reserved for first-time setup.</Text>
        <Pressable style={[styles.button, { backgroundColor: colors.backgroundSelected }]} onPress={() => router.push('/explore')}>
          <Text style={[styles.buttonText, { color: colors.text }]}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.four,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: Spacing.two,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: Spacing.four,
    lineHeight: 24,
  },
  button: {
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.six,
    borderRadius: Spacing.four,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
