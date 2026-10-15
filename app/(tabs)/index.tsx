import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { listItems, type ListItemsData } from '@dataconnect/generated';

import { colors } from '../../constants/colors';
import { dataConnect } from '../../src/firebase';

type Item = ListItemsData['items'][number];

export default function MapScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadItems = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await listItems(dataConnect, { fetchPolicy: 'SERVER_ONLY' });
      setItems(result.data.items);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Could not load treasure items.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadItems();
  }, [loadItems]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>EXPLORE</Text>
      <Text style={styles.title}>Interactive Map</Text>
      <Text style={styles.description}>Find nearby treasure chests and follow the hints to dig them up.</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Available treasure</Text>
        <Pressable onPress={() => void loadItems()} disabled={loading}>
          <Text style={styles.refresh}>{loading ? 'Loading…' : 'Refresh'}</Text>
        </Pressable>
      </View>

      {loading ? <ActivityIndicator color={colors.accent} /> : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {!loading && !error && items.length === 0 ? <Text style={styles.empty}>No treasure items found yet.</Text> : null}
      {items.map((item) => (
        <View key={item.id} style={styles.itemCard}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemId}>ID: {item.id}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingTop: 28, paddingBottom: 32 },
  eyebrow: { fontSize: 11, fontWeight: '700', letterSpacing: 1.4, color: colors.textMuted },
  title: { marginTop: 4, fontSize: 30, fontWeight: '800', color: colors.text },
  description: { marginTop: 8, fontSize: 15, lineHeight: 22, color: colors.textMuted },
  sectionHeader: { marginTop: 28, marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: colors.text },
  refresh: { fontSize: 14, fontWeight: '700', color: colors.accent },
  error: { marginTop: 12, color: colors.danger },
  empty: { padding: 18, borderRadius: 14, backgroundColor: colors.surface, color: colors.textMuted },
  itemCard: { marginBottom: 12, padding: 16, borderRadius: 14, backgroundColor: colors.surface },
  itemName: { fontSize: 17, fontWeight: '700', color: colors.text },
  itemId: { marginTop: 6, fontSize: 11, color: colors.textMuted },
});
