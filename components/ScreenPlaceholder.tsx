import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

type Props = {
  title: string;
  description: string;
};

// Temporary content for pages that haven't been built yet.
export default function ScreenPlaceholder({ title, description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.textMuted,
  },
});
